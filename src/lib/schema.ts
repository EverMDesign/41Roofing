/**
 * 41 Roofing & Restoration — Schema.org JSON-LD Generators
 *
 * Four generators:
 *   1. generateSitewideSchema()      — RoofingContractor + WebSite (output on every page via layout)
 *   2. generateHomepageSchema()      — Full @graph: RoofingContractor + Services + WebPage + WebSite
 *   3. generateServicePageSchema()   — @graph: Service + BreadcrumbList + WebPage + FAQPage
 *   4. generateServiceAreaSchema()   — @graph: Service + BreadcrumbList + WebPage + FAQPage (geo-scoped)
 *
 * Business data lives in schema-business.ts. These functions are pure — no side effects.
 */

import { BUSINESS } from "./schema-business";

// ── Types ────────────────────────────────────────────────────────────────────

interface ServiceAreaSchemaInput {
  /** City name (e.g. "Crowley") */
  city: string;
  /** State full name (e.g. "Texas") */
  stateFull: string;
  /** State abbreviation (e.g. "TX") */
  stateAbbr: string;
  /** Page route without domain (e.g. "/areas/crowley") */
  path: string;
  /** Meta description for the page (used for WebPage description) */
  metaDescription: string;
  /** Hero image path */
  image?: string;
  /** Descriptive alt text for the hero image */
  imageAlt?: string;
  /** FAQ items from the page — full text, sentence case questions */
  faqs?: { q: string; a: string }[];
}

interface ServicePageSchemaInput {
  /** Page title (e.g. "Roof Replacement") */
  title: string;
  /** Meta description for the page */
  description: string;
  /** Page route without domain (e.g. "/services/roof-replacement") */
  path: string;
  /** Schema.org serviceType (e.g. "Roofing Contractor") */
  serviceType: string;
  /** Hero image path (e.g. "/roof-replacement-hero.webp") */
  image?: string;
  /** Breadcrumb trail — [{label, href?}] */
  breadcrumbs: { label: string; href?: string }[];
  /** FAQ items from the page */
  faqs?: { q: string; a: string }[];
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface RatingData {
  ratingValue: number;
  reviewCount: number;
}

// ── Shared Helpers ───────────────────────────────────────────────────────────

function businessEntity(rating?: RatingData) {
  return {
    "@type": "RoofingContractor" as const,
    "@id": `${BUSINESS.url}/#business`,
    "sameAs": [
      "https://share.google/lptYzXmBTygQYyjS4",
    ],
    "name": BUSINESS.name,
    "image": `${BUSINESS.url}${BUSINESS.logo}`,
    "logo": {
      "@type": "ImageObject" as const,
      "url": `${BUSINESS.url}${BUSINESS.logo}`,
    },
    "description":
      "Residential and commercial roofing, storm damage repairs, gutters, exterior work, and remodeling services for Crowley and North Texas property owners.",
    "telephone": BUSINESS.phone,
    "contactPoint": [
      {
        "@type": "ContactPoint" as const,
        "contactType": "Customer Service",
        "telephone": BUSINESS.phone,
        "areaServed": "US",
      },
      {
        "@type": "ContactPoint" as const,
        "contactType": "Emergency",
        "telephone": BUSINESS.phone,
        "areaServed": "US",
      },
    ],
    "email": BUSINESS.email,
    "url": BUSINESS.url,
    "address": {
      "@type": "PostalAddress" as const,
      "streetAddress": BUSINESS.address.street,
      "addressLocality": BUSINESS.address.city,
      "addressRegion": BUSINESS.address.state,
      "postalCode": BUSINESS.address.zip,
      "addressCountry": BUSINESS.address.country,
    },
    "areaServed": BUSINESS.serviceAreas.map((area) => ({
      "@type": "City" as const,
      "name": area,
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification" as const,
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": BUSINESS.hours.weekday.opens,
        "closes": BUSINESS.hours.weekday.closes,
      },
      {
        "@type": "OpeningHoursSpecification" as const,
        "dayOfWeek": "Saturday",
        "opens": BUSINESS.hours.saturday.opens,
        "closes": BUSINESS.hours.saturday.closes,
      },
    ],
    "founder": {
      "@type": "Person" as const,
      "name": BUSINESS.founder,
    },
    ...(rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating" as const,
            "ratingValue": rating.ratingValue,
            "reviewCount": rating.reviewCount,
            "bestRating": 5,
            "worstRating": 1,
          },
        }
      : {}),
  };
}

function webSiteEntity() {
  return {
    "@type": "WebSite" as const,
    "@id": `${BUSINESS.url}/#website`,
    "name": BUSINESS.name,
    "url": BUSINESS.url,
    "publisher": { "@id": `${BUSINESS.url}/#business` },
  };
}

// ── Sitewide Schema (layout) ────────────────────────────────────────────────

/**
 * RoofingContractor + WebSite nodes, output on every page via layout.
 * Ensures /#business and /#website @id references resolve everywhere.
 */
export function generateSitewideSchema(rating?: RatingData) {
  return {
    "@context": "https://schema.org",
    "@graph": [businessEntity(rating), webSiteEntity()],
  };
}

// ── Homepage Schema ──────────────────────────────────────────────────────────

/**
 * Full @graph for the homepage — matches the live site's schema structure.
 * Includes: RoofingContractor, all Service entities, WebPage, WebSite.
 */
export function generateHomepageSchema(faqs?: { q: string; a: string }[], rating?: RatingData) {
  const business = businessEntity(rating);

  const serviceEntities = BUSINESS.services.map((svc) => ({
    "@type": "Service" as const,
    "@id": `${BUSINESS.url}/#service-${svc.id}`,
    "name": svc.name,
    "description": svc.description,
    "provider": { "@id": `${BUSINESS.url}/#business` },
    "areaServed": BUSINESS.serviceAreas,
    "serviceType": svc.serviceType,
  }));

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${BUSINESS.url}/#webpage-home`,
    "name": "Honest Roofing, Restoration & Remodeling in Crowley, TX",
    "description":
      "41 Roofing & Restoration is a trusted roofing and construction company serving Crowley, TX and the surrounding North Texas area. We help homeowners and business owners protect, repair, and restore their properties with honest inspections, dependable workmanship, and clear communication.",
    "isPartOf": { "@id": `${BUSINESS.url}/#website` },
    "mainEntity": { "@id": `${BUSINESS.url}/#business` },
  };

  const graph: Record<string, unknown>[] = [business, ...serviceEntities, webPage, webSiteEntity()];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage" as const,
      "@id": `${BUSINESS.url}/#faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question" as const,
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer" as const,
          "text": faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

// ── Service Page Schema ──────────────────────────────────────────────────────

/**
 * Generate @graph schema for a service page.
 * Returns a single object with @context and @graph array.
 */
export function generateServicePageSchema(input: ServicePageSchemaInput) {
  const pageUrl = `${BUSINESS.url}${input.path}`;

  const serviceNode = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    "name": input.title,
    "description": input.description,
    "serviceType": input.serviceType,
    "provider": { "@id": `${BUSINESS.url}/#business` },
    "areaServed": BUSINESS.serviceAreas.map((area) => ({
      "@type": "City" as const,
      "name": area,
    })),
    "url": pageUrl,
    ...(input.image
      ? {
          image: {
            "@type": "ImageObject" as const,
            "url": `${BUSINESS.url}${input.image}`,
            "name": input.title,
          },
        }
      : {}),
  };

  const breadcrumbItems = [
    { "@type": "ListItem" as const, position: 1, name: "Home", item: BUSINESS.url },
    ...input.breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem" as const,
      position: i + 2,
      name: crumb.label,
      ...(crumb.href ? { item: `${BUSINESS.url}${crumb.href}` } : {}),
    })),
    {
      "@type": "ListItem" as const,
      position: input.breadcrumbs.length + 2,
      name: input.title,
      item: pageUrl,
    },
  ];

  const breadcrumbNode = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": breadcrumbItems,
  };

  const webPageNode = {
    "@type": "WebPage" as const,
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": `${input.title} | ${BUSINESS.name}`,
    "description": input.description,
    "isPartOf": { "@id": `${BUSINESS.url}/#website` },
    "about": { "@id": `${pageUrl}#service` },
    "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
    "publisher": { "@id": `${BUSINESS.url}/#business` },
  };

  const graph: Record<string, unknown>[] = [serviceNode, breadcrumbNode, webPageNode];

  if (input.faqs && input.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage" as const,
      "@id": `${pageUrl}#faq`,
      "mainEntity": input.faqs.map((faq) => ({
        "@type": "Question" as const,
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer" as const,
          "text": faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

// ── Service Area Page Schema ────────────────────────────────────────────────

/**
 * Generate @graph schema for a service area page.
 * City-scoped Service with containedInPlace, proper breadcrumbs, and FAQPage.
 */
export function generateServiceAreaSchema(input: ServiceAreaSchemaInput) {
  const pageUrl = `${BUSINESS.url}${input.path}`;

  const serviceNode = {
    "@type": "Service" as const,
    "@id": `${pageUrl}#service`,
    "name": `Roofing & Restoration in ${input.city}, ${input.stateAbbr}`,
    "description": `Roof replacement, repair, and storm damage restoration for homes in ${input.city}, ${input.stateAbbr}.`,
    "serviceType": ["Roof Replacement", "Roof Repair", "Storm Damage Restoration"],
    "provider": { "@id": `${BUSINESS.url}/#business` },
    "areaServed": {
      "@type": "City" as const,
      "name": input.city,
      "containedInPlace": {
        "@type": "State" as const,
        "name": input.stateFull,
      },
    },
    "url": pageUrl,
    ...(input.image
      ? {
          image: {
            "@type": "ImageObject" as const,
            "url": `${BUSINESS.url}${input.image}`,
            "name": input.imageAlt || `${input.city}, ${input.stateAbbr}`,
          },
        }
      : {}),
  };

  const breadcrumbNode = {
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem" as const, position: 1, name: "Home", item: BUSINESS.url },
      { "@type": "ListItem" as const, position: 2, name: input.city, item: pageUrl },
    ],
  };

  const webPageNode = {
    "@type": "WebPage" as const,
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": `Roofing in ${input.city}, ${input.stateAbbr} | ${BUSINESS.name}`,
    "description": input.metaDescription,
    "isPartOf": { "@id": `${BUSINESS.url}/#website` },
    "about": { "@id": `${pageUrl}#service` },
    "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
    "publisher": { "@id": `${BUSINESS.url}/#business` },
  };

  const graph: Record<string, unknown>[] = [serviceNode, breadcrumbNode, webPageNode];

  if (input.faqs && input.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage" as const,
      "@id": `${pageUrl}#faq`,
      "mainEntity": input.faqs.map((faq) => ({
        "@type": "Question" as const,
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer" as const,
          "text": faq.a,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
