import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Gutters in Crowley, TX | 41 Roofing & Restoration",
  description:
    "Seamless gutter installation and replacement in Crowley and North Texas. Protect your foundation, landscaping, and siding with a properly functioning gutter system.",
  alternates: { canonical: "/services/gutters" },
  openGraph: {
    title: "Gutters in Crowley, TX | 41 Roofing & Restoration",
    description: "Seamless gutter installation and replacement in Crowley and North Texas. Protect your foundation, landscaping, and siding with a properly functioning gutter system.",
    url: "/services/gutters",
    images: [{ url: "/41-roofing-and-restoration-roof-replacement.webp", width: 1200, height: 630, alt: "41 Roofing and Restoration — gutter services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutters in Crowley, TX | 41 Roofing & Restoration",
    description: "Seamless gutter installation and replacement in Crowley and North Texas. Protect your foundation, landscaping, and siding with a properly functioning gutter system.",
    images: ["/41-roofing-and-restoration-roof-replacement.webp"],
  },
};

const reviews: Review[] = [
  {
    quote:
      "Had new gutters installed along with our roof replacement. The seamless gutters look clean and professional. Great color match to our trim. 41 Roofing made the entire process easy.",
    name: "Diane S.",
    location: "Crowley, TX",
    service: "Gutters",
    source: "Google",
  },
  {
    quote:
      "Our old gutters were pulling away from the fascia and overflowing during every rain. 41 Roofing replaced them with seamless aluminum gutters and the drainage is perfect now.",
    name: "Steve M.",
    location: "Burleson, TX",
    service: "Gutters",
    source: "Google",
  },
  {
    quote:
      "Professional installation, cleaned up after themselves, and the new gutters look fantastic. Fair pricing compared to the other quotes we got.",
    name: "Rachel T.",
    location: "Joshua, TX",
    service: "Gutters",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  path: "/services/gutters",
  serviceType: "Gutter Service",
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Restoration", href: "/services/restoration" },
  ],
  title: "Gutter\nInstallation",
  subtitle:
    "Seamless gutter installation and replacement to protect your foundation, landscaping, and siding from water damage.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "remodeling",
  defaultService: "gutters",
  reviewsEyebrow: "Gutter Reviews",
  reviewsHeading: "PROTECTING HOMES FROM THE GROUND UP.",
  reviews,
  faqEyebrow: "Gutter FAQs",
  faqHeading: "GUTTER INSTALLATION QUESTIONS.",
  faqs: [
    {
      q: "What type of gutters do you install?",
      a: "We install seamless aluminum gutters custom-fabricated on-site to fit your home perfectly. Seamless gutters eliminate joints where leaks commonly develop and provide a clean, professional appearance.",
    },
    {
      q: "How do I know if my gutters need replacing?",
      a: "Signs include gutters pulling away from the fascia, visible rust or cracks, water overflowing during rain, sagging sections, and water pooling near your foundation. If repairs are no longer effective, replacement is the best long-term solution.",
    },
    {
      q: "Can you replace gutters during a roof replacement?",
      a: "Yes, and we recommend it. Replacing gutters at the same time as your roof ensures everything integrates properly and saves you from scheduling a separate project. We often include gutter replacement in our roofing proposals.",
    },
    {
      q: "Do you install gutter guards?",
      a: "Yes, we offer gutter guard installation to reduce debris buildup and minimize maintenance. We can discuss the best options for your property during the estimate.",
    },
  ],
};

export default function GuttersPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          YOUR GUTTERS ARE YOUR FIRST LINE OF DEFENSE AGAINST WATER DAMAGE.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            A properly functioning gutter system channels thousands of gallons
            of rainwater away from your foundation, siding, and landscaping
            every year. When gutters fail, the consequences are costly:
            foundation erosion, basement flooding, fascia rot, and landscape
            washout.
          </p>
          <p>
            41 Roofing &amp; Restoration installs seamless aluminum gutters
            custom-fabricated on-site to fit your home precisely. No joints mean
            fewer leaks, and our professional installation ensures proper pitch
            and secure attachment for years of reliable performance.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          WHAT WE PROVIDE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Seamless Gutters",
              desc: "Custom-fabricated on-site for a perfect fit with no joints where leaks develop.",
            },
            {
              title: "Downspout Routing",
              desc: "Strategically placed downspouts to direct water away from your foundation and landscaping.",
            },
            {
              title: "Gutter Guards",
              desc: "Optional debris protection to reduce maintenance and prevent clogs.",
            },
            {
              title: "Fascia Repair",
              desc: "We inspect and repair damaged fascia boards before installing new gutters for a solid mounting surface.",
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
          WHY GUTTERS MATTER MORE IN NORTH TEXAS
        </h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-6">
          DFW&apos;s climate and soil conditions put unique demands on gutter
          systems that homeowners from other parts of the country often don&apos;t
          anticipate. A gutter setup that works fine in a milder region can fail
          here—and the consequences go well beyond a wet flowerbed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Extreme Rainfall Rates",
              desc: "North Texas thunderstorms commonly drop 2–4 inches of rain per hour. Standard 5-inch gutters with a single small downspout can overflow completely in these events. We size systems specifically for Texas storm intensity.",
            },
            {
              title: "Clay Soil and Foundation Risk",
              desc: "DFW sits on expansive black clay that swells when wet and shrinks when dry. Gutters that dump water against your foundation perimeter cause differential soil movement—a leading driver of slab cracks, sticking doors, and costly foundation repairs.",
            },
            {
              title: "Hail Damage Is Covered by Insurance",
              desc: "DFW receives significant hail annually. Hail dents, cracks joints, and knocks gutters loose. Insurance claims for roof damage frequently include gutters—we document and assess gutter damage as part of every storm inspection.",
            },
            {
              title: "Year-Round Debris from Local Trees",
              desc: "Live oaks drop small leaves nearly every month. Pecans shed bulky hulls and nuts in fall. Cottonwoods release spring cotton that clogs downspout screens fast. North Texas trees mean gutters need cleaning more often than the national average.",
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
