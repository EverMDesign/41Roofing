import type { Metadata } from "next";
import ServiceAreaTemplate, {
  type ServiceAreaData,
} from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  alternates: { canonical: "/areas/joshua" },
  title: "Roofing in Joshua, TX | 41 Roofing & Restoration",
  description:
    "Local roofing contractor serving Joshua, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping for this growing South DFW community.",
};

const reviews: Review[] = [
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

const projects: Project[] = [
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

const pageData: ServiceAreaData = {
  city: "Joshua",
  state: "TX",
  stateFull: "Texas",
  slug: "joshua",
  metaDescription:
    "Local roofing contractor serving Joshua, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping for this growing South DFW community.",
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
  projects,
  reviewsEyebrow: "Community Trust",
  reviewsHeading: "What Joshua Homeowners Say.",
  reviews,
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
};

export default function JoshuaPage() {
  return <ServiceAreaTemplate data={pageData} />;
}
