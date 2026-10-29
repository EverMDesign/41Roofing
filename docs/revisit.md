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
