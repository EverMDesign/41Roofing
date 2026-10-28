# public — Work Log

A running log of work sessions, changes, and decisions for this project.

---

## 2026-09-16 — 23:55

41 Roofing service area buildout: Deployed 6 Sonnet research agents for Burleson, Crowley, Arlington, Joshua, Cleburne, and Keller TX. Created docs/Service Areas/ with comprehensive MD profiles per city (history, landmarks, weather/storm data, roofing industry relevance, SEO keywords, community connection points). Converted all landmark and homes images to WebP, added to hero banners and about sections on each service area page. Rewrote all service area page copy with geo-targeted content from research (city history, nicknames, specific neighborhoods, hail/storm stats, housing stock data). Added SEO alt tags to every image across all 6 service area pages and the template hero. Reduced hero overlay opacity for better landmark visibility. Commented out Projects section on service area pages (documented in revisit.md). Converted and added 41 Roofing logo to header and footer nav. Connected service area city links in homepage Proudly Serving section. Built TrustBar component with ARCO, Yelp, BBB, and BuildZoom badges. Added full-width Google Maps embed above footer. Updated footer: added missing service links (Gutters, Exterior Repairs), replaced Company section with Areas linking to all 6 cities.

**Files:** src/components/ServiceAreaTemplate.tsx, src/app/areas/*/page.tsx, src/components/sections/TrustBar.tsx, src/components/sections/MapEmbed.tsx, src/components/sections/ServiceAreas.tsx, src/components/sections/Diagnosis.tsx, src/components/Header.tsx, src/components/Footer.tsx, src/app/page.tsx, docs/Service Areas/*.md, docs/revisit.md

**Status:** ✅ Complete

---

## 2026-09-19 — 09:10

Added layered spam protection (honeypot + Cloudflare Turnstile) to all 41Roofing forms. Honeypot: hidden name="company" field catches lazy bots with silent 200 response. Turnstile: invisible browser challenge catches sophisticated bots — reusable Turnstile.tsx component renders widget in invisible mode, each form passes cf-turnstile-response token in submit body, API endpoint verifies token server-side via Cloudflare siteverify before processing. Added per-field validation errors, checkbox accessibility (id/htmlFor/cursor-pointer), address validation (2 commas + state abbreviation + ZIP), and address parsing into separate GHL fields (address1, city, state, postalCode). Updated three skills: /form-check owns client-side (honeypot field, Turnstile widget, validation, NEXT_PUBLIC_TURNSTILE_SITE_KEY); /ghl-connect owns server-side (API endpoint, honeypot rejection, Turnstile verification, TURNSTILE_SECRET_KEY); /site-check audits both layers and delegates to the appropriate skill.

**Files:** src/components/Turnstile.tsx, src/components/QuoteForm.tsx, src/components/InspectionModal.tsx, src/components/sections/Contact.tsx, src/app/api/submit-form/route.ts, src/app/layout.tsx, src/lib/validation.ts, src/lib/ghl-client.ts, .env.local, ~/.claude/skills/form-check/SKILL.md, ~/.claude/skills/ghl-connect/SKILL.md, ~/.claude/skills/site-check/SKILL.md

**Status:** ✅ Complete

---

## 2026-09-22 — 21:27

Diagnosed production form issues on 41Roofing. (1) Forms not redirecting after submit: replaced router.push('/confirmation') with inline success messages on all 3 forms (QuoteForm, InspectionModal, Contact) — form swaps to aqua checkmark + 'REQUEST RECEIVED' message on success, matching Kingdom Care pattern. Removed useRouter imports. (2) Names not saving in GHL on prod: identified root cause — Turnstile verification failing in production (domain not configured or code not deployed), causing API to reject submission, while EverReach tracking script auto-captures the form data and creates a contact with raw fname/lname fields instead of mapped firstName/lastName. Fix: ensure Turnstile site key includes production domain in Cloudflare dashboard and deploy latest code.

**Files:** src/components/QuoteForm.tsx, src/components/InspectionModal.tsx, src/components/sections/Contact.tsx

**Status:** ✅ Complete

---

## 2026-09-22 — 13:40

Form system overhaul: fixed validation bypass, added requestSubmit pattern, auto-reset success messages, server-side format validation, privacy/terms pages, footer links, brand color update, URL slug corrections. Aligned all 3 forms (QuoteForm, Contact, InspectionModal) with Kingdom Care pattern — type="button" + requestSubmit() prevents EverReach from capturing invalid submissions. Updated /form-check skill with all new patterns.

**Files:** src/components/QuoteForm.tsx, src/components/sections/Contact.tsx, src/components/InspectionModal.tsx, src/components/Footer.tsx, src/app/api/submit-form/route.ts, src/app/privacy-policy/page.tsx, src/app/terms-and-conditions/page.tsx, src/app/globals.css, ~/.claude/skills/form-check/SKILL.md

**Status:** ✅ Complete

---

## 2026-10-28 — 11:38

Connected 41Roofing to WorkPress and built the two pages it was missing. Ran workpress-connect to lay the plumbing (workpress-api.ts, workpress-types.ts, workpress-schema.ts, webhook route, env vars), fixed a real bug in the generated schema adapter (it called a generateProjectSchema/schema-types API that no longer exists in the current schema-builder output — rewrote it against the actual buildProjectSchema/BusinessConfig/ProjectConfig API). Ran workpress-pages to build /projects (city filter + load-more via URL params, service area map, empty states) and /[city]/[slug] (hero, before/after slider, lightbox gallery, related projects, GHL-wired CTA form via the existing QuoteForm, full JSON-LD schema). Wired ServiceAreaMap into the archive page with 41Roofing's brand colors, added the Projects link to the header nav (desktop + mobile), and fixed BeforeAfterSlider to a fixed 16:9 aspect ratio after discovering a CompanyCam-tagged 'before' photo was actually a pre-made before/after composite graphic that blew out the layout. Diagnosed and fixed a DNS typo in NEXT_PUBLIC_DASHBOARD_URL (www.app.workpressapp.com -> app.workpressapp.com) and an inactive-subscription 403 that were both silently masked by getProjects()'s fail-safe empty-array return. Committed and pushed all of it, then pushed the real WorkPress + Mapbox env vars to Vercel production (none existed there before) and triggered a fresh deploy — confirmed live: /projects and both current Burleson project detail pages return 200 on www.41roofing.com. Separately diagnosed a rejected Google Business Profile post for an older/renamed project (project no longer exists under that slug in WorkPress) and confirmed via Local Falcon that this GBP location isn't OAuth-connected there.

**Files:** src/app/projects/page.tsx, src/app/projects/loading.tsx, src/app/[city]/[slug]/page.tsx, src/app/api/revalidate/route.ts, src/app/sitemap.ts, src/app/layout.tsx, src/components/Header.tsx, src/components/ServiceAreaMap.tsx, src/components/projects/*, src/lib/workpress-api.ts, src/lib/workpress-types.ts, src/lib/workpress-schema.ts, src/lib/related-projects.ts, WORKPRESS_INTEGRATION.md, WORKPRESS_STANDARDS.md, WORKPRESS_UNMAPPED.md

**Status:** ✅ Complete
**Next Steps:** Register the WorkPress webhook (POST https://www.41roofing.com/api/revalidate with REVALIDATE_SECRET) in the dashboard. Confirm whether re-checking the GBP toggle on a project actually retriggers a GBP post (no new post appeared in Business Profile Manager after the user tried it). Push a corrected GBP post pointing at one of the two current live Burleson project URLs.

---

## 2026-10-28 — 11:39

Fixed the schema.org duplicate-#business bug: project pages were independently rebuilding a full business entity from live WorkPress org settings (LocalBusiness, unnormalized phone) while the root layout already built one from the static schema-business.ts config (RoofingContractor, normalized phone) — same @id, conflicting data. workpress-schema.ts now passes includeSitewide: false and references the layout's node by @id instead. Fixed the breadcrumb's city link, which 404'd (hardcoded /{city} with no areaPathPrefix); added geo to the business config (verified against Google Maps). Added a generic cityUrl override field to ProjectConfig (schema.ts) so a site with hand-curated service-area hub slugs can skip the default areaPathPrefix+slugify derivation — not used on this site, added to keep schema.ts in sync with Kingdom Care's copy, which does need it.

**Files:** src/lib/schema-business.ts, src/lib/schema.ts, src/lib/workpress-schema.ts

**Status:** ✅ Complete
**Next Steps:** GBP posting is currently disabled by Google at the account level for a content policy violation — needs resolution through Google's own appeal process before any further GBP testing is useful. Code-side fixes (JPG-forced photos, no phone/URL in post text, UTM-tagged Learn More link) are ready in the WorkPress dashboard repo for whenever that's lifted.

---

## 2026-10-28 — 14:49

Diagnosed and fixed a bad state value ('TE' instead of 'TX') on project 62 (complete-remodel-in-burleson-tx) that was showing up in the detail page's eyebrow text and the JSON-LD schema's areaServed place name — traced both back to the single project.address.state field with no other duplicate copies anywhere in the code. User fixed the value directly in the WorkPress database (dashboard edit UI reportedly had no way to change it); confirmed via the public API that it now reads TX. Explained that a direct DB edit doesn't trigger any revalidation on its own (bypasses WorkPress's application layer entirely, and the webhook still isn't registered in the dashboard anyway), then manually POSTed to /api/revalidate with the real secret to force the fix live immediately instead of waiting out the 1hr ISR window — confirmed live: page title, eyebrow text, and schema all now show TX/Texas. Separately fixed a real bug on the project detail page: project.description was being dumped into a single <p>, collapsing every \n\n-separated paragraph from WorkPress into one run-on block of text. Now splits on blank lines and renders one <p> per paragraph; same fix applied to the workpress-pages skill template so future sites don't repeat it. Also picked up and shipped the user's parallel schema-business.ts cleanup (removed duplicate contactPoint/openingHoursSpecification entries, fixed a Saturday-hours typo, swapped a share.google link for a stable Google Maps CID, added hasOfferCatalog/knowsAbout/hasMap). Committed and pushed both fixes, confirmed the new Vercel production deployment is live and verified on www.41roofing.com.

**Files:** src/app/[city]/[slug]/page.tsx, src/lib/schema-business.ts, src/lib/workpress-schema.ts

**Status:** ✅ Complete
**Next Steps:** Register the WorkPress webhook (POST https://www.41roofing.com/api/revalidate with REVALIDATE_SECRET) in the dashboard so future edits sync automatically instead of needing a manual revalidate call or a DB fix again. Confirm with the user whether the WorkPress dashboard's address-edit form genuinely has no way to set State (a real product bug worth fixing in the WorkPress codebase itself) or whether that was a one-off issue with this specific project record.

---

## 2026-10-28 — 14:50

Schema.org fixes on the business schema per review: removed duplicate opening hours (openingHours + openingHoursSpecification both present), corrected Saturday hours typo (9am-6pm -> 8am-5pm to match weekday pattern), converted telephone to E.164 format, replaced weak share.google sameAs link with the decoded full Google Maps CID URL, added priceRange/hasMap/hasOfferCatalog/knowsAbout, and collapsed duplicate contactPoint entries into one.

**Files:** src/lib/schema-business.ts

**Status:** ✅ Complete
**Next Steps:** Add remaining sameAs profile URLs (Facebook, Instagram, BBB, Yelp, Nextdoor) when available.

---
