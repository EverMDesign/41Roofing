import type { Metadata } from "next";
import ServiceAreaTemplate, {
  type ServiceAreaData,
} from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  alternates: { canonical: "/areas/arlington" },
  title: "Roofing in Arlington, TX | 41 Roofing & Restoration",
  description:
    "Trusted roofing contractor serving Arlington, TX. Free inspections, roof repair, replacement, storm damage restoration, and commercial roofing for one of the largest cities in North Texas.",
};

const reviews: Review[] = [
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

const projects: Project[] = [
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

const pageData: ServiceAreaData = {
  city: "Arlington",
  state: "TX",
  slug: "arlington",
  heroImage: "/arlington-landmark.webp",
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
  projects,
  reviewsEyebrow: "Community Trust",
  reviewsHeading: "What Arlington Homeowners Say.",
  reviews,
  faqEyebrow: "Arlington Roofing Questions",
  faqHeading: "Answers for your local property.",
  faqs: [
    {
      q: "DO YOU SERVICE ALL OF ARLINGTON?",
      a: "Yes. We serve all of Arlington — north, south, east, and west. From neighborhoods near Lake Arlington to commercial properties along I-20 and Division Street, we cover the entire city.",
    },
    {
      q: "DO I NEED A PERMIT FOR A ROOF REPLACEMENT IN ARLINGTON?",
      a: "Yes, the City of Arlington requires a permit for roof replacements. We handle all permitting and schedule the required inspections as part of our standard process.",
    },
    {
      q: "DO YOU HANDLE COMMERCIAL ROOFING IN ARLINGTON?",
      a: "Absolutely. We service both residential and commercial properties in Arlington, including flat roofs, TPO membrane systems, and multi-unit buildings.",
    },
    {
      q: "HOW SOON CAN YOU INSPECT MY ARLINGTON PROPERTY?",
      a: "We typically schedule inspections within 24-48 hours. For emergency situations like active leaks or storm damage with exposed decking, we offer same-day emergency response.",
    },
  ],
};

export default function ArlingtonPage() {
  return <ServiceAreaTemplate data={pageData} />;
}
