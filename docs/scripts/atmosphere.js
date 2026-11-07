// One optional renderer shared by React pages and standalone paper pages.
export function mountAtmosphere() {
  const backdrop = document.querySelector('canvas[data-ambient]');
  const orbit = document.querySelector('canvas[data-orbit]');
  const controls = [...document.querySelectorAll('[data-motion-toggle]')];
  if (!backdrop) return () => {};
  const field = backdrop.getContext('2d');
  const globe = orbit?.getContext('2d');
  if (!field) return () => {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = matchMedia('(pointer: coarse)');
  const lifetime = new AbortController();
  const { signal } = lifetime;
  let stored = null;
  try {
    stored = localStorage.getItem('fieldnotes-motion');
  } catch {
    /* Storage is optional. */
  }
  let enabled =
    !reduced.matches && (stored === null ? !coarse.matches : stored === 'on');
  let frame = 0;
  let last = 0;
  let phase = 0;
  let heroVisible = Boolean(orbit);
  let width = 0;
  let height = 0;
  let orbitWidth = 0;
  let orbitHeight = 0;
  let pointer = { x: -1000, y: -1000 };
  let tilt = { x: 0, y: 0 };
  let pulse = null;
  const noise = (n) =>
    (((Math.sin(n * 127.1 + 311.7) * 43758.5453) % 1) + 1) % 1;
  const stars = Array.from({ length: 120 }, (_, i) => ({
    x: noise(i + 1),
    y: noise(i + 301),
    r: i % 23 === 0 ? 1.45 : 0.55 + noise(i + 601) * 0.5,
  }));

  function sizeCanvas(canvas, context) {
    const bounds = canvas.getBoundingClientRect();
    const scale = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(bounds.width * scale);
    canvas.height = Math.round(bounds.height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    return bounds;
  }
  function resize() {
    const bounds = sizeCanvas(backdrop, field);
    width = bounds.width;
    height = bounds.height;
    if (orbit && globe) {
      const box = sizeCanvas(orbit, globe);
      orbitWidth = box.width;
      orbitHeight = box.height;
    }
    draw();
  }
  function drawField() {
    field.clearRect(0, 0, width, height);
    for (const [i, star] of stars.entries()) {
      const x = star.x * width + Math.sin(phase * 0.15 + i) * 6;
      const y = star.y * height + Math.cos(phase * 0.12 + i) * 8;
      const distance = Math.hypot(x - pointer.x, y - pointer.y);
      const proximity = enabled ? Math.max(0, 1 - distance / 190) : 0;
      const shimmer =
        0.15 + (Math.sin(phase * (0.35 + star.r * 0.15) + i) + 1) * 0.09;
      field.fillStyle = `rgba(154,113,57,${shimmer + proximity * 0.22})`;
      field.beginPath();
      field.arc(x, y, star.r + proximity, 0, Math.PI * 2);
      field.fill();
      if (i % 23 === 0) {
        const ray = star.r * 3;
        field.strokeStyle = `rgba(154,113,57,${shimmer * 0.65})`;
        field.beginPath();
        field.moveTo(x - ray, y);
        field.lineTo(x + ray, y);
        field.moveTo(x, y - ray);
        field.lineTo(x, y + ray);
        field.stroke();
      }
      if (proximity > 0) {
        field.strokeStyle = `rgba(171,123,68,${proximity * 0.15})`;
        field.beginPath();
        field.moveTo(x, y);
        field.lineTo(pointer.x, pointer.y);
        field.stroke();
      }
    }
    if (pulse) {
      const age = phase - pulse.start;
      if (age < 1.4) {
        field.strokeStyle = `rgba(166,116,59,${(1 - age / 1.4) * 0.22})`;
        field.beginPath();
        field.arc(pulse.x, pulse.y, age * 110, 0, Math.PI * 2);
        field.stroke();
      } else pulse = null;
    }
  }
  function drawOrbit() {
    if (!globe || !orbitWidth) return;
    globe.clearRect(0, 0, orbitWidth, orbitHeight);
    const scale = Math.min(orbitWidth, orbitHeight) / 440;
    const centerX = orbitWidth / 2;
    const centerY = orbitHeight / 2;
    const yaw = Math.sin(phase * 0.15) * 0.38 + tilt.x * 0.22;
    const pitch = 0.48 + tilt.y * 0.2;
    const points = [];
    for (let ring = 0; ring < 9; ring++) {
      globe.beginPath();
      for (let step = 0; step <= 96; step++) {
        const a = (step / 96) * Math.PI * 2;
        const b = (ring / 9) * Math.PI * 2 + a * 2 + phase * 0.1;
        const radius = 151 + Math.cos(b) * 23;
        const x = Math.cos(a) * radius;
        const y = Math.sin(a) * radius;
        const z = Math.sin(b) * 33;
        const rotatedX = x * Math.cos(yaw) + z * Math.sin(yaw);
        const rotatedZ = -x * Math.sin(yaw) + z * Math.cos(yaw);
        const projectedY = y * Math.cos(pitch) - rotatedZ * Math.sin(pitch);
        const depth = y * Math.sin(pitch) + rotatedZ * Math.cos(pitch);
        const px = centerX + rotatedX * scale;
        const py = centerY + projectedY * scale;
        if (!step) globe.moveTo(px, py);
        else globe.lineTo(px, py);
        if (step < 96)
          points.push({ x: px, y: py, depth, warm: ring === 3 || ring === 4 });
      }
      globe.strokeStyle =
        ring === 4 ? 'rgba(160,115,61,0.18)' : 'rgba(155,103,72,0.12)';
      globe.lineWidth = 0.6;
      globe.stroke();
    }
    points.sort((a, b) => a.depth - b.depth);
    for (const point of points) {
      const depth = (point.depth + 180) / 360;
      globe.fillStyle = point.warm
        ? `rgba(151,105,47,${0.22 + depth * 0.52})`
        : `rgba(160,90,62,${0.2 + depth * 0.52})`;
      globe.beginPath();
      globe.arc(
        point.x,
        point.y,
        (0.55 + depth * 1.15) * scale,
        0,
        Math.PI * 2,
      );
      globe.fill();
    }
  }
  function draw() {
    drawField();
    if (heroVisible) drawOrbit();
  }
  function tick(now) {
    if (!enabled || document.hidden) {
      frame = 0;
      return;
    }
    if (now - last >= 1000 / 30) {
      phase += Math.min((now - last) / 1000, 0.05);
      last = now;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame);
    frame = 0;
    document.documentElement.dataset.effects = enabled ? 'on' : 'off';
    for (const button of controls) {
      button.disabled = reduced.matches;
      button.setAttribute('aria-pressed', String(enabled));
      button.setAttribute(
        'aria-label',
        enabled ? '暂停背景动效' : '开启背景动效',
      );
      button.title = reduced.matches
        ? '系统已启用减少动态效果'
        : '切换背景动效';
      button.querySelector('[data-motion-label]').textContent = enabled
        ? '动效开'
        : '静态';
    }
    if (!enabled) {
      pointer = { x: -1000, y: -1000 };
      pulse = null;
      tilt = { x: 0, y: 0 };
    }
    draw();
    if (enabled && !document.hidden) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  }
  for (const button of controls)
    button.addEventListener(
      'click',
      () => {
        enabled = !enabled;
        stored = enabled ? 'on' : 'off';
        try {
          localStorage.setItem('fieldnotes-motion', stored);
        } catch {
          /* No persistence is required. */
        }
        sync();
      },
      { signal },
    );
  window.addEventListener(
    'pointermove',
    (event) => {
      if (!enabled || coarse.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      backdrop.parentElement.style.setProperty('--pointer-x', `${pointer.x}px`);
      backdrop.parentElement.style.setProperty('--pointer-y', `${pointer.y}px`);
      if (orbit) {
        const box = orbit.getBoundingClientRect();
        tilt = {
          x: Math.max(
            -1,
            Math.min(1, ((pointer.x - box.left) / box.width) * 2 - 1),
          ),
          y: Math.max(
            -1,
            Math.min(1, ((pointer.y - box.top) / box.height) * 2 - 1),
          ),
        };
      }
    },
    { passive: true, signal },
  );
  document.addEventListener(
    'pointerleave',
    () => {
      pointer = { x: -1000, y: -1000 };
    },
    { signal },
  );
  window.addEventListener(
    'pointerdown',
    (event) => {
      if (
        enabled &&
        !coarse.matches &&
        !event.target.closest('a,button,input,select,summary')
      )
        pulse = { x: event.clientX, y: event.clientY, start: phase };
    },
    { passive: true, signal },
  );
  document.addEventListener('visibilitychange', sync, { signal });
  function preferenceChanged() {
    enabled =
      !reduced.matches && (stored === null ? !coarse.matches : stored === 'on');
    sync();
  }
  reduced.addEventListener('change', preferenceChanged, { signal });
  coarse.addEventListener('change', preferenceChanged, { signal });
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(backdrop);
  if (orbit) resizeObserver.observe(orbit);
  const intersection = new IntersectionObserver(
    ([entry]) => {
      heroVisible = entry.isIntersecting;
    },
    { rootMargin: '80px' },
  );
  if (orbit) intersection.observe(orbit);
  resize();
  sync();
  return () => {
    lifetime.abort();
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersection.disconnect();
  };
}
