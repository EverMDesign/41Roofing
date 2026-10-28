import type { ServiceAreaData } from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

const crowleyReviews: Review[] = [
  {
    quote:
      "Being local makes all the difference. Brandi came out the same day I called and gave us an honest assessment. No pressure, no upselling. They repaired our roof quickly and it looks fantastic.",
    name: "David K.",
    location: "Crowley, TX",
    service: "Repair",
    source: "Google",
  },
  {
    quote:
      "We've used 41 Roofing twice now — once for storm damage and once for a full replacement on our rental property. Consistent quality and fair pricing every time. True hometown professionals.",
    name: "Michelle T.",
    location: "Crowley, TX",
    service: "Replacement",
    source: "Google",
  },
  {
    quote:
      "After the last hailstorm I had three companies knock on my door. I chose the local one — 41 Roofing. Best decision I made. They handled the insurance process and my new roof is beautiful.",
    name: "Robert L.",
    location: "Crowley, TX",
    service: "Storm Damage",
    source: "Facebook",
  },
];

const crowleyProjects: Project[] = [
  {
    city: "Crowley, TX",
    title: "Full System Replacement",
    material: "Owens Corning Duration Shingles",
    problem:
      "20-year-old roof with widespread granule loss and multiple active leaks during heavy rain.",
    solution:
      "Complete tear-off with new underlayment, drip edge, and premium architectural shingles.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Full roof replacement with Owens Corning shingles on home in Crowley TX 76036",
  },
  {
    city: "Crowley, TX",
    title: "Emergency Tarp & Restore",
    material: "Impact-Resistant Shingles",
    problem:
      "Severe wind damage exposed decking and caused interior water damage during an overnight storm.",
    solution:
      "Same-day emergency tarping followed by full restoration with upgraded impact-resistant materials.",
    img: "https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Emergency roof tarping and storm restoration on residential home in Crowley TX",
  },
  {
    city: "Crowley, TX",
    title: "Chimney Flashing Repair",
    material: "Step & Counter Flashing",
    problem:
      "Recurring leak around the chimney caused by deteriorated flashing and failed sealant.",
    solution:
      "Removed old flashing, installed new step and counter flashing with proper integration into the roofing system.",
    img: "https://images.unsplash.com/photo-1620286820556-9b578c772be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Chimney flashing repair on residential roof in Crowley TX 76036",
  },
];

const burlesonReviews: Review[] = [
  {
    quote:
      "41 Roofing did an outstanding job on our Burleson home after the spring storms. They were transparent about what needed fixing and handled everything professionally. Highly recommend this local team.",
    name: "Sarah W.",
    location: "Burleson, TX",
    service: "Replacement",
    source: "Google",
  },
  {
    quote:
      "I thought I needed a whole new roof, but Brandi inspected it and told me it was just a few repairs needed around the chimney. Saved me so much money. Honesty is rare these days.",
    name: "Jason M.",
    location: "Burleson, TX",
    service: "Repair",
    source: "Yelp",
  },
  {
    quote:
      "The crew showed up on time, worked hard, and cleaned up perfectly. My new roof looks amazing. It's great to have a dependable roofing contractor right here in our area.",
    name: "Amanda R.",
    location: "Burleson, TX",
    service: "Inspection",
    source: "Google",
  },
];

const burlesonProjects: Project[] = [
  {
    city: "Burleson, TX",
    title: "Architectural Shingle Install",
    material: "High-Definition Architectural Shingles",
    problem:
      "Severe age-related granule loss across the entire roofing system.",
    solution:
      "Complete tear-off and installation of high-definition architectural shingles.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural shingle roof replacement on home in Burleson TX 76028",
  },
  {
    city: "Burleson, TX",
    title: "Post-Storm Restoration",
    material: "Impact-Resistant Shingles",
    problem:
      "Extensive hail damage from a spring storm with compromised underlayment.",
    solution:
      "Emergency response, insurance documentation, and full impact-resistant roof replacement.",
    img: "https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Storm damage roof restoration with impact-resistant shingles in Burleson TX",
  },
  {
    city: "Burleson, TX",
    title: "Valley & Flashing Repair",
    material: "Step & Counter Flashing",
    problem:
      "Persistent leak from improperly installed chimney flashing and compromised valley underlayment.",
    solution:
      "Targeted flashing replacement and valley repair to eliminate the leak source.",
    img: "https://images.unsplash.com/photo-1620286820556-9b578c772be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Valley and chimney flashing repair on residential roof in Burleson TX",
  },
];

const arlingtonReviews: Review[] = [
  {
    quote:
      "We had major hail damage and called several companies. 41 Roofing was the only one that gave us an honest assessment instead of trying to sell us things we didn't need. Outstanding work and communication.",
    name: "Carlos G.",
    location: "Arlington, TX",
    service: "Storm Damage",
    source: "Google",
  },
  {
    quote:
      "Professional from start to finish. They replaced our entire roof in a day and a half, cleaned up everything, and even found nails in the yard with a magnet roller. Impressive attention to detail.",
    name: "Linda P.",
    location: "Arlington, TX",
    service: "Replacement",
    source: "Google",
  },
  {
    quote:
      "Our commercial building needed emergency repairs after a storm. 41 Roofing responded quickly, got the tarp up the same day, and completed the full repair within the week. Reliable and fair.",
    name: "Mark S.",
    location: "Arlington, TX",
    service: "Commercial",
    source: "Yelp",
  },
];

const arlingtonProjects: Project[] = [
  {
    city: "Arlington, TX",
    title: "Hail Damage Replacement",
    material: "CertainTeed Landmark Shingles",
    problem:
      "Widespread hail damage across a 3,200 sq ft roof with multiple active leaks.",
    solution:
      "Full tear-off, new synthetic underlayment, and premium architectural shingle installation.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Hail damage roof replacement on residential home in Arlington TX 76010",
  },
  {
    city: "Arlington, TX",
    title: "Commercial Flat Roof Repair",
    material: "TPO Membrane System",
    problem:
      "Ponding water and seam failures on a commercial flat roof causing interior water damage.",
    solution:
      "Seam re-welding, drain improvements, and targeted membrane patching to restore watertight integrity.",
    img: "https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Commercial flat roof TPO repair near I-20 corridor in Arlington TX",
  },
  {
    city: "Arlington, TX",
    title: "Wind Damage Restoration",
    material: "Architectural Shingles",
    problem:
      "High winds lifted shingles along the ridge and exposed underlayment to rain.",
    solution:
      "Ridge cap replacement, re-nailing of lifted shingles, and full ridge vent restoration.",
    img: "https://images.unsplash.com/photo-1620286820556-9b578c772be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Wind damage roof restoration with architectural shingles in Arlington TX",
  },
];

const joshuaReviews: Review[] = [
  {
    quote:
      "Living out in Joshua, it's hard to find contractors who actually show up when they say they will. 41 Roofing was on time, did exactly what they said, and the price was fair. Refreshing experience.",
    name: "Tommy R.",
    location: "Joshua, TX",
    service: "Repair",
    source: "Google",
  },
  {
    quote:
      "Our roof took a beating from hail and we needed a full replacement. Brandi and the crew made the entire process painless — from inspection to insurance to installation. Couldn't be happier.",
    name: "Stacy H.",
    location: "Joshua, TX",
    service: "Replacement",
    source: "Google",
  },
  {
    quote:
      "They came out after a bad storm and were completely honest that we only needed minor repairs, not the full replacement another company quoted us. That kind of integrity is why I'll always call them first.",
    name: "Brian W.",
    location: "Joshua, TX",
    service: "Inspection",
    source: "Facebook",
  },
];

const joshuaProjects: Project[] = [
  {
    city: "Joshua, TX",
    title: "Storm Damage Replacement",
    material: "Impact-Resistant Shingles",
    problem:
      "Extensive hail damage with cracked shingle mats and exposed underlayment across the entire roof.",
    solution:
      "Full tear-off with upgraded ice and water shield in valleys and impact-resistant shingle installation.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Storm damage roof replacement with impact-resistant shingles in Joshua TX 76058",
  },
  {
    city: "Joshua, TX",
    title: "Aging Roof Replacement",
    material: "Architectural Shingles",
    problem:
      "25-year-old three-tab roof with severe granule loss, curling shingles, and a sagging ridge line.",
    solution:
      "Complete replacement with decking repair, new ridge vent, and premium architectural shingles.",
    img: "https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Aging roof replacement with architectural shingles on home in Joshua TX",
  },
  {
    city: "Joshua, TX",
    title: "Leak Repair & Flashing",
    material: "Step Flashing & Sealant",
    problem:
      "Persistent leak around a skylight caused by failed sealant and improperly lapped flashing.",
    solution:
      "Removed skylight trim, installed new step flashing with proper integration, and re-sealed all penetrations.",
    img: "https://images.unsplash.com/photo-1620286820556-9b578c772be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Skylight leak and flashing repair on residential roof in Joshua TX",
  },
];

const cleburneReviews: Review[] = [
  {
    quote:
      "We had storm damage and needed a fast response. 41 Roofing drove out to Cleburne the next morning, documented everything, and had our roof replaced within the week. Incredible turnaround.",
    name: "Jennifer A.",
    location: "Cleburne, TX",
    service: "Storm Damage",
    source: "Google",
  },
  {
    quote:
      "Honest and dependable. They inspected our older home near the square and told us exactly what needed attention — and what didn't. Fair price, great work, and a team I can trust.",
    name: "Gary N.",
    location: "Cleburne, TX",
    service: "Repair",
    source: "Google",
  },
  {
    quote:
      "Brandi personally walked us through the entire process after our roof was damaged by hail. She explained every option and never made us feel pressured. This is how contracting should be done.",
    name: "Patricia C.",
    location: "Cleburne, TX",
    service: "Replacement",
    source: "Facebook",
  },
];

const cleburneProjects: Project[] = [
  {
    city: "Cleburne, TX",
    title: "Historic Home Re-Roof",
    material: "Dimensional Architectural Shingles",
    problem:
      "Aging three-tab shingles on a 1940s home with multiple leak points and deteriorated flashing.",
    solution:
      "Careful tear-off preserving original trim, full decking inspection, and installation of dimensional architectural shingles.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Historic home roof replacement with dimensional shingles near Cleburne TX courthouse square",
  },
  {
    city: "Cleburne, TX",
    title: "Post-Hail Restoration",
    material: "Impact-Resistant Shingles",
    problem:
      "Severe hail damage with cracked shingle mats, dented vents, and compromised ridge cap.",
    solution:
      "Insurance-documented restoration with full replacement using impact-resistant materials for future protection.",
    img: "https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Hail damage roof restoration with impact-resistant shingles in Cleburne TX 76033",
  },
  {
    city: "Cleburne, TX",
    title: "Gutter & Fascia Repair",
    material: "Seamless Aluminum Gutters",
    problem:
      "Sagging gutters pulling away from rotted fascia boards, causing water to pool near the foundation.",
    solution:
      "Replaced damaged fascia, installed new seamless gutters with proper slope, and added downspout extensions.",
    img: "https://images.unsplash.com/photo-1620286820556-9b578c772be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Seamless gutter and fascia repair on residential home in Cleburne TX",
  },
];

const kellerReviews: Review[] = [
  {
    quote:
      "We had three estimates for our Keller home and 41 Roofing was the most thorough and honest by far. They didn't try to sell us anything extra — just explained what the roof needed and delivered exactly that.",
    name: "Kevin D.",
    location: "Keller, TX",
    service: "Replacement",
    source: "Google",
  },
  {
    quote:
      "After the spring hailstorm, 41 Roofing inspected our roof and found damage we didn't even know about. They documented everything for our insurance claim and the new roof looks incredible. Highly recommend.",
    name: "Susan M.",
    location: "Keller, TX",
    service: "Storm Damage",
    source: "Google",
  },
  {
    quote:
      "We needed a quick turnaround on a roof repair before selling our home. 41 Roofing got it done fast, on budget, and the buyer's inspector had zero issues. Professional and reliable.",
    name: "Nathan J.",
    location: "Keller, TX",
    service: "Repair",
    source: "Yelp",
  },
];

const kellerProjects: Project[] = [
  {
    city: "Keller, TX",
    title: "Premium Shingle Upgrade",
    material: "GAF Timberline HDZ Shingles",
    problem:
      "Builder-grade three-tab shingles deteriorating after 18 years with widespread granule loss.",
    solution:
      "Full replacement with premium GAF Timberline HDZ architectural shingles and upgraded ridge ventilation.",
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Premium GAF Timberline HDZ roof replacement on home in Keller TX 76248",
  },
  {
    city: "Keller, TX",
    title: "Insurance Restoration",
    material: "Impact-Resistant Shingles",
    problem:
      "Hail damage documented across the entire roof system including vents, flashing, and gutters.",
    solution:
      "Complete insurance-backed restoration with impact-resistant shingles qualifying for insurance premium discount.",
    img: "https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Insurance-backed hail damage roof restoration with Class 4 shingles in Keller TX",
  },
  {
    city: "Keller, TX",
    title: "Skylight & Valley Repair",
    material: "Custom Flashing & Sealant",
    problem:
      "Water intrusion around two skylights and a complex valley intersection causing attic moisture.",
    solution:
      "Skylight re-flashing, valley underlayment replacement, and proper ice and water shield installation.",
    img: "https://images.unsplash.com/photo-1620286820556-9b578c772be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Skylight and valley leak repair on complex roofline in Keller TX 76244",
  },
];

export const serviceAreas: ServiceAreaData[] = [
  {
    city: "Crowley",
    state: "TX",
    stateFull: "Texas",
    slug: "crowley",
    metaTitle: "Roofing in Crowley, TX | 41 Roofing & Restoration",
    metaDescription:
      "Crowley's hometown roofing contractor. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping. Based in Crowley — honest assessments from your neighbors.",
    ogImageAlt: "41 Roofing and Restoration — roofing in Crowley TX",
    heroImage: "/crowley-landmark.webp",
    heroImageAlt: "Downtown Crowley, TX near 41 Roofing headquarters on E Main St",
    eyebrow: "Our Home Base",
    heroTitle: "Roofing & Restoration\nIn Crowley, TX",
    heroSubtitle: "Our home base since day one — your neighbors on E Main St.",
    aboutEyebrow: "About Crowley",
    aboutHeading: "Built here. Based here. Not going anywhere.",
    aboutImage: "/crowley-homes.webp",
    aboutImageAlt: "Residential roofing neighborhoods near Bicentennial Park in Crowley TX 76036",
    aboutParagraphs: [
      "Crowley is more than our service area — it's our home. Named after S.H. Crowley, the Gulf, Colorado and Santa Fe Railway's master of transportation when the railroad built its station here in 1885, this community has grown from a dairy farming settlement into a thriving suburb of over 21,000 residents. 41 Roofing & Restoration is headquartered right here on E Main St, and we take immense pride in protecting the properties of the community we live in every day.",
      "Crowley sits in one of the most hail-active corridors in the country — 302 storm reports in a recent 12-month period with hail up to 4.5 inches and winds reaching 89 mph. The 1995 Fort Worth hailstorm caused over $1 billion in Tarrant County damage, and the pattern hasn't slowed down. From the established homes in Deer Creek Estates and Mayfair Estates to the growing Chisholm Trail Ranch community, we know these neighborhoods and what our weather does to them.",
    ],
    servicesHeading: "How we serve Crowley homeowners",
    servicesParagraph:
      "Whether your home is in one of Crowley's 22+ HOA communities along the Chisholm Trail Parkway corridor, or in the established neighborhoods near Bicentennial Park and Eagle Stadium, we deliver the same honest work and dependable results. We don't chase storms or disappear — when you call 41 Roofing, you're calling your neighbors.",
    serviceCards: [
      {
        title: "Honest Inspections",
        description:
          "We walk every roof ourselves and document what we find. If a repair is all you need, that's what we recommend — never a replacement you don't need.",
      },
      {
        title: "Storm Restoration",
        description:
          "When severe weather hits Crowley, we're already here. We respond fast, secure your property, and handle the restoration from start to finish.",
      },
      {
        title: "Expert Replacements",
        description:
          "Premium architectural and impact-resistant shingle systems designed to handle the extreme Texas heat and hail cycles for decades.",
      },
      {
        title: "Targeted Repairs",
        description:
          "Leak tracing, shingle replacement, flashing restoration, and vent repairs to extend the life of your current roof without a full replacement.",
      },
    ],
    neighborhoodsHeading: "Protecting Our Own Backyard",
    neighborhoodsParagraphs: [
      "Whether your home is near Bicentennial Park where the Celebration of Freedom draws the whole community, along the historic Main Street corridor where buildings date back to the early 1900s, or in the 1,100-home Chisholm Trail Ranch community — we've likely already worked on a roof on your street. Homes from the 1980s and '90s in Mayfair Estates and Deer Creek are the prime replacement sweet spot, and newer builds in Karis and Summer Trails still need storm damage inspections after every hail season.",
      "The Chisholm Trail Parkway's 13-mile widening project means Crowley is only going to keep growing. We're proud members of this community — from the Christmas in Crowley parade to Fire Ant Fest — and we stand behind every project with the kind of accountability that only comes from living where you work.",
    ],
    projectsEyebrow: "Our Portfolio",
    projectsHeading: "Recent Projects in Crowley.",
    projects: crowleyProjects,
    reviewsEyebrow: "Hometown Trust",
    reviewsHeading: "What Crowley Homeowners Say.",
    reviews: crowleyReviews,
    faqEyebrow: "Crowley Roofing Questions",
    faqHeading: "Answers for your local property.",
    faqs: [
      {
        q: "Where is 41 Roofing located?",
        a: "We're headquartered at 208 E Main St, Suite D, in Crowley, TX. We're a locally owned and operated business — not a storm chaser or franchise. When you call us, you're calling your neighbors.",
      },
      {
        q: "Do I need a permit for a roof replacement in Crowley?",
        a: "Yes, the City of Crowley requires a building permit for roof replacements. We handle all permitting as part of our standard process so you don't have to worry about compliance or inspections.",
      },
      {
        q: "How fast can you respond after a storm in Crowley?",
        a: "Because we're based right here in Crowley, we can typically be on-site within hours — not days. For active leaks or exposed decking, we offer same-day emergency tarping to prevent further damage.",
      },
      {
        q: "Do you offer free roof inspections in Crowley?",
        a: "Absolutely. We provide free, thorough, and honest inspections for every homeowner in Crowley. We document everything with photos so you can make an informed decision — no pressure, no obligation.",
      },
    ],
  },
  {
    city: "Burleson",
    state: "TX",
    stateFull: "Texas",
    slug: "burleson",
    metaTitle: "Roofing in Burleson, TX | 41 Roofing & Restoration",
    metaDescription:
      "Local roofing contractor serving Burleson, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping. Honest assessments from a team that lives and works in your community.",
    ogImageAlt: "41 Roofing and Restoration — roofing in Burleson TX",
    heroImage: "/burleson-landmark.webp",
    heroImageAlt: "Old Town Burleson TX streetscape near historic downtown and railroad depot",
    eyebrow: "Local Roofing Experts",
    heroTitle: "Roofing & Restoration\nIn Burleson, TX",
    heroSubtitle: "From the 1895 Opera House to Tallgrass — protecting one of DFW's fastest-growing communities.",
    aboutEyebrow: "About Burleson",
    aboutHeading: "Deep roots in a growing community.",
    aboutImage: "/burleson-homes.webp",
    aboutImageAlt: "Residential homes and roofing neighborhoods near Old Town Burleson TX 76028",
    aboutParagraphs: [
      "Named after Dr. Rufus C. Burleson when the MKT Railroad built its depot here in 1881, Burleson has grown 151% since 2000 — from a quiet Johnson County town into one of the fastest-growing suburbs in DFW with over 55,000 residents. From the restored storefronts of Old Town and the 1895 Opera House to the 621-acre Tallgrass master-planned community, Burleson homeowners take serious pride in their properties.",
      "But Burleson sits right in the I-35 hail corridor. Radar has detected hail here over 130 times, with 43 documented events in 2025 alone — including softball-sized stones. Winter Storm Uri in 2021 caused widespread roof failures across the city. Homes built in the 1990–2005 window make up the largest share of Burleson's housing stock, and they're all entering replacement age at the same time. 41 Roofing & Restoration knows these homes because we live and work in this community.",
    ],
    servicesHeading: "How we serve Burleson homeowners",
    servicesParagraph:
      "Whether your home is in Mistletoe Hill, Oak Valley Estates, Hidden Creek, or one of Burleson's 50+ HOA communities, we tailor every project to your property's specific needs — from navigating Tallgrass architectural review to pulling permits under the city's 2021 building codes.",
    serviceCards: [
      {
        title: "Honest Inspections",
        description:
          "We provide thorough, truthful assessments. If you only need a repair, we'll tell you. We document everything so you can make informed decisions.",
      },
      {
        title: "Storm Restoration",
        description:
          "When hail and wind strike Burleson, we respond quickly to secure your property and guide you through the complete restoration process.",
      },
      {
        title: "Expert Replacements",
        description:
          "Using premium architectural shingles and impact-resistant materials designed to withstand Texas weather for decades.",
      },
      {
        title: "Targeted Repairs",
        description:
          "Fixing leaks, replacing missing shingles, and restoring flashing to extend the lifespan of your current roofing system.",
      },
    ],
    neighborhoodsHeading: "Protecting Local Landmarks & Neighborhoods",
    neighborhoodsParagraphs: [
      "From the 1970s homes near Old Town and Bailey Lake Park to the newer builds in Summer Creek Ranch, Country Meadows, and the sprawling Tallgrass community along the Chisholm Trail Parkway, we've helped homeowners across every corner of Burleson and zip codes 76028 and 76058. We know which neighborhoods have strict HOA material approvals, which ones sit in Tarrant County vs. Johnson County, and what that means for your permits.",
      "Burleson's rapid growth means thousands of homes are hitting the 20–35 year mark simultaneously — the sweet spot for roof replacement. Whether you're near Chisenhall Fields watching your kid play ball or grabbing coffee on Wilshire Boulevard, you shouldn't have to worry about the roof over your head. That's our job.",
    ],
    projectsEyebrow: "Our Portfolio",
    projectsHeading: "Recent Projects in Burleson.",
    projects: burlesonProjects,
    reviewsEyebrow: "Community Trust",
    reviewsHeading: "What Burleson Homeowners Say.",
    reviews: burlesonReviews,
    faqEyebrow: "Burleson Roofing Questions",
    faqHeading: "Answers for your local property.",
    faqs: [
      {
        q: "Do I need a permit for a roof replacement in Burleson?",
        a: "Yes, the City of Burleson requires a permit for a full roof replacement. As a local contractor, 41 Roofing handles all the necessary permitting and ensures all work complies with current municipal building codes, taking that stress off your plate.",
      },
      {
        q: "How quickly can you inspect my roof after a Burleson storm?",
        a: "Because we operate locally, we can typically be on-site within 24-48 hours after a major weather event. In cases of severe leaks or structural exposure, we offer emergency tarping services to protect your home immediately.",
      },
      {
        q: "What are common signs of hail damage in this area?",
        a: "Look for missing granules (often washing out of your downspouts), bruised or indented shingles, cracked shingle mats, and small dents on metal roof vents, flashing, or AC units. Damage isn't always obvious from the ground level.",
      },
      {
        q: "Do you provide free roof inspections in Burleson?",
        a: "Absolutely. We believe in diagnosing the problem before selling a solution. We offer free, honest, and comprehensive roof inspections for homeowners and commercial property owners throughout the Burleson area.",
      },
    ],
  },
  {
    city: "Arlington",
    state: "TX",
    stateFull: "Texas",
    slug: "arlington",
    metaTitle: "Roofing in Arlington, TX | 41 Roofing & Restoration",
    metaDescription:
      "Trusted roofing contractor serving Arlington, TX. Free inspections, roof repair, replacement, storm damage restoration, and commercial roofing for one of the largest cities in North Texas.",
    ogImageAlt: "41 Roofing and Restoration — roofing in Arlington TX",
    heroImage: "/arlington-landmark.webp",
    heroImageAlt: "Downtown Arlington TX skyline near AT&T Stadium and Globe Life Field",
    eyebrow: "Local Roofing Experts",
    heroTitle: "Roofing & Restoration\nIn Arlington, TX",
    heroSubtitle: "The Midpoint City of DFW — dependable roofing from AT&T Stadium to Lake Arlington.",
    aboutEyebrow: "About Arlington",
    aboutHeading: "Big-city needs. Hometown service.",
    aboutImage: "/arlington-homes.webp",
    aboutImageAlt: "Residential roofing neighborhoods in Arlington TX near AT&T Stadium and Globe Life Field",
    aboutParagraphs: [
      "Since the Texas and Pacific Railway put Arlington on the map in 1876, this city has grown from a frontier trading post into the 7th largest city in Texas — home to over 400,000 residents, AT&T Stadium, Globe Life Field, Six Flags, and the University of Texas at Arlington. From the master-planned estates in Viridian to the ranch-style homes of Pantego, Arlington's roofing needs span six decades of construction.",
      "Arlington sits squarely in Hail Alley. The March 2016 storm alone caused over $600 million in Tarrant County damage, and the June 2023 outbreak topped $7 billion across DFW. Extreme UV and summer heat cut a standard 30-year shingle's life down to 15–20 years in this climate. 41 Roofing & Restoration understands these conditions because we work in them every day — protecting Arlington homes from River Legacy to the I-20 corridor.",
    ],
    servicesHeading: "How we serve Arlington homeowners",
    servicesParagraph:
      "Whether you own a family home near Randol Mill Park, a commercial property along the I-20 corridor, or a multi-unit building in the Entertainment District near Texas Live!, we provide tailored roofing solutions built for Arlington's unique demands — from strict Viridian HOA standards to Pantego's independent permitting.",
    serviceCards: [
      {
        title: "Honest Inspections",
        description:
          "We document every finding with photos and provide a clear, pressure-free assessment. If a repair will solve the problem, that's what we recommend.",
      },
      {
        title: "Storm Restoration",
        description:
          "Arlington's size means storms can hit one neighborhood and skip another. We respond quickly to assess your specific damage and guide you through the process.",
      },
      {
        title: "Expert Replacements",
        description:
          "Full tear-off and installation using premium materials rated for the Texas climate. We handle permitting and ensure code compliance across Arlington's jurisdiction.",
      },
      {
        title: "Commercial Roofing",
        description:
          "Low-slope, flat roof, and TPO membrane solutions for Arlington businesses. Minimizing downtime and protecting your investment is our priority.",
      },
    ],
    neighborhoodsHeading: "Serving Neighborhoods Across Arlington",
    neighborhoodsParagraphs: [
      "From the lakefront homes around Lake Arlington and the established streets of Webb-Hester to the 2,000-acre Viridian community and the dense subdivisions of south Arlington in 76002 and 76018, we've completed projects across all 19 zip codes. Homes built in the 1985–2005 window make up the largest share of Arlington's housing stock — and they're all entering the replacement cycle at the same time.",
      "Whether your neighborhood has strict HOA architectural review like Viridian, independent municipal permitting like Pantego and Dalworthington Gardens, or no HOA at all — we know the requirements and pull the right permits. Arlington homeowners deserve a roofing contractor who understands the difference.",
    ],
    projectsEyebrow: "Our Portfolio",
    projectsHeading: "Recent Projects in Arlington.",
    projects: arlingtonProjects,
    reviewsEyebrow: "Community Trust",
    reviewsHeading: "What Arlington Homeowners Say.",
    reviews: arlingtonReviews,
    faqEyebrow: "Arlington Roofing Questions",
    faqHeading: "Answers for your local property.",
    faqs: [
      {
        q: "Do you service all of Arlington?",
        a: "Yes. We serve all of Arlington — north, south, east, and west. From neighborhoods near Lake Arlington to commercial properties along I-20 and Division Street, we cover the entire city.",
      },
      {
        q: "Do I need a permit for a roof replacement in Arlington?",
        a: "Yes, the City of Arlington requires a permit for roof replacements. We handle all permitting and schedule the required inspections as part of our standard process.",
      },
      {
        q: "Do you handle commercial roofing in Arlington?",
        a: "Absolutely. We service both residential and commercial properties in Arlington, including flat roofs, TPO membrane systems, and multi-unit buildings.",
      },
      {
        q: "How soon can you inspect my Arlington property?",
        a: "We typically schedule inspections within 24-48 hours. For emergency situations like active leaks or storm damage with exposed decking, we offer same-day emergency response.",
      },
    ],
  },
  {
    city: "Joshua",
    state: "TX",
    stateFull: "Texas",
    slug: "joshua",
    metaTitle: "Roofing in Joshua, TX | 41 Roofing & Restoration",
    metaDescription:
      "Local roofing contractor serving Joshua, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping for this growing South DFW community.",
    ogImageAlt: "41 Roofing and Restoration — roofing in Joshua TX",
    heroImage: "/joshua-landmark.webp",
    heroImageAlt: "Small-town Joshua TX streetscape along Highway 174 in Johnson County",
    eyebrow: "Local Roofing Experts",
    heroTitle: "Roofing & Restoration\nIn Joshua, TX",
    heroSubtitle: "Home of the Fighting Owls — small-town roots, professional roofing.",
    aboutEyebrow: "About Joshua",
    aboutHeading: "A small town with big roofing needs.",
    aboutImage: "/joshua-homes.webp",
    aboutImageAlt: "Residential homes and roofing neighborhoods in Joshua TX 76058 Johnson County",
    aboutParagraphs: [
      "When the Gulf, Colorado and Santa Fe Railway bypassed nearby Caddo Grove in 1881, a new town was born — named Joshua after the biblical figure by Dr. D.B. McMillan. Today, Joshua has grown 21.7% since the 2020 census, with 261 active new home communities drawing families who want Johnson County land, Joshua ISD schools, and that small-town Texas character you can still feel on Friday nights at Owl Stadium.",
      "But Johnson County has recorded 374 hail events — 41% of all severe weather here. Doppler radar has detected hail near Joshua 86 times, and the April 2012 EF-1 tornado cut a path with 100 mph winds just outside town. A 30-year shingle loses 30–40% of its expected life in this climate. From Heritage Hills and Oak Knoll to the acreage homes in Timber Ridge Estates, 41 Roofing & Restoration helps Joshua homeowners stay ahead of what North Texas weather throws at them.",
    ],
    servicesHeading: "How we serve Joshua homeowners",
    servicesParagraph:
      "From rural acreage in Egan and Cooper Valley to the subdivisions along Highway 174 near Joshua City Park, we provide the same professional-grade service to Joshua that we deliver across our entire area. We're registered with the City of Joshua, pull proper permits, and pass final inspections — the kind of compliance that separates us from out-of-state storm chasers.",
    serviceCards: [
      {
        title: "Honest Inspections",
        description:
          "We provide clear, documented assessments so you know exactly what your roof needs. No pressure, no upselling — just the truth about what we find.",
      },
      {
        title: "Storm Restoration",
        description:
          "Joshua sits in the path of severe spring storms. We respond quickly with emergency tarping and full restoration to get your home protected fast.",
      },
      {
        title: "Expert Replacements",
        description:
          "Complete tear-off and installation with materials built to handle the wide-open exposure that Joshua properties face year-round.",
      },
      {
        title: "Targeted Repairs",
        description:
          "Leak tracing, shingle replacement, vent repairs, and flashing restoration. We fix what's broken without selling you what you don't need.",
      },
    ],
    neighborhoodsHeading: "Serving Joshua & Surrounding Areas",
    neighborhoodsParagraphs: [
      "Whether your property is in Heritage Hills near downtown, the growing Bluebird Meadows subdivision, or on the wide-open acreage roads of Timber Ridge Estates that give the 76058 zip code its character, we've worked on roofs throughout the Joshua community. Homes in Heritage II, Oak Knoll, and Mockingbird Hills — built in the 2000s and 2010s — are now 15–25 years old and entering the inspection window, especially after hail season.",
      "Joshua's tight subdivision layouts mean one hail storm typically damages an entire block — and one good job generates visible proof for every neighbor watching. From the Chisholm Trail Outdoor Museum to the Spring Fling Festival downtown, this is a community built on word-of-mouth. We earn it on every roof.",
    ],
    projectsEyebrow: "Our Portfolio",
    projectsHeading: "Recent Projects in Joshua.",
    projects: joshuaProjects,
    reviewsEyebrow: "Community Trust",
    reviewsHeading: "What Joshua Homeowners Say.",
    reviews: joshuaReviews,
    faqEyebrow: "Joshua Roofing Questions",
    faqHeading: "Answers for your local property.",
    faqs: [
      {
        q: "Do you service properties on acreage in Joshua?",
        a: "Yes. We service all property types in Joshua, including homes on larger rural lots and acreage. We bring everything we need — no job is too remote for our team.",
      },
      {
        q: "How quickly can you get to Joshua after a storm?",
        a: "Joshua is just minutes from our Crowley headquarters. We can typically be on-site within hours for emergency situations and within 24-48 hours for standard inspections.",
      },
      {
        q: "Do you handle insurance claims for Joshua homeowners?",
        a: "We work directly with your insurance company by providing detailed documentation, photos, and damage reports to support your claim. We make the process as smooth as possible.",
      },
      {
        q: "What roofing materials work best for Joshua homes?",
        a: "Given the open exposure to wind and hail, we often recommend impact-resistant architectural shingles for Joshua properties. We'll assess your specific situation and recommend the best option for your home and budget.",
      },
    ],
  },
  {
    city: "Cleburne",
    state: "TX",
    stateFull: "Texas",
    slug: "cleburne",
    metaTitle: "Roofing in Cleburne, TX | 41 Roofing & Restoration",
    metaDescription:
      "Trusted roofing contractor serving Cleburne, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping for the Johnson County seat.",
    ogImageAlt: "41 Roofing and Restoration — roofing in Cleburne TX",
    heroImage: "/cleburne-landmark.webp",
    heroImageAlt: "Historic Johnson County Courthouse in downtown Cleburne TX with pink granite exterior",
    eyebrow: "Local Roofing Experts",
    heroTitle: "Roofing & Restoration\nIn Cleburne, TX",
    heroSubtitle: "The Heart of Johnson County — from the 1913 Courthouse to Cleburne State Park.",
    aboutEyebrow: "About Cleburne",
    aboutHeading: "History, character, and roofs worth protecting.",
    aboutImage: "/cleburne-homes.webp",
    aboutImageAlt: "Residential homes near historic downtown Cleburne TX 76033 Johnson County seat",
    aboutParagraphs: [
      "Named after Major General Patrick Cleburne in 1867 and incorporated in 1871, Cleburne has been the seat of Johnson County for over 150 years. The 1913 courthouse — with its pink granite exterior, six-story art glass atrium, and National Register listing — still anchors the town square. When the Santa Fe Railway built its largest repair shops west of the Mississippi here in the 1890s, it doubled the population. That railroad heritage lives on in the Whistle Stop Christmas celebration that draws thousands to Hulen Park every December.",
      "But Cleburne sits in Hail Alley. Radar has detected hail here 120+ times, and the May 2013 EF-3 tornado damaged 600 homes with winds up to 165 mph. Hail is the #1 cause of Texas homeowner insurance loss — roughly 40% of all claims, averaging $11,000–$15,000 each. With a median home construction year of 1983, the largest share of Cleburne's housing stock is 40+ years old and approaching a second re-roofing cycle. 41 Roofing & Restoration brings honest, professional service to protect these homes.",
    ],
    servicesHeading: "How we serve Cleburne homeowners",
    servicesParagraph:
      "From the pre-WWII homes near the courthouse square with original wood decking to newer builds in Belclaire and along the US-67 corridor, we deliver tailored solutions for every type of property in Cleburne — including the careful work that older and historic homes demand.",
    serviceCards: [
      {
        title: "Honest Inspections",
        description:
          "Thorough, documented assessments with photos. We tell you what your roof actually needs — not what generates the biggest invoice.",
      },
      {
        title: "Storm Restoration",
        description:
          "Cleburne is no stranger to severe weather. We respond fast, document damage for insurance, and restore your roof to full protection.",
      },
      {
        title: "Expert Replacements",
        description:
          "Full system replacements with premium materials. We take special care with older and historic homes to preserve their character while upgrading protection.",
      },
      {
        title: "Gutters & Exterior",
        description:
          "Seamless gutter installation, fascia repair, and exterior restoration to complement your roofing system and protect your home from water damage.",
      },
    ],
    neighborhoodsHeading: "Serving All of Cleburne & Johnson County",
    neighborhoodsParagraphs: [
      "Whether your home is in the established Westhill neighborhood, the family-oriented Winchester subdivision, the lakeside properties around Lake Pat Cleburne, or the ranch-style streets along Hulen Park and West Buffalo Creek — we've helped homeowners across both the 76031 and 76033 zip codes. Cleburne's mix of 1960s ranch homes, 1990s subdivisions, and active new construction along Nolan River Road means every project is different, and we approach each one accordingly.",
      "This is a community that gathers at the Rodeo, packs Big Rocks Park on summer weekends, and turns out for Shakespeare in the Park at McGregor Park. Cleburne deserves a roofing contractor with the same values — hard work, honesty, and follow-through. That's what we deliver on every project.",
    ],
    projectsEyebrow: "Our Portfolio",
    projectsHeading: "Recent Projects in Cleburne.",
    projects: cleburneProjects,
    reviewsEyebrow: "Community Trust",
    reviewsHeading: "What Cleburne Homeowners Say.",
    reviews: cleburneReviews,
    faqEyebrow: "Cleburne Roofing Questions",
    faqHeading: "Answers for your local property.",
    faqs: [
      {
        q: "How far is 41 Roofing from Cleburne?",
        a: "Our Crowley headquarters is about 20 minutes from Cleburne. We service the entire Cleburne area regularly and can typically schedule inspections within 24-48 hours.",
      },
      {
        q: "Do you work on older homes in Cleburne?",
        a: "Yes. We have experience working with the older construction common in Cleburne's historic neighborhoods. We take extra care to inspect decking condition and ensure proper ventilation on aging structures.",
      },
      {
        q: "Can you help with insurance claims in Cleburne?",
        a: "Absolutely. We provide thorough damage documentation with photos, measurements, and detailed reports that support your insurance claim. We work with your adjuster to ensure nothing is missed.",
      },
      {
        q: "What should I do if I see storm damage on my Cleburne property?",
        a: "Document what you can see safely from the ground, then call us for a free professional inspection. We'll assess the full extent of the damage and advise you on whether an insurance claim is warranted before you contact your carrier.",
      },
    ],
  },
  {
    city: "Keller",
    state: "TX",
    stateFull: "Texas",
    slug: "keller",
    metaTitle: "Roofing in Keller, TX | 41 Roofing & Restoration",
    metaDescription:
      "Professional roofing contractor serving Keller, TX. Free inspections, roof repair, replacement, storm damage restoration, and premium shingle installations for one of North Texas's most desirable communities.",
    ogImageAlt: "41 Roofing and Restoration — roofing in Keller TX",
    heroImage: "/keller-landmark.webp",
    heroImageAlt: "Upscale residential neighborhood in Keller TX near Bear Creek Park and Old Town Keller",
    eyebrow: "Local Roofing Experts",
    heroTitle: "Roofing & Restoration\nIn Keller, TX",
    heroSubtitle: "One of North Texas's most desirable communities — premium roofing from Hidden Lakes to Old Town Keller.",
    aboutEyebrow: "About Keller",
    aboutHeading: "Quality homes deserve quality roofing.",
    aboutImage: "/keller-homes.webp",
    aboutImageAlt: "Upscale residential homes in Keller TX 76248 near Hidden Lakes and Bear Creek Park",
    aboutParagraphs: [
      "When John C. Keller's Texas and Pacific Railroad crew came through in 1881, this community was called Athol — a small settlement anchored by Mount Gilead Baptist Church, founded in 1852. Today, Keller is ranked among the nation's wealthiest cities with a $141,000 median household income, a top-rated school district that drives every home-buying decision, and neighborhoods like Hidden Lakes and Marshall Ridge where properties routinely exceed $600,000. The roof on a Keller home isn't just protection — it's a significant part of a major investment.",
      "Keller has averaged 2 damaging hail days per year since 2015. The May 2024 storm alone caused over $2.3 billion in regional damage, with 2-inch hail measured just southeast of the city. From the Saturday Farmers Market at Bear Creek Park to Friday night football at Keller High, this is a community that cares deeply about where they live. 41 Roofing & Restoration provides the premium-level service Keller homeowners expect — with the honesty and transparency that sets us apart from the storm chasers who flood in after every hail event.",
    ],
    servicesHeading: "How we serve Keller homeowners",
    servicesParagraph:
      "Keller properties feature complex rooflines, premium materials, and strict HOA architectural review boards — especially in Hidden Lakes, Marshall Ridge, and the Villas communities. We bring the expertise to navigate HOA applications, pull City of Keller permits, and install materials that meet both the aesthetic and performance standards this community demands.",
    serviceCards: [
      {
        title: "Honest Inspections",
        description:
          "Detailed, photo-documented assessments for your records and your HOA. We give you a clear picture of your roof's condition with zero pressure to buy.",
      },
      {
        title: "Storm Restoration",
        description:
          "When hail hits Keller, we respond with thorough damage documentation and work with your insurance to restore your roof with materials that meet or exceed the original specification.",
      },
      {
        title: "Premium Replacements",
        description:
          "We install top-tier shingle systems from GAF, Owens Corning, and CertainTeed — materials that match the quality of Keller homes and meet HOA aesthetic standards.",
      },
      {
        title: "Complex Roof Repairs",
        description:
          "Keller homes often have intricate rooflines with multiple valleys, skylights, and dormers. We specialize in tracing and repairing leaks in complex systems.",
      },
    ],
    neighborhoodsHeading: "Serving Communities Across Keller",
    neighborhoodsParagraphs: [
      "From the luxury estates in Hidden Lakes and Highland Oaks to the family neighborhoods near Bear Creek Park, the custom villas at Town Center, and the established homes of Old Town Keller along the historic downtown core — we've completed projects across zip codes 76244, 76248, and 76262. The 1990s-era housing stock that defines much of Keller is now 30+ years old and represents the primary replacement demand. Many homeowners don't realize their insurance has shifted to Actual Cash Value on roofs over 15 years — we help navigate that conversation before it becomes a surprise.",
      "Keller is a community that gathers at the Farmers Market, fills Keller Sports Park on weekends, and takes pride in being close to Southlake and Colleyville without losing its own identity. We deliver service that matches — clear communication, clean job sites, and a finished product that meets your HOA's standards and enhances your home's curb appeal for years to come.",
    ],
    projectsEyebrow: "Our Portfolio",
    projectsHeading: "Recent Projects in Keller.",
    projects: kellerProjects,
    reviewsEyebrow: "Community Trust",
    reviewsHeading: "What Keller Homeowners Say.",
    reviews: kellerReviews,
    faqEyebrow: "Keller Roofing Questions",
    faqHeading: "Answers for your local property.",
    faqs: [
      {
        q: "Do you work with Keller HOAs?",
        a: "Yes. Many Keller neighborhoods have HOA requirements for roofing materials, colors, and styles. We're experienced in meeting these specifications and can coordinate directly with your HOA if needed.",
      },
      {
        q: "Can impact-resistant shingles lower my insurance premium?",
        a: "In many cases, yes. Texas insurance carriers often offer premium discounts for Class 4 impact-resistant shingles. We can help you select a qualifying product and provide the documentation your insurer needs.",
      },
      {
        q: "How do I know if my Keller home has hail damage?",
        a: "Hail damage isn't always visible from the ground. Common signs include dented gutters, damaged vent caps, and dark circular marks on shingles. We provide free inspections to identify damage you might not see.",
      },
      {
        q: "Do you provide free inspections in Keller?",
        a: "Absolutely. We provide free, comprehensive roof inspections for Keller homeowners. We document everything with photos and provide a clear assessment — no obligation, no pressure.",
      },
    ],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
