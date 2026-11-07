import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

// Simulate browser lifecycle/preferences; visual rendering is checked in a real browser.
const source = (
  await readFile(
    new URL('../public/scripts/atmosphere.js', import.meta.url),
    'utf8',
  )
).replace('export function mountAtmosphere', 'function mountAtmosphere');
function setup({
  reducedMotion = false,
  touch = false,
  saved = null,
  storageBlocked = false,
} = {}) {
  const media = new EventTarget();
  media.matches = reducedMotion;
  const coarse = new EventTarget();
  coarse.matches = touch;
  const document = new EventTarget();
  document.hidden = false;
  document.documentElement = { dataset: {} };
  const drawing = {
    clearRect() {},
    setTransform() {},
    beginPath() {},
    arc() {},
    fill() {},
    stroke() {},
    moveTo() {},
    lineTo() {},
  };
  const canvas = {
    getContext: () => drawing,
    getBoundingClientRect: () => ({ width: 800, height: 600 }),
    parentElement: { style: { setProperty() {} } },
  };
  document.querySelector = (selector) =>
    selector.includes('data-ambient') ? canvas : null;
  const label = {};
  const attributes = new Map();
  const button = new EventTarget();
  button.setAttribute = (key, value) => attributes.set(key, value);
  button.querySelector = () => label;
  document.querySelectorAll = () => [button];
  const frames = new Map();
  let id = 0;
  let disconnected = 0;
  const cleanup = vm.runInNewContext(`${source}\nmountAtmosphere();`, {
    document,
    window: new EventTarget(),
    AbortController,
    devicePixelRatio: 2,
    matchMedia: (query) => (query.includes('reduced-motion') ? media : coarse),
    localStorage: {
      getItem() {
        if (storageBlocked) throw Error('blocked');
        return saved;
      },
      setItem(_, value) {
        if (storageBlocked) throw Error('blocked');
        saved = value;
      },
    },
    requestAnimationFrame(callback) {
      const key = ++id;
      frames.set(key, callback);
      return key;
    },
    cancelAnimationFrame(key) {
      frames.delete(key);
    },
    performance: { now: () => 0 },
    ResizeObserver: class {
      observe() {}
      disconnect() {
        disconnected++;
      }
    },
    IntersectionObserver: class {
      observe() {}
      disconnect() {
        disconnected++;
      }
    },
  });
  return {
    document,
    media,
    button,
    frames,
    attributes,
    cleanup,
    label,
    get saved() {
      return saved;
    },
    get disconnected() {
      return disconnected;
    },
  };
}

test('motion is opt-out on desktop and cleanup cancels work/listeners', () => {
  const env = setup();
  assert.equal(env.frames.size, 1);
  assert.equal(env.attributes.get('aria-pressed'), 'true');
  env.cleanup();
  assert.equal(env.frames.size, 0);
  assert.equal(env.disconnected, 2);
  env.button.dispatchEvent(new Event('click'));
  assert.equal(env.frames.size, 0);
});

test('reduced motion overrides a previously enabled preference', () => {
  const env = setup({ reducedMotion: true, saved: 'on' });
  assert.equal(env.frames.size, 0);
  assert.equal(env.document.documentElement.dataset.effects, 'off');
  assert.equal(env.button.disabled, true);
  env.cleanup();
});

test('touch defaults to a static scene without disabling an explicit opt-in', () => {
  const env = setup({ touch: true });
  assert.equal(env.frames.size, 0);
  env.button.dispatchEvent(new Event('click'));
  assert.equal(env.frames.size, 1);
  assert.equal(env.saved, 'on');
  env.cleanup();
});

test('pause persists across reloads and system preference changes', () => {
  const env = setup();
  env.button.dispatchEvent(new Event('click'));
  assert.equal(env.frames.size, 0);
  assert.equal(env.saved, 'off');
  env.media.matches = true;
  env.media.dispatchEvent(new Event('change'));
  env.media.matches = false;
  env.media.dispatchEvent(new Event('change'));
  assert.equal(env.frames.size, 0);
  const reloaded = setup({ saved: env.saved });
  assert.equal(reloaded.frames.size, 0);
  env.cleanup();
  reloaded.cleanup();
});

test('hidden tabs suspend rendering and resume only when visible', () => {
  const env = setup();
  env.document.hidden = true;
  env.document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(env.frames.size, 0);
  env.document.hidden = false;
  env.document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(env.frames.size, 1);
  env.cleanup();
});

test('blocked storage does not break the motion toggle', () => {
  const env = setup({ storageBlocked: true });
  env.button.dispatchEvent(new Event('click'));
  assert.equal(env.label.textContent, '静态');
  assert.equal(env.frames.size, 0);
  env.cleanup();
});
