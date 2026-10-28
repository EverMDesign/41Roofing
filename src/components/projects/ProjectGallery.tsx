'use client';

import { useState } from 'react';
import Lightbox from './Lightbox';
import type { Photo } from '@/lib/workpress-types';

/**
 * Scrollable thumbnail strip that opens Lightbox on click.
 * Receives photos already fetched by the server component — this
 * file holds only "which photo is open" UI state, never data state.
 *
 * Thumbnail tokens matched to the site's card pattern: rounded-[10px]
 * corners, brand-border ring, brand-aqua focus/hover ring.
 */
export default function ProjectGallery({
  photos,
  seoTitle,
}: {
  photos: Photo[];
  seoTitle: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  return (
    <div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setOpenIndex(i)}
            className="group shrink-0 overflow-hidden rounded-[10px] border border-brand-border hover:border-brand-aqua transition-colors"
            aria-label={`Open photo ${i + 1} of ${photos.length}`}
          >
            <img
              src={photo.thumbnail_url ?? photo.url}
              alt={photo.caption ? `${photo.caption} - ${seoTitle}` : `${seoTitle} photo ${i + 1}`}
              loading="lazy"
              className="h-28 w-28 md:h-32 md:w-32 object-cover img-hover-scale"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
