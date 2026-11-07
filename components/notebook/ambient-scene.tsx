'use client';

import { useEffect } from 'react';

export function AmbientScene() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    const source = '/scripts/atmosphere.js';
    import(/* @vite-ignore */ source)
      .then(({ mountAtmosphere }) => {
        if (!disposed) cleanup = mountAtmosphere();
      })
      .catch(() => {
        /* The static background remains usable if motion cannot load. */
      });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div className="ambient-scene" aria-hidden="true">
      <canvas data-ambient="" />
    </div>
  );
}
