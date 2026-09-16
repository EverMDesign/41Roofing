import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting | 41 Roofing & Restoration",
  description:
    "Professional interior and exterior painting services in Crowley and North Texas. Expert prep, prime, and finish for any surface.",
};

const reviews: Review[] = [
  {
    quote:
      "41 Roofing painted the entire exterior of our home after a roof replacement. The prep work was thorough and the paint job looks incredible. It\u2019s like having a brand new house.",
    name: "Michelle G.",
    location: "Crowley, TX",
    service: "Painting",
    source: "Google",
  },
  {
    quote:
      "Had interior painting done after water damage repairs. Color matching was perfect, edges were clean, and they protected all our furniture and flooring. Very professional crew.",
    name: "James H.",
    location: "Burleson, TX",
    service: "Painting",
    source: "Google",
  },
  {
    quote:
      "We needed both interior and exterior painting after a full restoration project. 41 Roofing handled everything seamlessly. The finish quality exceeded our expectations.",
    name: "Sandra P.",
    location: "Arlington, TX",
    service: "Painting",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  path: "/services/painting",
  serviceType: "Home Improvement",
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Restoration" },
  ],
  title: "Interior &\nExterior Painting",
  subtitle:
    "Professional prep, prime, and finish for any surface. Standalone painting projects or as part of a full restoration.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "remodeling",
  defaultService: "painting",
  reviewsEyebrow: "Painting Reviews",
  reviewsHeading: "THE FINISH THAT MAKES THE DIFFERENCE.",
  reviews,
  faqEyebrow: "Painting FAQs",
  faqHeading: "PAINTING PROJECT QUESTIONS.",
  faqs: [
    {
      q: "DO YOU OFFER STANDALONE PAINTING SERVICES?",
      a: "Yes. While painting is often part of a larger restoration project, we also take on standalone interior and exterior painting projects for homeowners throughout North Texas.",
    },
    {
      q: "WHAT PREP WORK DO YOU DO BEFORE PAINTING?",
      a: "Proper preparation is critical for a lasting finish. We power wash exteriors, scrape and sand peeling paint, repair damaged surfaces, caulk gaps, prime bare materials, and protect all surrounding areas before applying any finish coats.",
    },
    {
      q: "WHAT TYPE OF PAINT DO YOU USE?",
      a: "We use premium-grade paints from trusted manufacturers that are formulated for the Texas climate. Exterior paints are selected for UV resistance, moisture protection, and durability. Interior paints are chosen for coverage, finish quality, and low VOC.",
    },
    {
      q: "WILL INSURANCE COVER PAINTING AFTER STORM DAMAGE?",
      a: "If painting is required as part of a covered storm damage claim (such as after siding replacement or interior water damage repair), it is typically included in the insurance settlement. We document the need for painting in our scope of work.",
    },
  ],
};

export default function PaintingPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          A QUALITY PAINT JOB STARTS WITH QUALITY PREP.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            Whether you&rsquo;re refreshing your home&rsquo;s appearance or
            completing a restoration project, professional painting makes all
            the difference. At 41 Roofing &amp; Restoration, we invest the time
            in proper surface preparation that most painters skip.
          </p>
          <p>
            Our painting services cover both interior and exterior surfaces.
            From full exterior repaints to targeted interior rooms affected by
            water damage, we deliver clean lines, consistent coverage, and a
            durable finish.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          OUR PAINTING SERVICES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Exterior Painting",
              desc: "Full home exterior painting including siding, trim, fascia, shutters, and doors with thorough prep and premium paints.",
            },
            {
              title: "Interior Painting",
              desc: "Walls, ceilings, trim, and accent features with precise edge work and furniture protection.",
            },
            {
              title: "Restoration Painting",
              desc: "Color-matched painting to restore areas affected by water damage, repairs, or partial renovations.",
            },
            {
              title: "Surface Preparation",
              desc: "Power washing, scraping, sanding, priming, and caulking to ensure paint adhesion and longevity.",
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
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-4">
          PAINTING IN THE TEXAS CLIMATE
        </h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-6">
          DFW&rsquo;s heat, UV intensity, and humidity create conditions that
          shorten paint life and complicate application. Knowing how the climate
          affects your paint job helps you make smarter decisions about timing,
          product selection, and long-term maintenance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "UV Fading and Chalking",
              desc: "Intense Texas sun breaks down paint binders and pigments over time, causing colors to fade and leaving a chalky powder on the surface. UV-resistant 100% acrylic latex paints hold color measurably longer in DFW conditions.",
            },
            {
              title: "Best Painting Seasons",
              desc: "Spring (March–May) and fall (October–November) are the ideal windows. Summer surface temperatures can exceed 140°F on south- and west-facing walls — well above the safe application range for most paints.",
            },
            {
              title: "Humidity and Adhesion",
              desc: "High humidity slows drying and can cause latex paint to blush or fail to bond. Surfaces must be completely dry before application, and recoating too soon under humid conditions leads to film failure.",
            },
            {
              title: "HOA Color Approval",
              desc: "Many DFW subdivisions — including communities in Crowley, Burleson, and Mansfield — require HOA architectural review before any exterior color change. Proceeding without approval can require a costly repaint.",
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
