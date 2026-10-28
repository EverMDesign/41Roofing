/**
 * WorkPress Schema Adapter
 * Thin wrapper that maps WorkPress types to the generic schema-builder.
 * All schema logic lives in schema.ts (from schema-builder skill).
 *
 * Note on CompanyCam image URLs: these may be signed/tokenized CDN links that
 * expire. Verify longevity — a dead image URL in structured data wastes
 * rich-result opportunities months down the line.
 */

import { Project } from './workpress-types';
import { buildProjectSchema } from './schema';
import type { ProjectConfig } from './schema';
import type { JsonLdDocument } from './schema-common';
import { BUSINESS_CONFIG } from './schema-business';

// Minimal US state abbreviation -> full name lookup. WorkPress only returns
// a 2-letter `address.state`, but schema-builder's ProjectConfig needs both
// the full name (for the City/State place node) and the code (addressRegion).
const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'District of Columbia',
};

function stateNameFromCode(code: string): string {
  return STATE_NAMES[code.toUpperCase()] ?? code;
}

/** Map a WorkPress Project to the generic ProjectConfig. */
function toProjectConfig(project: Project): ProjectConfig {
  const stateCode = project.address.state;
  return {
    title: project.seoTitle,
    description: project.description,
    slug: project.slug,
    city: project.address.city,
    state: stateNameFromCode(stateCode),
    stateCode,
    serviceTypes: project.services ?? [],
    image: project.cover_photo_url
      ? { url: project.cover_photo_url, name: project.seoTitle }
      : undefined,
    metaDescription: project.metaDescription,
    coordinates: project.coordinates
      ? {
          latitude:
            typeof project.coordinates.lat === 'string'
              ? parseFloat(project.coordinates.lat)
              : project.coordinates.lat,
          longitude:
            typeof project.coordinates.lon === 'string'
              ? parseFloat(project.coordinates.lon)
              : project.coordinates.lon,
        }
      : undefined,
    datePublished: project.created_at,
    dateModified: project.updated_at,
    // Matches the real site structure: Home > Projects > City > Title
    breadcrumbParent: { name: 'Projects', path: '/projects' },
  };
}

/**
 * Generate the JSON-LD graph for a WorkPress project detail page
 * (Service + BreadcrumbList + WebPage nodes in one `@graph`).
 * Returns an array so callers can `.map()` over it into `<script>` tags —
 * today that array always has exactly one document.
 */
export async function generateProjectSchema(
  project: Project,
  // Kept for call-site compatibility with the [city]/[slug] route; project.address.city
  // is the authoritative value used below, so the URL segment itself isn't needed.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  city: string,
): Promise<JsonLdDocument[]> {
  // BUSINESS_CONFIG (schema-business.ts) is the single source of truth for
  // business facts — it's also what the root layout uses to emit the
  // RoofingContractor + WebSite nodes sitewide (buildSitewideSchema()).
  // includeSitewide: false stops this page from building its own, second
  // #business/#website node from WorkPress's org settings — two
  // independently-built nodes under the same @id is how the type (
  // RoofingContractor vs LocalBusiness) and phone format drifted apart.
  const projectConfig = toProjectConfig(project);

  const { jsonLd, issues } = buildProjectSchema(BUSINESS_CONFIG, projectConfig, {
    strict: false,
    includeSitewide: false,
  });

  if (issues.length > 0) {
    console.warn('[WorkPress Schema] buildProjectSchema issues:', issues);
  }

  return [jsonLd];
}
