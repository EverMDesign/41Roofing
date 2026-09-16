import type { Metadata } from "next";
import ServiceAreaTemplate, {
  type ServiceAreaData,
} from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Roofing in Burleson, TX | 41 Roofing & Restoration",
  description:
    "Local roofing contractor serving Burleson, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping. Honest assessments from a team that lives and works in your community.",
};

const reviews: Review[] = [
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

const projects: Project[] = [
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

const pageData: ServiceAreaData = {
  city: "Burleson",
  state: "TX",
  slug: "burleson",
  heroImage: "/burleson-landmark.webp",
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
  projects,
  reviewsEyebrow: "Community Trust",
  reviewsHeading: "What Burleson Homeowners Say.",
  reviews,
  faqEyebrow: "Burleson Roofing Questions",
  faqHeading: "Answers for your local property.",
  faqs: [
    {
      q: "DO I NEED A PERMIT FOR A ROOF REPLACEMENT IN BURLESON?",
      a: "Yes, the City of Burleson requires a permit for a full roof replacement. As a local contractor, 41 Roofing handles all the necessary permitting and ensures all work complies with current municipal building codes, taking that stress off your plate.",
    },
    {
      q: "HOW QUICKLY CAN YOU INSPECT MY ROOF AFTER A BURLESON STORM?",
      a: "Because we operate locally, we can typically be on-site within 24-48 hours after a major weather event. In cases of severe leaks or structural exposure, we offer emergency tarping services to protect your home immediately.",
    },
    {
      q: "WHAT ARE COMMON SIGNS OF HAIL DAMAGE IN THIS AREA?",
      a: "Look for missing granules (often washing out of your downspouts), bruised or indented shingles, cracked shingle mats, and small dents on metal roof vents, flashing, or AC units. Damage isn't always obvious from the ground level.",
    },
    {
      q: "DO YOU PROVIDE FREE ROOF INSPECTIONS IN BURLESON?",
      a: "Absolutely. We believe in diagnosing the problem before selling a solution. We offer free, honest, and comprehensive roof inspections for homeowners and commercial property owners throughout the Burleson area.",
    },
  ],
};

export default function BurlesonPage() {
  return <ServiceAreaTemplate data={pageData} />;
}
