import type { Metadata } from "next";
import ServicePageTemplate, {
  type ServicePageData,
} from "@/components/ServicePageTemplate";
import type { Review } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Roof Replacement | 41 Roofing & Restoration",
  description:
    "Complete tear-offs and expert installation using premium materials. Built to withstand the intense Texas climate, protect your home, and increase your property value.",
};

const signs = [
  {
    title: "Age of the Roof",
    desc: "Most asphalt shingle roofs in Texas last 15\u201320 years depending on weather exposure.",
  },
  {
    title: "Widespread Hail Damage",
    desc: "Severe granule loss, bruised mats, and cracked shingles across multiple slopes.",
  },
  {
    title: "Curling or Buckling Shingles",
    desc: "Signs of poor ventilation or materials reaching the end of their usable life.",
  },
  {
    title: "Persistent Leaks",
    desc: "Water intrusion in multiple areas or structural decking rot underneath.",
  },
];

const standards = [
  {
    title: "Complete Tear-Off",
    desc: "We remove all old materials down to the decking to inspect for hidden rot or damage before installing new systems.",
  },
  {
    title: "Premium Materials",
    desc: "We use top-tier architectural and impact-resistant shingles designed to handle severe Texas weather.",
  },
  {
    title: "Property Protection",
    desc: "Landscaping is covered, driveways are protected, and we perform thorough magnetic sweeps for nails.",
  },
  {
    title: "Final Walkthrough",
    desc: "The job isn\u2019t done until you are fully satisfied with the cleanup and the final product.",
  },
];

const reviews: Review[] = [
  {
    quote:
      "41 Roofing did an outstanding job on our roof replacement. The crew was professional, the cleanup was immaculate, and the new roof looks fantastic. Highly recommend this local company.",
    name: "Sarah W.",
    location: "Burleson, TX",
    service: "Roof Replacement",
    source: "Google",
  },
  {
    quote:
      "We knew it was time for a new roof but were dreading the process. Brandi walked us through every step, helped us choose the right shingles, and the installation was flawless. Very transparent pricing.",
    name: "Jason M.",
    location: "Crowley, TX",
    service: "Roof Replacement",
    source: "Google",
  },
  {
    quote:
      "I had a lot of anxiety about replacing my roof. The team at 41 Roofing was on time, worked hard all day, and made sure there were no nails left in my yard. Excellent communication from start to finish.",
    name: "Amanda L.",
    location: "Joshua, TX",
    service: "Roof Replacement",
    source: "Facebook",
  },
];

const pageData: ServicePageData = {
  breadcrumbs: [
    { label: "Services", href: "/#services" },
    { label: "Residential" },
  ],
  title: "Roof\nReplacement",
  subtitle:
    "Complete tear-offs and expert installation using premium materials. Built to withstand the intense Texas climate, protect your home, and increase your property value.",
  heroImage: "/roof-replacement-hero.webp",
  defaultTab: "roofing",
  defaultService: "replacement",
  reviewsEyebrow: "Replacement Reviews",
  reviewsHeading: "PROVEN BY THE PEOPLE WE SERVE.",
  reviews,
  faqEyebrow: "Replacement FAQs",
  faqHeading: "WHAT TO KNOW BEFORE YOU BUILD.",
  faqs: [
    {
      q: "HOW LONG DOES A ROOF REPLACEMENT TAKE?",
      a: "For a standard residential home, most roof replacements are completed in 1 to 2 days. Weather conditions, the size of your roof, and the complexity of the job can sometimes extend this timeline, but we always communicate the expected schedule upfront.",
    },
    {
      q: "WILL MY INSURANCE COVER A ROOF REPLACEMENT?",
      a: "If your roof sustained damage from a storm (like hail or high winds), your homeowner\u2019s insurance will likely cover the replacement cost minus your deductible. If the replacement is due to age or normal wear and tear, it is typically out-of-pocket. We can help assess the damage to determine if an insurance claim is viable.",
    },
    {
      q: "WHAT HAPPENS TO MY GUTTERS DURING A REPLACEMENT?",
      a: "We take careful measures to protect your existing gutters during the tear-off and installation phases. If your gutters were damaged in a storm or are failing, we can also provide a quote to replace them at the same time as your roof.",
    },
    {
      q: "DO I NEED TO LEAVE MY HOUSE DURING THE INSTALLATION?",
      a: "You do not need to leave your house, but it will be noisy. There will be constant hammering and footsteps on your roof throughout the day. If you work from home or have small children/pets sensitive to noise, you might prefer to make other arrangements for the day of installation.",
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

export default function RoofReplacementPage() {
  return (
    <ServicePageTemplate data={pageData}>
      {/* Intro */}
      <div>
        <h2 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-brand-black mb-6">
          A NEW ROOF IS A MAJOR INVESTMENT. WE TREAT IT LIKE ONE.
        </h2>
        <div className="space-y-6 text-brand-charcoal/80 text-lg leading-relaxed">
          <p>
            Replacing your roof isn&rsquo;t just about nailing down new
            shingles. It&rsquo;s about protecting everything underneath it. At
            41 Roofing &amp; Restoration, we understand the stress that comes
            with a failing roof or severe storm damage.
          </p>
          <p>
            We don&rsquo;t push replacements unless they are truly necessary. If
            your roof is nearing the end of its lifespan, has sustained
            significant weather damage, or is failing across multiple areas, a
            full replacement is often the most cost-effective and secure solution
            long-term.
          </p>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src="/41-roofing-quad-finished.webp"
          alt="41 Roofing crew completing a roof replacement"
          className="w-full aspect-video object-cover border border-brand-border"
        />
      </div>

      {/* Signs */}
      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          SIGNS YOU MIGHT NEED A REPLACEMENT
        </h3>
        <ul className="space-y-4">
          {signs.map((item) => (
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

      {/* Installation Standard */}
      <div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-brand-black mb-6">
          OUR INSTALLATION STANDARD
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((item) => (
            <div key={item.title} className="border-l-2 border-brand-aqua pl-6">
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
