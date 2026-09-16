# Revisit List

Items commented out or removed from the homepage to revisit at a later date.

---

## Services Section ("How Can We Help?")

### Roofing — Commented Out
- **Storm Damage** — "Rapid response and thorough damage assessment." (`/storm-damage`)
- **Roof Inspections** — "Honest assessments and clear documentation." (`/roof-inspections`)

### Restoration & Remodeling — Commented Out
- **Remodeling** — "Interior and exterior renovation projects." (`/remodeling`)
- **Property Repairs** — "General maintenance and structural repairs." (`/property-repairs`)

> These items are commented out in `src/components/sections/Services.tsx`. Uncomment to restore.

---

## RepairOrReplace Section — Removed CTAs

The following link buttons were removed from `src/components/sections/RepairOrReplace.tsx`:

- **Learn About Roof Repair** — outline button linking to `#contact`
- **Learn About Replacement** — outline button linking to `#contact`

> These were two side-by-side border-outline buttons. Replaced with a single "Schedule An Inspection Or Consultation" CTA. Restore when dedicated `/roof-repair` and `/roof-replacement` pages are ready.

---

## Projects Section — Commented Out

- **Projects** — "Recent Work / Roofs We've Built Across North Texas" — 4 project cards (Crowley, Burleson, Joshua, Arlington)

> Commented out in `src/app/page.tsx`. Component file `src/components/sections/Projects.tsx` and `src/components/ProjectCard.tsx` still exist. Uncomment to restore.

---

## ServiceAreas Section — Commented Out Link

- **View All Service Areas** — text link with arrow icon linking to `#contact`

> Commented out in `src/components/sections/ServiceAreas.tsx`. Restore when a dedicated service areas page is ready.

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

The Projects section on all service area pages has been commented out in `src/components/ServiceAreaTemplate.tsx`. Each city page (`src/app/areas/[city]/page.tsx`) still has its `projects` array and `projectsEyebrow`/`projectsHeading` data — just not rendering.

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

## Non-Functional Forms

The following forms exist in the UI but are not yet wired to a backend/CRM:

- **HeroQuoteForm** (`src/components/HeroQuoteForm.tsx`) — Homepage hero quick-quote form
- **SidebarQuoteForm** (`src/components/SidebarQuoteForm.tsx`) — Service & area page sidebar form
- **InspectionModal** (`src/components/InspectionModal.tsx`) — Free roof inspection modal form

> Wire these to GoHighLevel or another CRM endpoint when ready. Reference AvValley's `ghl-client.ts` pattern.

---

## Service Area Page Schema (JSON-LD)

Each service area page (`src/app/areas/[city]/page.tsx`) currently has no Schema.org structured data. Add `LocalBusiness` or `Service` schema with:

- City-specific `areaServed`
- Business `@id` reference
- `BreadcrumbList` schema
- FAQ schema (already have FAQ data in each page)

> Use the existing `generateServicePageSchema()` in `src/lib/schema.ts` as a starting point.

---

## Privacy Policy & Terms of Service

Footer links for "Privacy Policy" and "Terms of Service" currently point to `#contact` (placeholder). Need to:

1. Create `/privacy` and `/terms` pages with actual legal content
2. Update footer links in `src/components/Footer.tsx` (lines 72-73)

> Revisit when legal copy is ready.
