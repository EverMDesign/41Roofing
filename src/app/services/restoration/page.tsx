import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Interior & Exterior Restoration | 41 Roofing & Restoration",
  description:
    "Full property restoration after storm or water damage. Interior and exterior restoration services for homes in Crowley and North Texas.",
};

const reviews: Review[] = [
  {
    quote:
      "A rare find in the roofing industry. They actually did exactly what they said they would do, when they said they would do it. Dealing with storm damage is stressful, but 41 Roofing made the restoration process straightforward.",
    name: "Robert K.",
    location: "Arlington, TX",
    service: "Restoration",
    source: "Google",
  },
  {
    quote:
      "After a major storm, our home needed a new roof, siding repairs, interior drywall patching, and painting. 41 Roofing handled it all under one project. The coordination was impressive.",
    name: "Nancy F.",
    location: "Crowley, TX",
    service: "Restoration",
    source: "Google",
  },
  {
    quote:
      "Water damage from a roof leak had affected two rooms. 41 Roofing fixed the roof, repaired the water-damaged drywall, and repainted everything. You\u2019d never know there was a problem.",
    name: "Kevin J.",
    location: "Joshua, TX",
    service: "Restoration",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Restoration" },
  ],
  title: "Interior &\nExterior Restoration",
  subtitle:
    "Full property restoration after storm or water damage. We handle everything from the roof down so you have one team, one project, and one point of contact.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "remodeling",
  defaultService: "restoration",
  reviewsEyebrow: "Restoration Reviews",
  reviewsHeading: "RESTORING HOMES. REBUILDING CONFIDENCE.",
  reviews,
  faqEyebrow: "Restoration FAQs",
  faqHeading: "RESTORATION PROJECT QUESTIONS.",
  faqs: [
    {
      q: "WHAT DOES FULL PROPERTY RESTORATION INCLUDE?",
      a: "Full restoration can include roofing, siding, fascia, soffit, gutters, interior drywall, painting, flooring, and any other components damaged by storms, water intrusion, or other events. We assess the full scope and handle everything under one project.",
    },
    {
      q: "CAN YOU HANDLE BOTH INTERIOR AND EXTERIOR WORK?",
      a: "Yes. Unlike many roofing companies that only handle the exterior, we provide both interior and exterior restoration. This means one crew, one schedule, and one point of contact for your entire project.",
    },
    {
      q: "HOW DO YOU COORDINATE WITH INSURANCE FOR RESTORATION?",
      a: "We provide detailed scope-of-work documentation, damage reports, and photographic evidence for your insurance company. We work directly with adjusters and supplement claims when the initial assessment doesn\u2019t cover the full scope of damage.",
    },
    {
      q: "HOW LONG DOES A FULL RESTORATION PROJECT TAKE?",
      a: "Timeline depends on the scope of damage. A roof-and-exterior project might take 1\u20132 weeks, while a full interior-and-exterior restoration could take several weeks. We provide a detailed timeline before starting and communicate any changes.",
    },
  ],
};

export default function RestorationPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          WHEN THE DAMAGE GOES BEYOND THE ROOF, WE GO WITH IT.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            Severe storms and water intrusion rarely damage just one thing. A
            compromised roof leads to water-damaged ceilings, walls, insulation,
            and flooring. Hail doesn&rsquo;t stop at shingles\u2014it damages
            siding, gutters, window screens, and outdoor structures.
          </p>
          <p>
            41 Roofing &amp; Restoration handles the full scope of property
            restoration so you don&rsquo;t have to coordinate multiple
            contractors. From the roof down to the interior finishes, we manage
            every phase of the project with clear communication and quality
            workmanship.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          RESTORATION SCOPE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Roofing",
              desc: "Full roof repair or replacement as the first step in protecting the structure from further damage.",
            },
            {
              title: "Exterior",
              desc: "Siding, fascia, soffit, gutters, trim, and any exterior components damaged by the event.",
            },
            {
              title: "Interior",
              desc: "Drywall repair, ceiling restoration, insulation replacement, and water damage remediation.",
            },
            {
              title: "Painting",
              desc: "Interior and exterior painting to complete the restoration and return your home to its pre-damage condition.",
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
