'use client';

import { useEffect, useRef, useState } from 'react';
import type { Photo } from '@/lib/workpress-types';
import ChevronIcon from '@/components/icons/ChevronIcon';

/**
 * Modal lightbox for a project's photo gallery.
 * Next/previous, close button, Escape to close, swipe on mobile,
 * and focus sent to the close button on open so keyboard users
 * land inside the dialog immediately.
 *
 * This component owns NO data fetching — it only receives photos
 * already loaded by the server component that renders the gallery.
 *
 * Overlay/close-button structure matches InspectionModal.tsx's modal
 * pattern (fixed backdrop + animate-[fadeIn] keyframe already defined
 * in globals.css); nav arrows reuse the site's ChevronIcon rotated
 * left/right instead of new icon markup.
 */
export default function Lightbox({
  photos,
  startIndex,
  onClose,
}: {
  photos: Photo[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % photos.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + photos.length) % photos.length);
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [photos.length, onClose]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      setIndex((i) =>
        delta < 0 ? (i + 1) % photos.length : (i - 1 + photos.length) % photos.length
      );
    }
    touchStartX.current = null;
  }

  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption ?? 'Project photo'}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-brand-black/90 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {photos.length > 1 && (
        <button
          onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
          aria-label="Previous photo"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-brand-aqua transition-colors"
        >
          <span className="inline-block rotate-90">
            <ChevronIcon />
          </span>
        </button>
      )}

      <img
        src={photo.url}
        alt={photo.caption ?? 'Project photo'}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-[10px]"
      />

      {photos.length > 1 && (
        <button
          onClick={() => setIndex((i) => (i + 1) % photos.length)}
          aria-label="Next photo"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-brand-aqua transition-colors"
        >
          <span className="inline-block -rotate-90">
            <ChevronIcon />
          </span>
        </button>
      )}

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-heading text-xs tracking-widest uppercase text-white/70">
        {index + 1} / {photos.length}
      </span>
    </div>
  );
}
