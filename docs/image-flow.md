# 41 Roofing — Image Flow

How images get from upload to the visitor's screen, and to social link previews.

There are three image paths. Each has its own storage, upload method, and place in the code.

| Path | What it covers | Storage | Served from |
|---|---|---|---|
| 1. Site images | Logo, hero and section photos, city landmark and home photos, schema images | Cloudflare R2 bucket `41-roofing` | `https://41media.evermdesign.com/images/...` |
| 2. Project photos | Portfolio projects, galleries, before/after sliders | ImageKit, managed by WorkPress | ImageKit URLs, passed through the WorkPress public API |
| 3. Social link previews | The image shown when a page link is pasted on Facebook, LinkedIn, iMessage, etc. | R2 (same bucket as path 1) | `https://41media.evermdesign.com/images/og-image.jpg` |

A few other assets are hosted by third parties. See "External assets" below.

---

## 1. Site images (Cloudflare R2)

### Storage

- Bucket: `41-roofing` on the EMD Cloudflare account.
- Public domain: `41media.evermdesign.com`, connected to the bucket as an R2 custom domain. Cloudflare provides the certificate and CDN caching.
- Folder layout is flat inside `images/`:

```
images/
├── 41-roofing-logo.webp
├── 41-roofing-and-restoration-roof-replacement.webp   (hero, Diagnosis section)
├── 41-roofing-quad-finished.webp
├── 41-roofing-repair-or-replace-image.webp
├── 41-roofing-restore-thepast.webp
├── 41-roofing-thumbnail-video.webp                    (video poster)
├── {city}-landmark.webp, {city}-homes.webp            (arlington, burleson, cleburne,
│                                                       crowley, joshua, keller)
├── og-image.jpg                                       (1200×630 link preview)
├── 41-roofing-logo-black-outline.png                  (not used by the site)
└── arco-seal.webp                                     (not used by the site)
```

### Why a custom domain and not `r2.dev`

Cloudflare's `pub-….r2.dev` address is for testing. It has a variable rate limit, returns HTTP 429 when exceeded, and has no caching, WAF, or Bot Management. The custom domain avoids those limits. The bucket's `r2.dev` URL was never used by this site.

### Upload

Uses `rclone` with the configured `r2:` remote (config at `~/.config/rclone/rclone.conf`).

```bash
# One file
rclone copyto path/to/new-file.webp r2:41-roofing/images/new-file.webp

# Verify it is live
curl -I https://41media.evermdesign.com/images/new-file.webp
```

Add `--header-upload "Content-Type: image/jpeg"` if the content type is guessed wrong.

### Where the code reads them

There is no shared constant. The code uses full URLs, so a change of host means a find and replace of `41media.evermdesign.com` in `src`.

| File | Images |
|---|---|
| `src/components/Header.tsx`, `Footer.tsx` | Logo |
| `src/components/sections/Hero.tsx`, `Diagnosis.tsx` | Roof replacement photo |
| `src/components/sections/RepairOrReplace.tsx`, `StatementBanner.tsx`, `ConfirmationHero.tsx`, `Owner.tsx` (poster) | Section photos |
| `src/app/services/roof-replacement/page.tsx` | Quad-finished photo |
| `src/lib/service-areas-data.ts` | City landmark and home photos (`heroImage`, `aboutImage`) |
| `src/lib/schema-business.ts` | Schema `logo` and `image` |

Components use plain `<img>` tags, not `next/image`, so `next.config.ts` needs no `remotePatterns` entry.

### Request flow

1. Visitor opens a page served by Vercel.
2. The browser requests each image directly from `41media.evermdesign.com`.
3. Cloudflare serves the file from its edge cache, or from the R2 bucket on a miss.

### Known broken references

These paths are used in the code but the files do not exist anywhere. They return 404 on the live site and were already broken before the move to R2.

- `/roof-replacement-hero.webp` — `heroImage` on 8 service pages (gutters, exterior-repairs, roof-repair, emergency-tarping, interior-exterior-painting, commercial-roofing, roof-replacement, interior-exterior-restoration)
- `/inspection-preparation.webp` — `src/components/sections/PrepareForInspection.tsx`

To fix: upload the files to `images/` and change those paths to the `41media.evermdesign.com` URLs.

### Local files

`public/` still holds the original copies of the images. They are no longer referenced by the code and can be deleted once the live site is confirmed working. `public/41-roofing-inspecting-roofing.mp4` (551 MB) is gitignored, unused, and not in R2.

Files that stay in the repo: `src/app/favicon.ico`, `src/app/apple-icon.png`, `public/llms.txt`.

---

## 2. Project photos (WorkPress and ImageKit)

Portfolio projects are not stored in this repo or in R2.

1. **Photos enter WorkPress** by CompanyCam sync (before/after tags are detected) or by manual upload in the WorkPress dashboard.
2. **WorkPress uploads them to ImageKit** under `/workpress/{orgId}/{projectId}/`. The database stores the URLs, order, and cover photo.
3. **ImageKit resizes on request** through URL parameters (thumbnail 400px, cover 1200px, full 2048px) and serves WebP or AVIF depending on the browser.
4. **This site reads them from the WorkPress public API** through `src/lib/workpress-api.ts`. The types are in `src/lib/workpress-types.ts` (`cover_photo_url`, photo `url`).
5. **Components render the URLs** with `<img>`: `src/components/ProjectCard.tsx`, `src/components/projects/ProjectCard.tsx`, and `src/components/projects/BeforeAfterSlider.tsx`.
6. **Publishing triggers a refresh**: WorkPress sends a webhook to `POST /api/revalidate` (`src/app/api/revalidate/route.ts`) with a secret token matched against `REVALIDATE_SECRET`.
7. **Project pages use the cover photo for social previews**: `src/app/[city]/[slug]/page.tsx` sets the OG and Twitter image to the project's `cover_photo_url`, and `src/lib/workpress-schema.ts` uses it in schema.

---

## 3. Social link previews (OG image)

### File

- 1200×630 JPG, about 137 KB, cropped from the roof-replacement photo (crew working on a roof with the company truck).
- Stored at `images/og-image.jpg` in R2.
- `public/og-image.jpg` is an unused fallback copy.

### Metadata

Every `openGraph` and `twitter` block (`summary_large_image`) points at `https://41media.evermdesign.com/images/og-image.jpg`, with `width: 1200`, `height: 630`, and alt text. This is set in:

- `src/app/layout.tsx` (default for the whole site)
- `src/app/services/*/page.tsx` (each service page)
- `src/app/areas/[slug]/page.tsx` (`OG_IMAGE` constant)
- `src/app/reviews/page.tsx`

Project pages are the exception. They use the project's own cover photo from ImageKit.

### What happens when a link is pasted

1. The platform fetches the page HTML.
2. It reads `og:image` and `twitter:image` from the tags.
3. It downloads the image from `41media.evermdesign.com`.
4. It caches the result.

### Replacing the image

- Platforms cache previews. After changing the image, use a **new file name** or clear the cache with Facebook's Sharing Debugger and LinkedIn's Post Inspector.
- Keep 1200×630, under about 300 KB (some apps reject larger files), JPG or PNG.

### Gaps

- All service and area pages share one preview image. Per-page images would need a separate image per page and a change to that page's metadata.

---

## External assets

Not controlled by this repo or by EMD's Cloudflare account:

- Two videos hosted on GoHighLevel's file host (`assets.cdn.filesafe.space`): `src/components/sections/StormDamage.tsx` and `Owner.tsx`.
- Trust badges from third parties in `src/components/sections/TrustBar.tsx` (BuildZoom badge, ARCO seal from `roofingcontractors.org`).
- Google reviews, fetched through `src/app/api/reviews/route.ts` (text, not images).

If a third party removes an asset, the site shows a broken image. Consider copying them to R2 if they matter.

---

## Checklist: adding a new site image

1. Prepare the file (WebP for photos, 1200×630 JPG for OG images).
2. Upload with `rclone copyto` to `r2:41-roofing/images/`.
3. Check `curl -I https://41media.evermdesign.com/images/<file>` returns 200 and the right `content-type`.
4. Reference it with the full `https://41media.evermdesign.com/images/<file>` URL in the component or data file.
5. Commit and push the code change.

## Checklist: a project photo is missing from the site

1. Confirm the project is published in WorkPress and the photo is attached.
2. Check the WorkPress public API response for the project's photos.
3. Check that the `/api/revalidate` webhook is registered and `REVALIDATE_SECRET` matches on both sides.
4. Open the ImageKit URL directly. If it loads, the issue is on the site side. If it does not, the issue is in WorkPress or ImageKit.

## Related

- Cloudflare account: EMD agency account (one bucket per client).
- WorkPress image pipeline: `WorkPress/TECH_STACK.md`, section "Image Pipeline".
- Same flow for Kingdom Care: `Kingdom Care/docs/image-flow.md`.
- Commit that moved the images: `16b1daf`.
