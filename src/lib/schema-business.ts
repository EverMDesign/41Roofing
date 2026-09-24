/**
 * 41 Roofing & Restoration — Business data + project-specific schema helpers.
 *
 * Exports:
 *   BUSINESS_CONFIG  — BusinessConfig for the standard schema generators
 *   BUSINESS         — UI-facing data for components (area cross-links, service lists)
 *   buildSitewideSchema(rating?)       — layout: RoofingContractor + WebSite
 *   buildHomepageSchema(faqs?, rating?) — homepage: Business + Services + WebPage + FAQPage
 */

import type { BusinessConfig, Node, JsonLdDocument, FaqItem } from "./schema-common";
import { buildBusinessNode, buildWebsiteNode, buildFaqNode, clean } from "./schema-common";

// ── Schema Configuration (for JSON-LD generators) ───────────────────────────

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "41 Roofing & Restoration",
  url: "https://www.41roofing.com",
  type: "RoofingContractor",
  telephone: "(817) 266-9433",
  email: "info@41roofing.com",
  logo: "https://www.41roofing.com/41-roofing-logo.webp",
  image: "https://www.41roofing.com/41-roofing-and-restoration-roof-replacement.webp",
  sameAs: ["https://share.google/lptYzXmBTygQYyjS4"],
  address: {
    street: "208 E Main St Suite D",
    city: "Crowley",
    stateCode: "TX",
    postalCode: "76036",
    country: "US",
  },
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-18:00"],
  areaServed: [
    { city: "Crowley", state: "Texas" },
    { city: "Burleson", state: "Texas" },
    { city: "Joshua", state: "Texas" },
    { city: "Arlington", state: "Texas" },
    { city: "Cleburne", state: "Texas" },
    { city: "Keller", state: "Texas" },
    { city: "Alvarado", state: "Texas" },
    { city: "Mansfield", state: "Texas" },
    { city: "Godley", state: "Texas" },
    { city: "Fort Worth", state: "Texas" },
  ],
  services: [
    { id: "roof-repair", name: "Roof Repair", phrase: "roof repair" },
    { id: "roof-replacement", name: "Roof Replacement", phrase: "roof replacement" },
    { id: "commercial-roofing", name: "Commercial Roofing", phrase: "commercial roofing" },
    { id: "emergency-tarping", name: "Emergency Tarping", phrase: "emergency tarping" },
    { id: "interior-exterior-restoration", name: "Interior and Exterior Restoration", phrase: "interior and exterior restoration" },
    { id: "gutters", name: "Gutters", phrase: "gutter services" },
    { id: "interior-exterior-painting", name: "Interior and Exterior Painting", phrase: "interior and exterior painting" },
    { id: "exterior-repairs", name: "Exterior Repairs", phrase: "exterior repairs" },
  ],
  areaPathPrefix: "/areas",
  areasHub: null,
  templates: {
    pageTitle: "Roofing & Restoration in {city}, {stateCode} | {business}",
    pageDescription: "roof replacement, repair, and storm damage restoration for homes in {city}, {stateCode}.",
    serviceName: "Roofing & Restoration in {city}, {stateCode}",
  },
};

// ── Service descriptions (for homepage schema service entities) ──────────────

const SERVICE_DESCRIPTIONS: Record<string, { description: string; serviceType: string }> = {
  "roof-repair": {
    description: "Expert roof repairs for leaks, storm damage, missing shingles, and flashing issues. We diagnose the problem and fix it right — no unnecessary upselling.",
    serviceType: "Roofing Contractor",
  },
  "roof-replacement": {
    description: "Complete roof replacement with premium architectural and impact-resistant shingle systems. Full tear-off, new underlayment, and dependable installation.",
    serviceType: "Roofing Contractor",
  },
  "commercial-roofing": {
    description: "Commercial roofing services for flat roofs, metal roofs, and multi-unit properties. Inspections, repairs, and full replacements for business owners across North Texas.",
    serviceType: "Roofing Contractor",
  },
  "emergency-tarping": {
    description: "Same-day emergency tarping to protect your property from further damage after storms, fallen trees, or sudden roof failures. Fast response when you need it most.",
    serviceType: "Roofing Contractor",
  },
  "interior-exterior-restoration": {
    description: "Comprehensive restoration services for both interior and exterior property damage. From storm damage to general wear, we restore properties to their original condition with quality craftsmanship.",
    serviceType: "Property Restoration",
  },
  "gutters": {
    description: "Gutter installation, repair, and maintenance services to protect your property from water damage. We ensure proper drainage and long-lasting performance.",
    serviceType: "Gutter Service",
  },
  "interior-exterior-painting": {
    description: "Professional painting services for residential and commercial properties. Interior and exterior painting with quality materials and clean, detailed workmanship.",
    serviceType: "Painting Service",
  },
  "exterior-repairs": {
    description: "Siding, fascia, soffit, fence, and general exterior repairs. We restore and protect the exterior of your property with dependable craftsmanship.",
    serviceType: "Home Improvement",
  },
};

// ── Rating type ──────────────────────────────────────────────────────────────

export interface RatingData {
  ratingValue: number;
  reviewCount: number;
}

// ── Project-specific business node (extends the generic one) ─────────────────

function build41BusinessNode(rating?: RatingData): Node {
  const base = buildBusinessNode(BUSINESS_CONFIG);
  return clean({
    ...base,
    description:
      "Residential and commercial roofing, storm damage repairs, gutters, exterior work, and remodeling services for Crowley and North Texas property owners.",
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS_CONFIG.url}/41-roofing-logo.webp`,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: BUSINESS_CONFIG.telephone,
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "Emergency",
        telephone: BUSINESS_CONFIG.telephone,
        areaServed: "US",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    founder: { "@type": "Person", name: "Brandi Burk" },
    ...(rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: rating.ratingValue,
            reviewCount: rating.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  } as Node);
}

// ── Sitewide Schema (layout — every page) ────────────────────────────────────

export function buildSitewideSchema(rating?: RatingData): JsonLdDocument {
  return {
    "@context": "https://schema.org",
    "@graph": [build41BusinessNode(rating), buildWebsiteNode(BUSINESS_CONFIG)],
  };
}

// ── Homepage Schema ──────────────────────────────────────────────────────────

export function buildHomepageSchema(
  faqs?: { q: string; a: string }[],
  rating?: RatingData,
): JsonLdDocument {
  const business = build41BusinessNode(rating);
  const base = BUSINESS_CONFIG.url;
  const areas = BUSINESS_CONFIG.areaServed?.map((a) => `${a.city}, ${a.state}`) ?? [];

  const serviceEntities: Node[] = BUSINESS_CONFIG.services.map((svc) => {
    const extra = SERVICE_DESCRIPTIONS[svc.id];
    return {
      "@type": "Service",
      "@id": `${base}/#service-${svc.id}`,
      name: svc.name,
      description: extra?.description ?? svc.name,
      provider: { "@id": `${base}/#business` },
      areaServed: areas,
      serviceType: extra?.serviceType ?? svc.name,
    };
  });

  const webPage: Node = {
    "@type": "WebPage",
    "@id": `${base}/#webpage-home`,
    name: "Honest Roofing, Restoration & Remodeling in Crowley, TX",
    description:
      "41 Roofing & Restoration is a trusted roofing and construction company serving Crowley, TX and the surrounding North Texas area. We help homeowners and business owners protect, repair, and restore their properties with honest inspections, dependable workmanship, and clear communication.",
    isPartOf: { "@id": `${base}/#website` },
    mainEntity: { "@id": `${base}/#business` },
  };

  const graph: Node[] = [business, ...serviceEntities, webPage, buildWebsiteNode(BUSINESS_CONFIG)];

  if (faqs && faqs.length > 0) {
    const mapped: FaqItem[] = faqs.map((f) => ({ question: f.q, answer: f.a }));
    graph.push(buildFaqNode(mapped, `${base}/#faq`));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// ── UI Business Data (for components — area cross-links, service lists) ──────

export const BUSINESS = {
  name: BUSINESS_CONFIG.name,
  url: BUSINESS_CONFIG.url,
  phone: BUSINESS_CONFIG.telephone!,
  email: BUSINESS_CONFIG.email!,
  founder: "Brandi Burk",
  logo: "/41-roofing-logo.webp",
  address: {
    street: "208 E Main St Suite D",
    city: "Crowley",
    state: "TX",
    zip: "76036",
    country: "US",
  },
  hours: {
    weekday: { opens: "08:00", closes: "17:00" },
    saturday: { opens: "09:00", closes: "18:00" },
  },
  serviceAreas: [
    "Crowley, TX",
    "Burleson, TX",
    "Joshua, TX",
    "Arlington, TX",
    "Cleburne, TX",
    "Keller, TX",
    "Alvarado, TX",
    "Mansfield, TX",
    "Godley, TX",
    "Fort Worth, TX",
  ],
  areaPages: [
    { slug: "crowley", name: "Crowley" },
    { slug: "burleson", name: "Burleson" },
    { slug: "arlington", name: "Arlington" },
    { slug: "joshua", name: "Joshua" },
    { slug: "cleburne", name: "Cleburne" },
    { slug: "keller", name: "Keller" },
  ],
  services: BUSINESS_CONFIG.services.map((s) => ({
    id: s.id,
    name: s.name,
    description: SERVICE_DESCRIPTIONS[s.id]?.description ?? "",
    serviceType: SERVICE_DESCRIPTIONS[s.id]?.serviceType ?? "",
  })),
} as const;
