import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Emergency Tarping | 41 Roofing & Restoration",
  description:
    "Immediate emergency tarping to protect your property from further damage after storms, fallen trees, or sudden roof failures in North Texas.",
  alternates: { canonical: "/services/emergency-tarping" },
};

const reviews: Review[] = [
  {
    quote:
      "A tree branch went through our roof during a storm at night. 41 Roofing had a tarp on it by the next morning. They were calm, professional, and prevented what could have been catastrophic water damage inside our home.",
    name: "Jennifer K.",
    location: "Joshua, TX",
    service: "Emergency Tarping",
    source: "Google",
  },
  {
    quote:
      "Called 41 Roofing after a severe hailstorm punched holes in our roof. They responded within hours and had the damaged sections tarped before the next round of rain. Lifesavers.",
    name: "Tom R.",
    location: "Crowley, TX",
    service: "Emergency Tarping",
    source: "Google",
  },
  {
    quote:
      "Fast response when we needed it most. The tarping crew was professional and thorough. They followed up the next week with a full inspection and repair plan. Great experience from start to finish.",
    name: "Lisa P.",
    location: "Burleson, TX",
    service: "Emergency Tarping",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  path: "/services/emergency-tarping",
  serviceType: "Roofing Contractor",
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Roofing" },
  ],
  title: "Emergency\nTarping",
  subtitle:
    "Immediate protection when your roof is compromised. We respond fast to prevent further water damage to your home or business.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "roofing",
  defaultService: "tarping",
  reviewsEyebrow: "Emergency Reviews",
  reviewsHeading: "FAST RESPONSE WHEN IT MATTERS MOST.",
  reviews,
  faqEyebrow: "Emergency FAQs",
  faqHeading: "EMERGENCY TARPING QUESTIONS.",
  faqs: [
    {
      q: "HOW QUICKLY CAN YOU RESPOND TO AN EMERGENCY?",
      a: "We prioritize emergency tarping requests and typically respond within hours. For active water intrusion, call us directly at 817-266-9433 for the fastest response.",
    },
    {
      q: "HOW LONG DOES A TARP LAST?",
      a: "Our emergency tarps are installed to withstand additional weather events and typically last several weeks to months. They are a temporary measure to protect your property while we schedule the permanent repair or replacement.",
    },
    {
      q: "WILL MY INSURANCE COVER EMERGENCY TARPING?",
      a: "Most homeowner\u2019s insurance policies cover emergency tarping as part of your duty to mitigate further damage. We provide documentation of the emergency service for your insurance claim.",
    },
    {
      q: "WHAT SHOULD I DO WHILE WAITING FOR THE TARPING CREW?",
      a: "Move valuables away from the affected area, place buckets or containers to catch water, and avoid going on the roof yourself. If there is a risk of structural collapse, evacuate the area and call 911.",
    },
  ],
};

export default function EmergencyTarpingPage() {
  return (
    <ServicePageTemplate data={pageData}>
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          WHEN YOUR ROOF CAN&rsquo;T WAIT, NEITHER DO WE.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            Severe storms, fallen trees, and sudden roof failures can expose
            your home or business to immediate water damage. Every hour without
            protection increases the risk of structural deterioration, mold
            growth, and interior damage.
          </p>
          <p>
            41 Roofing &amp; Restoration provides rapid emergency tarping
            throughout North Texas. Our crew arrives with commercial-grade
            materials and secures your roof quickly, buying you the time needed
            to plan a proper repair or replacement.
          </p>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-brand-charcoal p-8 border border-white/10">
        <p className="text-brand-aqua font-heading font-bold text-xs tracking-widest uppercase mb-3">
          Immediate Assistance
        </p>
        <p className="text-brand-white text-lg font-medium mb-4">
          Active water intrusion? Call us now.
        </p>
        <a
          href="tel:817-266-9433"
          className="inline-flex items-center gap-3 text-2xl font-heading font-black text-brand-white hover:text-brand-aqua transition-colors uppercase"
        >
          817-266-9433
        </a>
      </div>

      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          WHAT WE COVER
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Storm Damage",
              desc: "Immediate tarping after hail, wind, or tornado events to prevent further water intrusion.",
            },
            {
              title: "Fallen Trees & Debris",
              desc: "Securing areas where trees or large debris have punctured or displaced roofing materials.",
            },
            {
              title: "Sudden Failures",
              desc: "Protection for sudden structural failures, collapsed sections, or blown-off roof components.",
            },
            {
              title: "Commercial Properties",
              desc: "Emergency tarping for flat and low-slope commercial roofs to protect inventory and equipment.",
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
          WHY SPEED MATTERS IN NORTH TEXAS
        </h3>
        <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-6">
          The DFW Metroplex doesn&rsquo;t give you time to wait. Between Texas
          humidity, a storm season that runs March through June, and a second
          active window in the fall, a roof breach left unprotected can turn
          into a mold and insurance problem faster than most homeowners expect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Mold Starts in 24–48 Hours",
              desc: "North Texas heat and humidity accelerate mold colonization. Attic temperatures can exceed 130°F in summer — a roof breach left open overnight creates ideal conditions for spore growth in insulation, decking, and ceiling framing.",
            },
            {
              title: "Your Policy Requires It",
              desc: "Texas homeowners policies include a duty-to-mitigate clause. If you take no action and rain on the following day causes ceiling or flooring damage, your carrier may dispute those losses as preventable. Emergency tarping satisfies that obligation and is typically reimbursable.",
            },
            {
              title: "Peak Season: March through June",
              desc: "April and May carry the highest statistical risk in Tarrant County — hail up to 4.5 inches and straight-line winds exceeding 89 mph have been recorded in recent seasons. The next storm can arrive within days of the first.",
            },
            {
              title: "Beware Storm Chasers",
              desc: "After every major DFW event, out-of-state crews arrive soliciting emergency work. They leave the market once paid — no local office, no recourse if the tarp fails. A Crowley-based crew has a physical address and a reputation in the community they serve.",
            },
            {
              title: "Common DFW Emergency Scenarios",
              desc: "Large hail punching through OSB decking, straight-line winds lifting shingle fields, fallen post-oak limbs collapsing framing, displaced ridge cap flashing, and hail-cracked skylights — these are the calls we run regularly across Crowley, Burleson, Mansfield, and southwest Tarrant County.",
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
