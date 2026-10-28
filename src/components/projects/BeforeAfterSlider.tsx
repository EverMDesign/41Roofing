'use client';

import { useState } from 'react';
import type { Photo } from '@/lib/workpress-types';

/**
 * Drag-to-compare before/after slider.
 *
 * Accessibility: the visible drag handle is a native `<input type="range">`
 * layered on top (opacity-0), so arrow keys, Tab, and screen readers get
 * standard range-slider behavior for free — no custom pointer-event math,
 * no custom ARIA widget to maintain.
 *
 * Caller contract: only render this component when BOTH a before and an
 * after photo exist (see `getBeforeAfterPhotos()` in workpress-api.ts).
 * There is no "missing photo" fallback here on purpose — that decision
 * belongs one level up, where the gallery-vs-slider choice is made.
 *
 * Visual tokens matched to 41Roofing's design system (see ProjectCard /
 * ServiceAreaTemplate): rounded-[10px] corners, brand-black tag chips,
 * brand-aqua drag handle.
 */
export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: Photo;
  after: Photo;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="relative w-full aspect-[16/9] select-none overflow-hidden rounded-[10px]"
      role="group"
      aria-label="Before and after photo comparison"
    >
      <img
        src={after.url}
        alt={after.caption ?? 'After'}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before.url}
          alt={before.caption ?? 'Before'}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line + handle — purely visual, pointer-events disabled so
          the range input beneath receives all interaction */}
      <div
        className="pointer-events-none absolute inset-y-0 w-1 bg-brand-aqua shadow-lg"
        style={{ left: `${position}%` }}
      />

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Drag to compare before and after photos"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="absolute left-4 top-4 bg-brand-black/80 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[10px] font-heading">
        Before
      </span>
      <span className="absolute right-4 top-4 bg-brand-black/80 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[10px] font-heading">
        After
      </span>
    </div>
  );
}
