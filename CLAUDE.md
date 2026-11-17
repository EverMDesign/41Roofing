@AGENTS.md

## Project page photos: before/after display (41 Roofing only)

Changed 2026-11-16. Project detail pages (`src/app/[city]/[slug]/page.tsx`) choose the top-of-page image from the WorkPress photo tags (`photo.type`: `before`, `after`, or untagged). The logic lives in `getBeforeAfterPhotos()` in `src/lib/workpress-api.ts`:

| Tags on the project | Top of page | Gallery |
|---|---|---|
| before + after | `BeforeAfterSlider` (first before, first after) | untagged photos only |
| after only | `AfterPhoto`: the first after photo by itself, with no "After" label | untagged photos only (after is not repeated) |
| before only | nothing (no slider, no hero image) | all photos, so the before photos stay visible |
| neither | nothing | all photos |

- No project data was edited. Existing projects pick up the new behavior automatically from their current tags.
- Before this change the slider required both tags, and an after-only project showed no hero image (its after photo sat in the gallery).
- With a hero showing, extra before/after photos beyond the first of each are not shown in the gallery.
- This is display only. It does not change which photos WorkPress sends to Google Business Profile, so after photos still go to GBP as before (see `docs/google-business-profile-support.md`).
- Files: `getBeforeAfterPhotos()` (`src/lib/workpress-api.ts`), `src/components/projects/AfterPhoto.tsx` (new), `src/components/projects/BeforeAfterSlider.tsx` (unchanged), `src/app/[city]/[slug]/page.tsx`.
