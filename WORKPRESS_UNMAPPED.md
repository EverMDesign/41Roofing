# WorkPress Unmapped Fields

Updated after running the `workpress-pages` skill, which built the Projects archive
(`src/app/projects/page.tsx`) and Project detail page (`src/app/[city]/[slug]/page.tsx`).
Most of what was unmapped is now resolved — see below for what's left.

## Resolved by workpress-pages

| Field | Where it's wired now |
|---|---|
| `seoTitle` | `ProjectCard` title, detail page `<h1>`, `<title>` tag, breadcrumb |
| `description` | Detail page body |
| `cover_photo_url` | `ProjectCard` image, detail page hero background |
| `address.city` / `address.state` | `ProjectCard` city tag, URL routing (`/{city}/{slug}`), hero eyebrow |
| `services` (string[]) | `ProjectCard` primary-service tag, detail page "Services Performed" pill list, `ProjectCTAForm` tab/service default |
| `slug` | Detail page route param, card `href` |
| `metaDescription` | Detail page `generateMetadata()` |
| `created_at` / `updated_at` | `sitemap.ts` `lastModified` |
| `is_published` | Filtered everywhere `getProjects()`/`getProject()` is consumed (archive, sitemap, related-projects, detail-page 404 guard) |
| Photo fields (`url`, `thumbnail_url`, `caption`, `order`, `type`) | `ProjectGallery` + `Lightbox` (gallery/lightbox), `BeforeAfterSlider` (before/after pairs via `getBeforeAfterPhotos()`) |
| Schema (Service + BreadcrumbList + WebPage) | `generateProjectSchema()` now runs on every detail page |

## Still unmapped

- **`coordinates.lat/lon`** — `ServiceAreaMap.tsx` (created by `workpress-connect`) is still not wired into any page. `workpress-pages` doesn't build a map view; decide whether it belongs on the archive page (all-projects map) or isn't needed yet.

## Company fields — intentionally left static, not an oversight

41Roofing already has a complete, hardcoded business profile in `src/lib/schema-business.ts` (`BUSINESS_CONFIG`) that feeds the sitewide JSON-LD in `layout.tsx` via `buildSitewideSchema()`:
- `name`: "41 Roofing & Restoration"
- `telephone`: "(817) 266-9433"
- `address`: 208 E Main St Suite D, Crowley, TX 76036
- `url`: https://www.41roofing.com

This was **not** replaced with `getCompanySettings()` for two reasons:
1. It's already correct, static, and doesn't need WorkPress to be the source of truth.
2. The site displays **two different phone numbers** in `Footer.tsx` — "Call/Text" (817-266-9433) and "Office" (817-887-9200) — and WorkPress's `getCompanySettings()` only returns one `company_phone`. Overwriting either hardcoded number without knowing which one WorkPress should represent would be a guess.

The project detail page's `generateProjectSchema()` does call `getCompanySettings()` for its own schema generation (falling back to placeholder data if the dashboard isn't configured yet) — that's separate from the sitewide static schema and is expected to diverge until real org settings are filled in.

If you want WorkPress to become the source of truth for company info sitewide later, decide which phone number maps to `company_phone` first, then wire `getCompanySettings()` into `Footer.tsx` and `schema-business.ts` by hand.

## Note: the old placeholder Projects UI is untouched

`src/components/sections/Projects.tsx` + `src/components/ProjectCard.tsx` (the bespoke `material`/`problem`/`solution` placeholder cards, commented out on the homepage) and each city page's local `projects` array in `src/app/areas/[city]/page.tsx` were left exactly as they were — they're unrelated to the new WorkPress-backed `src/components/projects/ProjectCard.tsx`. See `docs/revisit.md` for that pre-existing backlog item; it's a separate decision (restore that homepage section with real photos, or delete it and link to `/projects` instead).

## Next step

- Fill in real `.env.local` values (`NEXT_PUBLIC_DASHBOARD_URL`, `NEXT_PUBLIC_CLIENT_ID`, `REVALIDATE_SECRET`) and WorkPress Organization Settings so `/projects` and `/[city]/[slug]` have real data to render instead of the empty state.
- Register the webhook in the WorkPress dashboard: `https://www.41roofing.com/api/revalidate`.
