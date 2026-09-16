import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Commercial Roofing | 41 Roofing & Restoration",
  description:
    "Low-slope and flat roof solutions for businesses in North Texas. Expert inspection, repair, and replacement for commercial properties.",
  alternates: { canonical: "/services/commercial-roofing" },
};

const reviews: Review[] = [
  {
    quote:
      "41 Roofing handled our commercial flat roof replacement with precision. Minimal disruption to our business operations and the crew was always on time. Brandi kept us informed every step of the way.",
    name: "Chris B.",
    location: "Crowley, TX",
    service: "Commercial Roofing",
    source: "Google",
  },
  {
    quote:
      "We manage several commercial properties and have used 41 Roofing on three of them now. Consistent quality, transparent pricing, and they understand the urgency of keeping a business running during roof work.",
    name: "Patricia H.",
    location: "Arlington, TX",
    service: "Commercial Roofing",
    source: "Google",
  },
  {
    quote:
      "Our warehouse had persistent leak issues that two other companies couldn\u2019t solve. 41 Roofing diagnosed the problem correctly and made a lasting repair. Highly recommended for commercial work.",
    name: "Marcus T.",
    location: "Burleson, TX",
    service: "Commercial Roofing",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  path: "/services/commercial-roofing",
  serviceType: "Roofing Contractor",
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Commercial" },
  ],
  title: "Commercial\nRoofing",
  subtitle:
    "Low-slope and flat roof solutions for businesses. Dependable inspection, repair, and replacement services that minimize disruption to your operations.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "roofing",
  defaultService: "commercial",
  reviewsEyebrow: "Commercial Reviews",
  reviewsHeading: "TRUSTED BY NORTH TEXAS BUSINESSES.",
  reviews,
  faqEyebrow: "Commercial FAQs",
  faqHeading: "COMMERCIAL ROOFING QUESTIONS.",
  faqs: [
    {
      q: "WHAT TYPES OF COMMERCIAL ROOFS DO YOU SERVICE?",
      a: "We service all major commercial roofing systems including TPO, EPDM, modified bitumen, built-up roofing (BUR), and metal systems. We handle both low-slope and flat roof configurations.",
    },
    {
      q: "CAN YOU WORK AROUND OUR BUSINESS HOURS?",
      a: "Absolutely. We understand that commercial properties have unique scheduling requirements. We can coordinate work during off-hours, weekends, or in phases to minimize disruption to your tenants and operations.",
    },
    {
      q: "DO YOU OFFER COMMERCIAL ROOF MAINTENANCE PROGRAMS?",
      a: "Yes. Regular inspections and preventive maintenance extend the life of commercial roofing systems significantly. We offer scheduled maintenance programs tailored to your building\u2019s needs.",
    },
    {
      q: "HOW DO YOU HANDLE COMMERCIAL INSURANCE CLAIMS?",
      a: "We provide comprehensive documentation including drone imagery, detailed damage reports, and scope-of-work estimates that meet insurance adjuster requirements. We work directly with your insurance company throughout the process.",
    },
  ],
};

export default function CommercialRoofingPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          YOUR COMMERCIAL PROPERTY DESERVES SPECIALIZED EXPERTISE.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            Commercial roofing systems face unique challenges that residential
            roofs do not. From flat and low-slope configurations to the demands
            of HVAC penetrations, drainage systems, and heavy foot traffic, your
            commercial property requires a team that understands these
            complexities.
          </p>
          <p>
            At 41 Roofing &amp; Restoration, we provide dependable commercial
            roofing services throughout North Texas. Whether you need a routine
            inspection, emergency repair, or a complete system replacement, we
            deliver honest assessments and quality workmanship.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          COMMERCIAL SERVICES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Roof Inspections",
              desc: "Comprehensive assessments with drone imagery and detailed reporting for property owners and facility managers.",
            },
            {
              title: "Leak Detection & Repair",
              desc: "Precise identification and lasting repair of leaks in flat and low-slope commercial systems.",
            },
            {
              title: "Full Replacement",
              desc: "Complete tear-off and installation of new commercial systems including TPO, EPDM, and metal.",
            },
            {
              title: "Preventive Maintenance",
              desc: "Scheduled inspection and maintenance programs to extend roof life and prevent costly emergency repairs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-brand-aqua pl-6"
            >
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">
                {item.title}
              </h4>
              <p className="text-brand-charcoal/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          WHO WE SERVE
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Property Owners",
            "Facility Managers",
            "Business Owners",
            "Property Management Companies",
            "Retail & Restaurant",
            "Warehouse & Industrial",
          ].map((item) => (
            <div
              key={item}
              className="p-4 bg-brand-softGray border border-brand-border text-sm font-bold uppercase tracking-wide text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-4">
          COMMERCIAL ROOFING IN NORTH TEXAS
        </h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-8">
          North Texas puts commercial roofs through conditions that accelerate
          wear faster than almost anywhere else in the country. Understanding
          these regional stressors is the difference between a roof that lasts
          and one that requires constant repairs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Extreme Rooftop Heat",
              desc: "Ambient temps above 100°F drive dark commercial membrane surfaces to 160–180°F. This accelerates seam failure, membrane oxidation, and brittleness. White TPO and reflective coatings can cut surface temps by 40–60°F — one of the highest-ROI upgrades a commercial owner can make.",
            },
            {
              title: "Ponding Water on Flat Roofs",
              desc: "Water sitting on a flat roof more than 48 hours voids most membrane warranties and adds 5+ lbs per square foot of structural load. Clogged drains and inadequate slope are the leading causes — both preventable with routine maintenance and tapered insulation solutions.",
            },
            {
              title: "Hail Exposure on Large Surface Areas",
              desc: "DFW averages 40+ severe weather days per year. A 20,000 sq ft warehouse presents 20,000 sq ft of uninterrupted hail target. Single-ply membranes can sustain hidden punctures from 1\"+ hail that visual inspection alone won't catch — infrared scanning is often required to scope the full damage.",
            },
            {
              title: "Wind Uplift on Flat Roofs",
              desc: "Edge and corner zones on large flat roofs experience uplift forces 2–3x greater than the field. Perimeter flashings and coping caps are the first to fail in straight-line wind events. DFW jurisdictions require systems engineered for 115–130 mph wind exposure under ASCE 7-22.",
            },
            {
              title: "Energy Efficiency & Cool Roofs",
              desc: "Texas IECC requires minimum R-25 insulation for most commercial assemblies in DFW's Climate Zone 3. Many buildings from the 1990s and 2000s fall well short. ENERGY STAR-rated membranes with an SRI of 78+ can reduce cooling loads and qualify for utility rebates.",
            },
            {
              title: "Aging DFW Inventory",
              desc: "A large share of DFW commercial roofs installed in the 1990s and early 2000s are at or past end of service life. If your building is in that window, a professional assessment can determine whether restoration or full replacement is the right financial decision.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-brand-aqua pl-6"
            >
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">
                {item.title}
              </h4>
              <p className="text-brand-charcoal/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServicePageTemplate>
  );
}
