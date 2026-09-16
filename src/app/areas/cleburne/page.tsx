import type { Metadata } from "next";
import ServiceAreaTemplate, {
  type ServiceAreaData,
} from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Roofing in Cleburne, TX | 41 Roofing & Restoration",
  description:
    "Trusted roofing contractor serving Cleburne, TX. Free inspections, roof repair, replacement, storm damage restoration, and emergency tarping for the Johnson County seat.",
};

const reviews: Review[] = [
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

const projects: Project[] = [
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

const pageData: ServiceAreaData = {
  city: "Cleburne",
  state: "TX",
  slug: "cleburne",
  heroImage: "/cleburne-landmark.webp",
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
  projects,
  reviewsEyebrow: "Community Trust",
  reviewsHeading: "What Cleburne Homeowners Say.",
  reviews,
  faqEyebrow: "Cleburne Roofing Questions",
  faqHeading: "Answers for your local property.",
  faqs: [
    {
      q: "HOW FAR IS 41 ROOFING FROM CLEBURNE?",
      a: "Our Crowley headquarters is about 20 minutes from Cleburne. We service the entire Cleburne area regularly and can typically schedule inspections within 24-48 hours.",
    },
    {
      q: "DO YOU WORK ON OLDER HOMES IN CLEBURNE?",
      a: "Yes. We have experience working with the older construction common in Cleburne's historic neighborhoods. We take extra care to inspect decking condition and ensure proper ventilation on aging structures.",
    },
    {
      q: "CAN YOU HELP WITH INSURANCE CLAIMS IN CLEBURNE?",
      a: "Absolutely. We provide thorough damage documentation with photos, measurements, and detailed reports that support your insurance claim. We work with your adjuster to ensure nothing is missed.",
    },
    {
      q: "WHAT SHOULD I DO IF I SEE STORM DAMAGE ON MY CLEBURNE PROPERTY?",
      a: "Document what you can see safely from the ground, then call us for a free professional inspection. We'll assess the full extent of the damage and advise you on whether an insurance claim is warranted before you contact your carrier.",
    },
  ],
};

export default function CleburnePage() {
  return <ServiceAreaTemplate data={pageData} />;
}
