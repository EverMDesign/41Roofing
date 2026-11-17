# Revisit List

Items commented out or removed from the homepage to revisit at a later date.

---

## RepairOrReplace Section — Removed CTAs

The following link buttons were removed from `src/components/sections/RepairOrReplace.tsx`:

- **Learn About Roof Repair** — outline button linking to `#contact`
- **Learn About Replacement** — outline button linking to `#contact`

> These were two side-by-side border-outline buttons. Replaced with a single "Schedule An Inspection Or Consultation" CTA. Restore when dedicated `/roof-repair` and `/roof-replacement` pages are ready.

---

## Sections Removed from Homepage

The following sections were removed from `page.tsx` but their component files still exist in `src/components/sections/`:

- **HonestInspections.tsx** — "We Diagnose Before We Sell" trust section (redundant with Diagnosis)
- **ResidentialServices.tsx** — Detailed residential service list (redundant with Services)
- **Materials.tsx** — "Materials & Roofing Systems" (Architectural Shingles, Impact-Resistant, Metal, Commercial)
- **Restoration.tsx** — "When Your Project Goes Beyond the Roof" (Gutters, Exterior/Interior Restoration, Remodeling, Property Repairs)
- **Commercial.tsx** — "Commercial Roofing Without the Guesswork"
- **Process.tsx** — Standalone 6-step process (merged into StormDamage section)

---

## Service Area Pages — Projects Section (Commented Out)

The Projects section on all service area pages has been commented out in `src/components/ServiceAreaTemplate.tsx`. Each city's `projects` array and `projectsEyebrow`/`projectsHeading` data still lives in `src/lib/service-areas-data.ts` (the single data file behind `src/app/areas/[slug]/page.tsx`) — just not rendering.

**Per-city project data still in page files:**
- **Arlington** — Hail Damage Replacement, Commercial Flat Roof Repair, Wind Damage Restoration
- **Burleson** — Architectural Shingle Install, Post-Storm Restoration, Valley & Flashing Repair
- **Crowley** — Full System Replacement, Emergency Tarp & Restore, Chimney Flashing Repair
- **Joshua** — Storm Damage Replacement, Aging Roof Replacement, Leak Repair & Flashing
- **Cleburne** — Historic Home Re-Roof, Post-Hail Restoration, Gutter & Fascia Repair
- **Keller** — Premium Shingle Upgrade, Insurance Restoration, Skylight & Valley Repair

**To restore:** Uncomment the Projects section in `ServiceAreaTemplate.tsx` (search for "Projects — commented out"). All project images currently use Unsplash placeholders — replace with real project photos before re-enabling.

---

## Google Reviews — Full Access via Business Profile API

Currently using Google Places API which only returns 5 "most relevant" reviews (out of 76). To get ALL reviews and filter them by service page (roof, gutters, painting, etc.):

- **Google Business Profile API** requires a one-time OAuth authorization from the business owner (Brandi)
- Send her a consent link, she clicks "Allow" on her Google account — no password shared
- Returns a refresh token that grants access to all reviews indefinitely
- Once authorized: fetch all reviews, store in JSON, filter by service keywords, place on respective service pages

> Revisit when ready to contact Brandi for the one-click authorization.

---

## SEO & LLM Optimization — P2 Items

### Blog / Resources Hub
Create `/blog` or `/resources` with 5–10 educational guides targeting top-of-funnel keywords (e.g. "how to know if you need a new roof", "hail damage signs in Texas"). Helps Google and AI assistants cite 41 Roofing as an authority.

### Custom 404 Page
Create `src/app/not-found.tsx` with branded design, helpful links back to services/areas, and a CTA. Currently uses the default Next.js 404.

### Viewport Export
Add explicit `viewport` export to `src/app/layout.tsx` per Next.js best practices. Currently relying on the framework default.

### TrustBar Badge Optimization
The BBB/BuildZoom/ARCO/Yelp badges in `src/components/sections/TrustBar.tsx` are hosted externally (bbb.org, buildzoom.com, etc.), not local files — there's nothing in `public/` to convert to WebP. Low priority; only worth revisiting if a self-hosted copy becomes necessary.

### Auto-Generate `llms.txt` at Build Time
`public/llms.txt` exists but is hand-written. Write a build script that pulls from `schema-business.ts` (services, areas) and `FAQ.tsx` (FAQ data) to auto-generate it, so it can't drift out of sync with manual updates.

---

## Local SEO Structure — Site Check Findings (2026-11-14)

Result of the `/site-check` K section (Local SEO Structure) run against this site. Based on a code read only, no build. Principles come from the Drive folder `EMD_website-admin`.

### P0 — Fix before launch

- **Create a `/services` hub page.** There is no `src/app/services/page.tsx`. It should link to every service page. `ServicePageTemplate.tsx` falls back to `/services` as a breadcrumb parent, so confirm no breadcrumb currently points to a 404.
- **Resolve the two overlapping restoration pages.** `/services/restoration` and `/services/interior-exterior-restoration` both exist and compete for the same topic.
  - The header and footer link only to `interior-exterior-restoration`.
  - Breadcrumbs on gutters, exterior-repairs and painting link to `/services/restoration`.
  - Decide on one page or on a clear parent/child split, then align nav, breadcrumbs, sitemap and canonicals.

### P1 — Local proof and consistency

- **Make city page reviews city-specific.** In `ServiceAreaTemplate.tsx`, `reviews = liveReviews ?? data.reviews` replaces each city's own reviews with the same Google reviews on every city page. Merge them or prefer city-specific reviews. Ties into the Google Business Profile API item above.
- **Link project pages to their city and service pages.** `src/app/[city]/[slug]/page.tsx` links only to Home and `/projects`. Add links to `/areas/{city}` and to the matching `/services/...` page.
- **Fix the `ProjectCard.tsx` fallback.** It defaults to `href="#contact"` when a project has no href.
- **Settle one business name.** The schema and titles use "41 Roofing & Restoration" (~54 times). Page copy also uses "41 Roofing and Restoration" (~28) and "...and Restoration LLC" (~13). Pick the form that matches the Google Business Profile exactly.
- **Confirm the primary phone number.** 817-266-9433 and 817-887-9200 both appear sitewide. Confirm which matches the Business Profile and use it consistently in the header, footer, schema and forms. If both are real, label them.

### P2 — Cleanup and verification

- **Link the parent service pages.** `/services/roofing` and `/services/restoration` are in the sitemap and breadcrumbs but not in the header or footer.
- **Re-enable the city projects section** (see the Projects section above) only with real jobs. It should show only that city's projects, hide when empty, and fall back to local reviews.
- **Check the header anchors.** "FAQ" (`#faq`) and "Areas" (`#service-areas`) are in-page anchors. They resolve on the homepage, and `#faq` also on city pages. Confirm they work on service and project pages, or point them at real routes.
- **Confirm service page H1 and intro.** Titles include "Crowley, TX" on all 10 service pages. Check that each H1 and opening paragraph also names the service and the home city.

### Confirm with client (off-site, can't be checked in code)

- Google Business Profile: primary category, services and service areas set.
- Steady reviews that mention the service and the town, with owner responses.
- Real photos, and consistent name, address and phone across the web.
- Quality local links, not mass directory listings.
- Note: distance dominates map-pack ranking, so pages alone won't win distant towns.
