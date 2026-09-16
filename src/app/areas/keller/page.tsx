import type { Metadata } from "next";
import ServiceAreaTemplate, {
  type ServiceAreaData,
} from "@/components/ServiceAreaTemplate";
import type { Review } from "@/components/ReviewCard";
import type { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  alternates: { canonical: "/areas/keller" },
  title: "Roofing in Keller, TX | 41 Roofing & Restoration",
  description:
    "Professional roofing contractor serving Keller, TX. Free inspections, roof repair, replacement, storm damage restoration, and premium shingle installations for one of North Texas's most desirable communities.",
};

const reviews: Review[] = [
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

const projects: Project[] = [
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

const pageData: ServiceAreaData = {
  city: "Keller",
  state: "TX",
  slug: "keller",
  heroImage: "/keller-landmark.webp",
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
  projects,
  reviewsEyebrow: "Community Trust",
  reviewsHeading: "What Keller Homeowners Say.",
  reviews,
  faqEyebrow: "Keller Roofing Questions",
  faqHeading: "Answers for your local property.",
  faqs: [
    {
      q: "DO YOU WORK WITH KELLER HOAs?",
      a: "Yes. Many Keller neighborhoods have HOA requirements for roofing materials, colors, and styles. We're experienced in meeting these specifications and can coordinate directly with your HOA if needed.",
    },
    {
      q: "CAN IMPACT-RESISTANT SHINGLES LOWER MY INSURANCE PREMIUM?",
      a: "In many cases, yes. Texas insurance carriers often offer premium discounts for Class 4 impact-resistant shingles. We can help you select a qualifying product and provide the documentation your insurer needs.",
    },
    {
      q: "HOW DO I KNOW IF MY KELLER HOME HAS HAIL DAMAGE?",
      a: "Hail damage isn't always visible from the ground. Common signs include dented gutters, damaged vent caps, and dark circular marks on shingles. We provide free inspections to identify damage you might not see.",
    },
    {
      q: "DO YOU PROVIDE FREE INSPECTIONS IN KELLER?",
      a: "Absolutely. We provide free, comprehensive roof inspections for Keller homeowners. We document everything with photos and provide a clear assessment — no obligation, no pressure.",
    },
  ],
};

export default function KellerPage() {
  return <ServiceAreaTemplate data={pageData} />;
}
