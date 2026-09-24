import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Roof Repair in Crowley, TX | 41 Roofing & Restoration",
  description:
    "Targeted roof repairs for active leaks, storm damage, and aging materials. Honest assessments and dependable fixes from a local Crowley, TX roofing contractor.",
  alternates: { canonical: "/services/roof-repair" },
  openGraph: {
    title: "Roof Repair in Crowley, TX | 41 Roofing & Restoration",
    description:
      "Targeted roof repairs for active leaks, storm damage, and aging materials. Honest assessments and dependable fixes from a local Crowley, TX roofing contractor.",
    url: "/services/roof-repair",
    images: [{ url: "/41-roofing-and-restoration-roof-replacement.webp", width: 1200, height: 630, alt: "41 Roofing and Restoration — roof repair services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repair in Crowley, TX | 41 Roofing & Restoration",
    description:
      "Targeted roof repairs for active leaks, storm damage, and aging materials. Honest assessments and dependable fixes from a local Crowley, TX roofing contractor.",
    images: ["/41-roofing-and-restoration-roof-replacement.webp"],
  },
};

const commonIssues = [
  {
    title: "Active Leaks",
    desc: "Water stains on ceilings, dripping during rain, or moisture in the attic are signs of an active leak that requires immediate attention.",
  },
  {
    title: "Missing or Damaged Shingles",
    desc: "Wind, hail, and age can dislodge or crack shingles, exposing the underlayment to further damage.",
  },
  {
    title: "Flashing Failures",
    desc: "Deteriorated flashing around chimneys, vents, and skylights is one of the most common sources of roof leaks.",
  },
  {
    title: "Granule Loss",
    desc: "Excessive granules in gutters indicate shingles are deteriorating and losing their protective layer.",
  },
];

const reviews: Review[] = [
  {
    quote:
      "Brandi and her team were incredibly honest during the inspection. Another company told us we needed a full replacement after a storm, but 41 Roofing showed us it was just minor repair work. The communication was excellent from start to finish.",
    name: "Sarah M.",
    location: "Crowley, TX",
    service: "Roof Repair",
    source: "Google",
  },
  {
    quote:
      "Had a leak after a big storm and called 41 Roofing. They came out fast, found the problem, and had it fixed the same day. No upselling, no pressure. Just honest work.",
    name: "Michael R.",
    location: "Burleson, TX",
    service: "Roof Repair",
    source: "Google",
  },
  {
    quote:
      "We had three different companies tell us we needed a full replacement. 41 Roofing repaired the damaged section for a fraction of the cost. Honest and dependable.",
    name: "Karen D.",
    location: "Arlington, TX",
    service: "Roof Repair",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  path: "/services/roof-repair",
  serviceType: "Roofing Contractor",
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Roofing", href: "/services/roofing" },
  ],
  title: "Roof\nRepair",
  subtitle:
    "Targeted fixes for active leaks and damage. We identify the root cause and deliver lasting repairs\u2014no unnecessary replacements.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "roofing",
  defaultService: "repair",
  reviewsEyebrow: "Repair Reviews",
  reviewsHeading: "HONEST REPAIRS. REAL RESULTS.",
  reviews,
  faqEyebrow: "Repair FAQs",
  faqHeading: "COMMON REPAIR QUESTIONS.",
  faqs: [
    {
      q: "HOW DO I KNOW IF I NEED A REPAIR OR A REPLACEMENT?",
      a: "It depends on the age of the roof, the extent of the damage, and the condition of the materials. We perform a thorough inspection to determine if a targeted repair will resolve the issue or if a full replacement is the most cost-effective long-term solution. We will never push a replacement if a repair is viable.",
    },
    {
      q: "HOW QUICKLY CAN YOU FIX AN ACTIVE LEAK?",
      a: "For active leaks, we prioritize same-day or next-day response. Emergency tarping is available immediately to prevent further water intrusion while we schedule the full repair.",
    },
    {
      q: "WILL MY INSURANCE COVER ROOF REPAIRS?",
      a: "If the damage was caused by a covered event like hail or wind, your homeowner\u2019s insurance will typically cover the repair cost minus your deductible. We can help document the damage for your claim.",
    },
    {
      q: "HOW LONG DOES A TYPICAL ROOF REPAIR TAKE?",
      a: "Most residential roof repairs are completed in a few hours to one day, depending on the scope. We\u2019ll communicate the expected timeline before starting work.",
    },
  ],
};

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-brand-aqua shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function RoofRepairPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          NOT EVERY ROOF NEEDS REPLACING. SOMETIMES IT JUST NEEDS THE RIGHT
          REPAIR.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            A damaged roof doesn&rsquo;t always mean a full replacement. At 41
            Roofing &amp; Restoration, we specialize in identifying the root
            cause of roof problems and performing targeted, lasting repairs that
            protect your home without unnecessary cost.
          </p>
          <p>
            Whether it&rsquo;s a single leak, storm damage to a specific area,
            or aging flashing that needs attention, we diagnose the issue
            honestly and fix it right the first time.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          COMMON ISSUES WE REPAIR
        </h3>
        <ul className="space-y-4">
          {commonIssues.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 p-4 bg-brand-softGray border border-brand-border"
            >
              <CheckIcon />
              <div>
                <span className="font-bold text-sm uppercase tracking-wide block mb-1">
                  {item.title}
                </span>
                <span className="text-brand-charcoal/70 text-sm">
                  {item.desc}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          OUR REPAIR APPROACH
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Root Cause Analysis",
              desc: "We trace leaks to their actual source\u2014not just where the water appears\u2014ensuring the repair addresses the real problem.",
            },
            {
              title: "Quality Materials",
              desc: "We use manufacturer-grade materials that match your existing roofing system for a seamless, durable repair.",
            },
            {
              title: "Full Documentation",
              desc: "Every repair includes photographic documentation of the damage found and work completed.",
            },
            {
              title: "Warranty Backed",
              desc: "Our repairs come with a workmanship warranty so you have peace of mind long after we leave.",
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
          WHY ROOF REPAIR IS CRITICAL IN NORTH TEXAS
        </h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-6">
          North Texas subjects roofs to some of the harshest conditions in the
          country. Understanding what your roof is up against helps you recognize
          damage early&mdash;before a small problem becomes a major one.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Hail Alley Frequency",
              desc: "DFW averages 7\u20139 significant hail events per year. Tarrant County consistently ranks in the national top 10 for insurance hail claims. Damage often isn\u2019t visible from the ground until a leak appears months later.",
            },
            {
              title: "Extreme Heat & UV",
              desc: "Roof surfaces reach 150\u2013170\u00b0F in direct summer sun. Sustained heat and high UV index accelerate granule loss, dry out pipe boots and caulk seals, and cause asphalt to oxidize and crack\u2014especially on roofs with poor attic ventilation.",
            },
            {
              title: "Thermal Cycling",
              desc: "North Texas temperatures can swing 30\u201340\u00b0F within a single day. Repeated expansion and contraction works fasteners loose, cracks sealants at penetrations, and fatigues metal flashings\u2014often faster than the shingles themselves.",
            },
            {
              title: "Heavy Rainfall Events",
              desc: "DFW receives 36\u201340 inches of rain annually, typically in intense bursts. High water volume stresses valley flashing, gutter capacity, and drip edge installation\u2014exposing any weakness in the system quickly.",
            },
            {
              title: "Wind & Tornado Exposure",
              desc: "Severe thunderstorms regularly produce 50\u201380 mph winds, and Tarrant County sits in one of Texas\u2019s most active tornado corridors. Even near-miss tornado events cause widespread shingle and flashing damage across entire neighborhoods.",
            },
            {
              title: "Insurance Claim Context",
              desc: "Because DFW is a top hail market, most storm-related repairs involve a homeowner\u2019s insurance claim. Damage must be documented to insurance standards\u2014something we handle as part of every storm inspection.",
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
