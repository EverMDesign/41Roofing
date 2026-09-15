# Competitor Analysis Report
## Market Intelligence for 41Roofing

---

> **You're already at #1. This report shows you why that position is yours to keep — and how a modern website will make it untouchable.**

---

## Who We Analyzed

**Legacy Roofing and Contracting** — `legacytxroofing.com`
One of the more established roofing websites in the Crowley/DFW area. 54 indexed pages, active blog, dedicated reviews page, and a broad geo-targeting strategy across the metroplex.

On paper, they look solid. Under the hood, there are serious cracks.

---

## Their Website Platform Is a Problem

Here's something most people would never notice: **Legacy Roofing's website is built on a car dealership platform.**

Their site was built using **DealerOn** — software originally designed to sell cars. We can confirm this because their technical files still contain references to:

- New and used **vehicle inventory feeds**
- A **test drive** scheduling page
- **Car rebates** and dealership forms
- An internal system ID tagged as `dealerId: 28369`

They didn't build a roofing website. They built a car dealership website and put roofing content on top of it.

This matters because:

- The site relies on JavaScript to load content, which makes it harder for Google to read
- It runs on Bootstrap 3.4.7 — a framework from **2013** — which is slow and outdated by today's standards
- The platform even tells Google's search crawler to **wait 10 seconds between every page visit**, artificially slowing down how fast their site gets indexed
- They have very limited control over their own site — they're locked into a vendor's template

Your new website will be built on **Next.js** — a modern, performance-first framework used by some of the largest companies in the world. Every page will be fast, fully readable by Google from the first visit, and completely in your control.

---

## Their Site Structure (54 Pages)

To their credit, they've built out a fairly broad set of pages:

```
Homepage
|
|-- Core Pages
|   |-- About Us
|   |-- Contact
|   |-- Service Areas
|   |-- Our Work (portfolio)
|   |-- Reviews
|   |-- Specials / Offer
|
|-- Service Pages (Crowley-focused)
|   |-- Roof Installation
|   |-- Roof Repairs
|   |-- Roof Replacement
|   |-- Specialty Roofing
|   |-- Commercial Roofing
|   |-- Class 4 Roofing
|   |-- Metal Roof Installation
|   |-- Stone Coated Steel Roofing
|   |-- Gutter Installation
|   |-- Pergolas
|   |-- Sun Rooms
|
|-- Geo-Targeted Pages (by city/county)
|   |-- Burleson (3 pages)
|   |-- Keller (1 page)
|   |-- Mansfield (1 page)
|   |-- Joshua (2 pages)
|   |-- Dallas-Fort Worth (2 pages)
|   |-- Dallas County (2 pages)
|   |-- Parker, Johnson, Denton, Tarrant Counties
|
|-- Blog
    |-- 13 Articles
```

This tells us their strategy: target Crowley as home base, then expand outward with city and county pages across DFW.

---

## What Their SEO Looks Like

### Title Tags
They follow a consistent format on page titles, which is good practice:

| Page | Their Title |
|------|-------------|
| Homepage | `Trusted Roofing Company in Crowley, TX \| Legacy Roofing and Contracting` |
| Roof Replacement | `Crowley, TX Roof Replacement \| Legacy Roofing and Contracting` |
| About | `About Legacy Roofing and Contracting \| Trusted Roofers in Crowley, TX` |

City + keyword in the title is the right move and they're doing it consistently.

### Where They Fall Short on SEO
- **No meta descriptions found** — these are the short summaries that show up in Google search results under the page title. Missing them means Google writes its own, which is rarely ideal.
- **Duplicate pages** — they have two separate URLs for the same "Roof Installation Crowley" page (`/roof-installation--crowley-tx` with a double dash, and `/roof-installation-crowley-tx-6113` with a number). Google sees these as competing against each other.
- **JS-rendered content** — because their platform loads content via JavaScript, Google has to do extra work to read their pages. Static pages (like yours will have) are read instantly.

---

## Their Schema Markup: Nothing There

Schema markup is structured data you add to a website that tells Google exactly what your business is, what services you offer, where you're located, and what your customers think of you. It's one of the strongest trust signals you can send to a search engine.

**Legacy Roofing has zero schema markup.**

The only structured data their site contains is this:

```json
{
  "dealerId": "28369",
  "pageType": "custom",
  "items": []
}
```

That's a platform identifier — it's not communicating anything useful to Google about their business.

They are missing:

- **Local Business schema** — tells Google who you are, where you are, your hours, your phone number
- **Roofing Contractor schema** — signals your specific trade and service category
- **Review schema** — surfaces star ratings directly in search results
- **Service schema** — describes individual services with pricing context
- **FAQ schema** — can produce expanded results in Google with questions and answers visible before anyone clicks
- **Breadcrumb schema** — helps Google understand your site's page hierarchy

Your site will have all of these implemented correctly from day one.

---

## Head-to-Head: 41Roofing vs. Legacy

| Factor | Legacy Roofing | 41Roofing |
|--------|---------------|-----------|
| Platform | Car dealership CMS (2013) | Next.js (modern, fast) |
| Content rendering | JavaScript (harder for Google) | Static HTML (instant for Google) |
| Schema markup | None | Full suite (LocalBusiness, Service, Review, FAQ) |
| Page speed | Slow (outdated framework) | Optimized Core Web Vitals |
| Meta descriptions | Missing | Every page, custom written |
| Crawl speed | Throttled (10s delay) | Unrestricted |
| URL structure | Inconsistent, has duplicates | Clean and canonical |
| Control over site | Locked into vendor | Fully owned |

---

## The Bottom Line

Legacy Roofing has been around long enough to build some SEO momentum — but they're running a race with old equipment. Their platform is slow, their schema is nonexistent, and their content is harder for Google to read than it should be.

You're sitting at #1 right now with none of that working in your favor yet.

**When your new site launches, you'll have every technical advantage they're missing.** Faster pages, richer search results with star ratings and service details, fully readable content, and a clean architecture built for long-term growth.

The foundation they lack is the foundation we're building you from the ground up.

---

*Report prepared by Ever Marketing and Design*
*Analysis date: September 2026*
