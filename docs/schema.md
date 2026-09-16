# 41 Roofing & Restoration — JSON-LD Schema Reference

Extracted from the live site at `https://41roofing.com/` on 2026-09-15.

> **Note:** Only the homepage contains JSON-LD structured data. All subpages (`/roofing`, `/commercial`, `/exterior`, `/interior`, `/gutters`, `/tile-counter-tops`, `/faq`) have **no JSON-LD schema** — these need to be created for our recreation.

---

## Homepage Schema (`/`)

The homepage uses a single `@graph` containing 9 entities:

### 1. RoofingContractor (Primary Business Entity)

```json
{
  "@type": "RoofingContractor",
  "@id": "#business-41roofing",
  "name": "41 Roofing & Restoration",
  "image": "https://storage.googleapis.com/funnel-ai-production/image-generation/R7DwPt39QmcIooKJtyyM/mirrored-76hiIzPsGz.jpg",
  "logo": {
    "@type": "ImageObject",
    "url": "https://storage.googleapis.com/msgsndr/WKRKDgs68zc7PQlcT9wG/media/6852a0a5cce1913709715604.png"
  },
  "description": "Residential and commercial roofing, storm damage repairs, gutters, exterior work, and remodeling services for Crowley and North Texas property owners.",
  "telephone": "(817)266-9433",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "(817)266-9433",
      "areaServed": "US"
    },
    {
      "@type": "ContactPoint",
      "contactType": "Emergency",
      "telephone": "(817)266-9433",
      "areaServed": "US"
    }
  ],
  "email": "info@41roofing.com",
  "url": "https://41roofing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "208 E Main St Suite D",
    "addressLocality": "Crowley",
    "addressRegion": "TX",
    "postalCode": "76036",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Crowley, TX" },
    { "@type": "City", "name": "Burleson, TX" },
    { "@type": "City", "name": "Joshua, TX" },
    { "@type": "City", "name": "Alvarado, TX" },
    { "@type": "City", "name": "Mansfield, TX" },
    { "@type": "City", "name": "Godley, TX" },
    { "@type": "City", "name": "Fort Worth, TX" },
    { "@type": "City", "name": "Arlington, TX" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Brandi Burk"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5,
    "reviewCount": 147,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Lucia Flores" },
      "datePublished": "2026-05-20",
      "reviewBody": "Nos dieron un precio justo y razonable.Tienen personal bilingue... More",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5, "worstRating": 1 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Julia Byers" },
      "datePublished": "2026-05-05",
      "reviewBody": "Brandi and crew did a fantastic job... More",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5, "worstRating": 1 }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Miriam Rallas" },
      "datePublished": "2026-04-16",
      "reviewBody": "If you're looking for reliable service, they offer free estimates... More",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5, "worstRating": 1 }
    }
  ]
}
```

### 2. Service — Roofing

```json
{
  "@type": "Service",
  "@id": "#service-roofing",
  "name": "Roofing",
  "description": "Professional roof repair, replacement, and inspection services for residential and commercial properties. We provide honest assessments, quality materials, and dependable workmanship to protect your property.",
  "provider": { "@id": "#business-41roofing" },
  "areaServed": ["Crowley, TX", "Burleson, TX", "Joshua, TX", "Alvarado, TX", "Mansfield, TX", "Godley, TX", "Fort Worth, TX", "Arlington, TX"],
  "serviceType": "Roofing Contractor"
}
```

### 3. Service — Interior and Exterior Restoration

```json
{
  "@type": "Service",
  "@id": "#service-restoration",
  "name": "Interior and Exterior Restoration",
  "description": "Comprehensive restoration services for both interior and exterior property damage. From storm damage to general wear, we restore properties to their original condition with quality craftsmanship.",
  "provider": { "@id": "#business-41roofing" },
  "areaServed": ["Crowley, TX", "Burleson, TX", "Joshua, TX", "Alvarado, TX", "Mansfield, TX", "Godley, TX", "Fort Worth, TX", "Arlington, TX"],
  "serviceType": "Property Restoration"
}
```

### 4. Service — Tile and Countertops

```json
{
  "@type": "Service",
  "@id": "#service-tile",
  "name": "Tile and Countertops",
  "description": "Expert tile and countertop installation and repair for kitchens and bathrooms. We work with quality materials to create durable, beautiful surfaces that enhance your space.",
  "provider": { "@id": "#business-41roofing" },
  "areaServed": ["Crowley, TX", "Burleson, TX", "Joshua, TX", "Alvarado, TX", "Mansfield, TX", "Godley, TX", "Fort Worth, TX", "Arlington, TX"],
  "serviceType": "Home Improvement"
}
```

### 5. Service — Gutters

```json
{
  "@type": "Service",
  "@id": "#service-gutters",
  "name": "Gutters",
  "description": "Gutter installation, repair, and maintenance services to protect your property from water damage. We ensure proper drainage and long-lasting performance.",
  "provider": { "@id": "#business-41roofing" },
  "areaServed": ["Crowley, TX", "Burleson, TX", "Joshua, TX", "Alvarado, TX", "Mansfield, TX", "Godley, TX", "Fort Worth, TX", "Arlington, TX"],
  "serviceType": "Gutter Service"
}
```

### 6. Service — Asphalt Services

```json
{
  "@type": "Service",
  "@id": "#service-asphalt",
  "name": "Asphalt Services",
  "description": "Asphalt repair, sealing, and maintenance for driveways and parking areas. We extend the life of your asphalt surfaces with professional, dependable work.",
  "provider": { "@id": "#business-41roofing" },
  "areaServed": ["Crowley, TX", "Burleson, TX", "Joshua, TX", "Alvarado, TX", "Mansfield, TX", "Godley, TX", "Fort Worth, TX", "Arlington, TX"],
  "serviceType": "Asphalt Services"
}
```

### 7. Service — Concrete Services

```json
{
  "@type": "Service",
  "@id": "#service-concrete",
  "name": "Concrete Services",
  "description": "Concrete repair, installation, and maintenance for driveways, patios, and foundations. We deliver strong, durable concrete solutions built to last.",
  "provider": { "@id": "#business-41roofing" },
  "areaServed": ["Crowley, TX", "Burleson, TX", "Joshua, TX", "Alvarado, TX", "Mansfield, TX", "Godley, TX", "Fort Worth, TX", "Arlington, TX"],
  "serviceType": "Concrete Services"
}
```

### 8. WebPage

```json
{
  "@type": "WebPage",
  "@id": "#webpage-41roofing-home",
  "name": "Honest Roofing, Restoration & Remodeling in Crowley, TX",
  "description": "41 Roofing & Restoration is a trusted roofing and construction company serving Crowley, TX and the surrounding North Texas area. We help homeowners and business owners protect, repair, and restore their properties with honest inspections, dependable workmanship, and clear communication.",
  "isPartOf": { "@id": "#website-41roofing" },
  "mainEntity": { "@id": "#business-41roofing" }
}
```

### 9. WebSite

```json
{
  "@type": "WebSite",
  "@id": "#website-41roofing",
  "name": "41 Roofing & Restoration",
  "url": "https://41roofing.com",
  "publisher": { "@id": "#business-41roofing" }
}
```

---

## Service Pages (No Schema on Live Site)

The following pages exist on the live site but have **no JSON-LD schema**. Schema should be created for each in our recreation:

| Live URL | Our Route | Schema Type Needed |
|----------|-----------|-------------------|
| `/roofing` | `/services/roof-replacement`, `/services/roof-repair` | Service + WebPage + BreadcrumbList |
| `/commercial` | `/services/commercial-roofing` | Service + WebPage + BreadcrumbList |
| `/exterior` | `/services/exterior-repairs`, `/services/painting` | Service + WebPage + BreadcrumbList |
| `/interior` | `/services/restoration` | Service + WebPage + BreadcrumbList |
| `/gutters` | `/services/gutters` | Service + WebPage + BreadcrumbList |
| `/tile-counter-tops` | (not yet created) | Service + WebPage + BreadcrumbList |
| `/faq` | (not yet created) | FAQPage |

---

## Business Info Summary (for schema implementation)

| Field | Value |
|-------|-------|
| Business Name | 41 Roofing & Restoration |
| Phone | (817) 266-9433 |
| Email | info@41roofing.com |
| Address | 208 E Main St Suite D, Crowley, TX 76036 |
| Founder | Brandi Burk |
| Hours (M-F) | 8:00 AM – 5:00 PM |
| Hours (Sat) | 9:00 AM – 6:00 PM |
| Hours (Sun) | Closed |
| URL | https://41roofing.com |

## Service Areas

1. Crowley, TX
2. Burleson, TX
3. Joshua, TX
4. Alvarado, TX
5. Mansfield, TX
6. Godley, TX
7. Fort Worth, TX
8. Arlington, TX

## Services on Live Site (from schema)

1. Roofing (Roofing Contractor)
2. Interior and Exterior Restoration (Property Restoration)
3. Tile and Countertops (Home Improvement)
4. Gutters (Gutter Service)
5. Asphalt Services
6. Concrete Services

### Services on Our Recreation (current pages)

1. Roof Replacement
2. Roof Repair
3. Commercial Roofing
4. Emergency Tarping
5. Gutters
6. Exterior Repairs
7. Restoration
8. Painting

### Gap Analysis

**On live site but not in our recreation:**
- Tile and Countertops
- Asphalt Services
- Concrete Services

**In our recreation but not on live site schema:**
- Emergency Tarping (specific service, covered under Roofing)
- Painting (specific service, covered under Exterior)
- Roof Replacement / Roof Repair (split from single "Roofing" on live site)
