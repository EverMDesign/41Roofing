import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  alternates: { canonical: "/services/exterior-repairs" },
  title: "Exterior Repairs in Crowley, TX | 41 Roofing & Restoration",
  description:
    "Siding, fascia, soffit, and trim restoration for homes in Crowley and North Texas. Repair storm damage and restore your home\u2019s exterior.",
  openGraph: {
    title: "Exterior Repairs in Crowley, TX | 41 Roofing & Restoration",
    description: "Siding, fascia, soffit, and trim restoration for homes in Crowley and North Texas. Repair storm damage and restore your home\u2019s exterior.",
    url: "/services/exterior-repairs",
    images: [{ url: "/41-roofing-and-restoration-roof-replacement.webp", width: 1200, height: 630, alt: "41 Roofing and Restoration — exterior repair services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Repairs in Crowley, TX | 41 Roofing & Restoration",
    description: "Siding, fascia, soffit, and trim restoration for homes in Crowley and North Texas. Repair storm damage and restore your home\u2019s exterior.",
    images: ["/41-roofing-and-restoration-roof-replacement.webp"],
  },
};

const reviews: Review[] = [
  {
    quote:
      "Storm took out a section of our fascia and soffit. 41 Roofing matched the existing materials perfectly and the repair looks like it was never damaged. Great attention to detail.",
    name: "Brian C.",
    location: "Crowley, TX",
    service: "Exterior Repairs",
    source: "Google",
  },
  {
    quote:
      "Had significant siding damage after a hailstorm. 41 Roofing handled the siding replacement alongside the roof work. One crew, one project, done right.",
    name: "Angela W.",
    location: "Arlington, TX",
    service: "Exterior Repairs",
    source: "Google",
  },
  {
    quote:
      "Our trim and fascia were rotting in several areas. The team replaced everything, repainted, and the house looks brand new. Professional from estimate to completion.",
    name: "David L.",
    location: "Burleson, TX",
    service: "Exterior Repairs",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  path: "/services/exterior-repairs",
  serviceType: "Property Restoration",
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Restoration", href: "/services/restoration" },
  ],
  title: "Exterior\nRepairs",
  subtitle:
    "Siding, fascia, soffit, and trim restoration. We repair storm damage and restore your home\u2019s exterior to its best condition.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "remodeling",
  defaultService: "exterior-repairs",
  reviewsEyebrow: "Exterior Reviews",
  reviewsHeading: "RESTORING CURB APPEAL AND PROTECTION.",
  reviews,
  faqEyebrow: "Exterior FAQs",
  faqHeading: "EXTERIOR REPAIR QUESTIONS.",
  faqs: [
    {
      q: "WHAT EXTERIOR COMPONENTS DO YOU REPAIR?",
      a: "We repair and replace siding, fascia, soffit, trim, window wraps, and other exterior components. If your home\u2019s exterior was damaged by a storm, age, or moisture, we can restore it.",
    },
    {
      q: "CAN YOU MATCH MY EXISTING SIDING AND TRIM?",
      a: "In most cases, yes. We work to match existing materials, colors, and profiles as closely as possible. If an exact match isn\u2019t available, we\u2019ll discuss the best options with you before starting work.",
    },
    {
      q: "DO YOU HANDLE INSURANCE CLAIMS FOR EXTERIOR DAMAGE?",
      a: "Yes. Storm damage to siding, fascia, and soffit is often covered by homeowner\u2019s insurance. We provide detailed documentation and work with your adjuster to ensure your claim covers the necessary repairs.",
    },
    {
      q: "CAN EXTERIOR REPAIRS BE DONE AT THE SAME TIME AS ROOFING?",
      a: "Absolutely, and it\u2019s often more efficient and cost-effective to combine exterior repairs with roofing work. One project, one crew, one cleanup.",
    },
  ],
};

export default function ExteriorRepairsPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          YOUR HOME&rsquo;S EXTERIOR PROTECTS EVERYTHING INSIDE IT.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            Siding, fascia, soffit, and trim aren&rsquo;t just cosmetic. They
            form your home&rsquo;s protective envelope, keeping moisture, pests,
            and weather out. When these components are damaged by storms, age,
            or neglect, the underlying structure is at risk.
          </p>
          <p>
            41 Roofing &amp; Restoration restores damaged exterior components
            using quality materials that match your existing home. We handle
            everything from isolated repairs to full exterior restoration
            projects.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          WHAT WE REPAIR
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Siding",
              desc: "Repair or replacement of damaged vinyl, fiber cement, or wood siding to restore protection and appearance.",
            },
            {
              title: "Fascia & Soffit",
              desc: "Replacement of rotted or storm-damaged fascia boards and soffit panels that protect your roof structure.",
            },
            {
              title: "Trim & Window Wraps",
              desc: "Restoration of exterior trim, window surrounds, and decorative elements damaged by weather or age.",
            },
            {
              title: "Storm Damage",
              desc: "Comprehensive exterior repair following hail, wind, and severe weather events with full insurance documentation.",
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
          HOW TEXAS WEATHER IMPACTS YOUR HOME&rsquo;S EXTERIOR
        </h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-6">
          DFW homeowners face a combination of weather stresses that accelerates
          exterior wear faster than most parts of the country. Knowing what to
          look for helps you catch damage early&mdash;before it becomes a bigger
          problem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Hail Damage to Siding",
              desc: "North Texas sits in Hail Alley. Hail cracks and punctures vinyl siding\u2014especially in cooler temperatures when vinyl turns brittle\u2014and chips fiber cement panels, exposing the substrate to moisture. Even small impact marks allow water behind your walls.",
            },
            {
              title: "UV & Heat Damage",
              desc: "DFW regularly sees 100+ consecutive days above 90\u00b0F. That relentless heat fades and chalks paint on wood and fiber cement, and causes improperly installed vinyl to buckle and warp. South- and west-facing walls degrade the fastest.",
            },
            {
              title: "Moisture & Wood Rot in Soffits and Fascia",
              desc: "DFW humidity stays at 70\u201390% on summer mornings even during dry spells. Fascia boards behind clogged gutters and soffit boards at the roof edge are the most common rot locations on area homes\u2014often hidden until the damage is extensive.",
            },
            {
              title: "Clay Soil Movement",
              desc: "The Blackland Prairie clay soil under most Crowley and DFW homes expands when wet and shrinks when dry. That seasonal shifting cracks exterior stucco and EIFS, separates caulk joints at windows and corners, and steps mortar joints in brick veneer.",
            },
            {
              title: "Insurance Coverage for Storm Damage",
              desc: "When a hailstorm damages your roof, it almost certainly damaged your siding, soffit, fascia, and gutters at the same time. Filing one bundled claim covering all affected components typically results in better compensation\u2014and we document everything to support your adjuster.",
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
