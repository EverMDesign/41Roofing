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
