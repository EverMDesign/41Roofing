/**
 * 41 Roofing & Restoration — Business data for Schema.org JSON-LD.
 * Source: Extracted from live site schema on 2026-09-15.
 * Updated: 2026-09-24 — aligned services with actual site pages.
 */

export const BUSINESS = {
  name: "41 Roofing & Restoration",
  url: "https://41roofing.com",
  phone: "(817) 266-9433",
  email: "info@41roofing.com",
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
  services: [
    {
      id: "roof-repair",
      name: "Roof Repair",
      description:
        "Expert roof repairs for leaks, storm damage, missing shingles, and flashing issues. We diagnose the problem and fix it right — no unnecessary upselling.",
      serviceType: "Roofing Contractor",
    },
    {
      id: "roof-replacement",
      name: "Roof Replacement",
      description:
        "Complete roof replacement with premium architectural and impact-resistant shingle systems. Full tear-off, new underlayment, and dependable installation.",
      serviceType: "Roofing Contractor",
    },
    {
      id: "commercial-roofing",
      name: "Commercial Roofing",
      description:
        "Commercial roofing services for flat roofs, metal roofs, and multi-unit properties. Inspections, repairs, and full replacements for business owners across North Texas.",
      serviceType: "Roofing Contractor",
    },
    {
      id: "emergency-tarping",
      name: "Emergency Tarping",
      description:
        "Same-day emergency tarping to protect your property from further damage after storms, fallen trees, or sudden roof failures. Fast response when you need it most.",
      serviceType: "Roofing Contractor",
    },
    {
      id: "restoration",
      name: "Interior and Exterior Restoration",
      description:
        "Comprehensive restoration services for both interior and exterior property damage. From storm damage to general wear, we restore properties to their original condition with quality craftsmanship.",
      serviceType: "Property Restoration",
    },
    {
      id: "gutters",
      name: "Gutters",
      description:
        "Gutter installation, repair, and maintenance services to protect your property from water damage. We ensure proper drainage and long-lasting performance.",
      serviceType: "Gutter Service",
    },
    {
      id: "painting",
      name: "Interior and Exterior Painting",
      description:
        "Professional painting services for residential and commercial properties. Interior and exterior painting with quality materials and clean, detailed workmanship.",
      serviceType: "Painting Service",
    },
    {
      id: "exterior-repairs",
      name: "Exterior Repairs",
      description:
        "Siding, fascia, soffit, fence, and general exterior repairs. We restore and protect the exterior of your property with dependable craftsmanship.",
      serviceType: "Home Improvement",
    },
  ],
} as const;
