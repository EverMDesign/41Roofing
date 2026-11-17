import type { Photo } from '@/lib/workpress-types';

/**
 * Single "After" photo shown at the top of a project page when the project
 * has an after-tagged photo but no before-tagged photo (so no slider).
 *
 * Same 16:9 frame and corner radius as BeforeAfterSlider. No "After" tag is
 * shown, since there is nothing to compare it against. See `getBeforeAfterPhotos()` in workpress-api.ts.
 */
export default function AfterPhoto({ after }: { after: Photo }) {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[10px]">
      <img
        src={after.url}
        alt={after.caption ?? 'After'}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
