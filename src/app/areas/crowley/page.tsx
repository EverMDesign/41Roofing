import type { Metadata } from "next";
import ServiceAreaTemplate, {
  type ServiceAreaData,
} from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Roofing in Crowley, TX | 41 Roofing & Restoration",
  description:
    "Crowley's hometown roofing contractor. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping. Based in Crowley — honest assessments from your neighbors.",
  alternates: { canonical: "/areas/crowley" },
};

const reviews: Review[] = [
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

const projects: Project[] = [
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

const pageData: ServiceAreaData = {
  city: "Crowley",
  state: "TX",
  slug: "crowley",
  heroImage: "/crowley-landmark.webp",
  eyebrow: "Our Home Base",
  heroTitle: "Roofing & Restoration\nIn Crowley, TX",
  heroSubtitle: "Our home base since day one — your neighbors on East Main Street.",
  aboutEyebrow: "About Crowley",
  aboutHeading: "Built here. Based here. Not going anywhere.",
  aboutImage: "/crowley-homes.webp",
  aboutImageAlt: "Residential roofing neighborhoods near Bicentennial Park in Crowley TX 76036",
  aboutParagraphs: [
    "Crowley is more than our service area — it's our home. Named after S.H. Crowley, the Gulf, Colorado and Santa Fe Railway's master of transportation when the railroad built its station here in 1885, this community has grown from a dairy farming settlement into a thriving suburb of over 21,000 residents. 41 Roofing & Restoration is headquartered right here on East Main Street, and we take immense pride in protecting the properties of the community we live in every day.",
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
  projects,
  reviewsEyebrow: "Hometown Trust",
  reviewsHeading: "What Crowley Homeowners Say.",
  reviews,
  faqEyebrow: "Crowley Roofing Questions",
  faqHeading: "Answers for your local property.",
  faqs: [
    {
      q: "WHERE IS 41 ROOFING LOCATED?",
      a: "We're headquartered at 208 East Main Street, Suite D, in Crowley, TX. We're a locally owned and operated business — not a storm chaser or franchise. When you call us, you're calling your neighbors.",
    },
    {
      q: "DO I NEED A PERMIT FOR A ROOF REPLACEMENT IN CROWLEY?",
      a: "Yes, the City of Crowley requires a building permit for roof replacements. We handle all permitting as part of our standard process so you don't have to worry about compliance or inspections.",
    },
    {
      q: "HOW FAST CAN YOU RESPOND AFTER A STORM IN CROWLEY?",
      a: "Because we're based right here in Crowley, we can typically be on-site within hours — not days. For active leaks or exposed decking, we offer same-day emergency tarping to prevent further damage.",
    },
    {
      q: "DO YOU OFFER FREE ROOF INSPECTIONS IN CROWLEY?",
      a: "Absolutely. We provide free, thorough, and honest inspections for every homeowner in Crowley. We document everything with photos so you can make an informed decision — no pressure, no obligation.",
    },
  ],
};

export default function CrowleyPage() {
  return <ServiceAreaTemplate data={pageData} />;
}
