/**
 * 41 Roofing & Restoration — Business data for Schema.org JSON-LD.
 * Source: Extracted from live site schema on 2026-09-15.
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
      id: "roofing",
      name: "Roofing",
      description:
        "Professional roof repair, replacement, and inspection services for residential and commercial properties. We provide honest assessments, quality materials, and dependable workmanship to protect your property.",
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
      id: "tile",
      name: "Tile and Countertops",
      description:
        "Expert tile and countertop installation and repair for kitchens and bathrooms. We work with quality materials to create durable, beautiful surfaces that enhance your space.",
      serviceType: "Home Improvement",
    },
    {
      id: "asphalt",
      name: "Asphalt Services",
      description:
        "Asphalt repair, sealing, and maintenance for driveways and parking areas. We extend the life of your asphalt surfaces with professional, dependable work.",
      serviceType: "Asphalt Services",
    },
    {
      id: "concrete",
      name: "Concrete Services",
      description:
        "Concrete repair, installation, and maintenance for driveways, patios, and foundations. We deliver strong, durable concrete solutions built to last.",
      serviceType: "Concrete Services",
    },
  ],
} as const;
