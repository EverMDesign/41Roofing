/**
 * 41 Roofing & Restoration — Schema.org JSON-LD Generators
 *
 * Two generators:
 *   1. generateHomepageSchema()    — Full @graph: RoofingContractor + Services + WebPage + WebSite
 *   2. generateServicePageSchema() — Service + BreadcrumbList + WebPage + FAQPage
 *
 * Business data lives in schema-business.ts. These functions are pure — no side effects.
 */

import { BUSINESS } from "./schema-business";

// ── Types ────────────────────────────────────────────────────────────────────

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

// ── Shared Helpers ───────────────────────────────────────────────────────────

function businessEntity() {
  return {
    "@type": "RoofingContractor" as const,
    "@id": `${BUSINESS.url}/#business`,
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
  };
}

// ── Homepage Schema ──────────────────────────────────────────────────────────

/**
 * Full @graph for the homepage — matches the live site's schema structure.
 * Includes: RoofingContractor, all Service entities, WebPage, WebSite.
 */
export function generateHomepageSchema() {
  const business = businessEntity();

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

  const webSite = {
    "@type": "WebSite" as const,
    "@id": `${BUSINESS.url}/#website`,
    "name": BUSINESS.name,
    "url": BUSINESS.url,
    "publisher": { "@id": `${BUSINESS.url}/#business` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [business, ...serviceEntities, webPage, webSite],
  };
}

// ── Service Page Schema ──────────────────────────────────────────────────────

/**
 * Generate schema blocks for a service page.
 * Returns an array of schema objects: Service, BreadcrumbList, WebPage, and optionally FAQPage.
 */
export function generateServicePageSchema(input: ServicePageSchemaInput) {
  const pageUrl = `${BUSINESS.url}${input.path}`;

  // Service
  const serviceSchema = {
    "@context": "https://schema.org" as const,
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

  // BreadcrumbList
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

  const breadcrumbSchema = {
    "@context": "https://schema.org" as const,
    "@type": "BreadcrumbList" as const,
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": breadcrumbItems,
  };

  // WebPage
  const webPageSchema = {
    "@context": "https://schema.org" as const,
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

  const schemas: Record<string, unknown>[] = [serviceSchema, breadcrumbSchema, webPageSchema];

  // FAQPage (if FAQs exist)
  if (input.faqs && input.faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org" as const,
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
    };
    schemas.push(faqSchema);
  }

  return schemas;
}
