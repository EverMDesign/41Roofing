import ChevronIcon from "@/components/icons/ChevronIcon";

export const faqs = [
  {
    q: "How do I know if I should repair or replace my roof?",
    a: "It depends on the age of the roof, the extent of the damage, and the condition of the materials. We perform a thorough inspection to determine if a targeted repair will resolve the issue or if a full replacement is the most cost-effective long-term solution. We will never push a replacement if a repair is viable.",
  },
  {
    q: "What are common signs of hail damage?",
    a: "Look for dented gutters, damaged flashing, circular dark spots on shingles where granules are missing (bruising), and excessive granules in your downspouts. Often, severe hail damage is not visible from the ground, requiring a professional roof inspection.",
  },
  {
    q: "When should I have my roof inspected?",
    a: "We recommend an inspection after any severe weather event (major hail or high winds), if you notice active leaks or water stains inside, or if your roof is over 10-15 years old. Catching problems early prevents costly structural damage.",
  },
  {
    q: "Do you provide free roof inspections?",
    a: "Yes, we provide free, comprehensive, and honest roof inspections for homeowners and commercial property owners in our service area.",
  },
  {
    q: "How long does roof replacement usually take?",
    a: "Most standard residential roof replacements are completed in 1 to 2 days, weather permitting. Complex roofs or commercial systems may take longer. We outline the exact timeline before the project begins.",
  },
  {
    q: "What should I do after a North Texas hailstorm?",
    a: "First, ensure your safety. Then, document any obvious damage from the ground. Contact a reputable, local roofing contractor like 41 Roofing for an honest inspection before calling your insurance company. We will provide the documentation you need to decide if a claim is warranted.",
  },
  {
    q: "Can you repair an active roof leak?",
    a: "Yes, we specialize in identifying the source of leaks (which can sometimes travel far from the actual entry point) and performing durable repairs to stop water intrusion.",
  },
  {
    q: "Do you provide residential and commercial roofing?",
    a: "Yes, our team is equipped and experienced to handle both sloped residential roofing systems and low-slope or flat commercial systems.",
  },
  {
    q: "What roofing materials do you install?",
    a: "We install premium architectural shingles, impact-resistant options, metal roofing, and various commercial systems. We only use materials proven to perform in the Texas climate.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Crowley, TX, and serve the greater North Texas / South DFW area, including Burleson, Arlington, Joshua, Cleburne, and surrounding communities.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Roofing Questions</p>
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1]">
            CLEAR ANSWERS BEFORE YOU MAKE A DECISION.
          </h2>
        </div>
        <div className="space-y-0 border-t border-brand-border">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-brand-border">
              <summary className="flex justify-between items-center font-heading font-bold text-lg md:text-xl text-brand-black py-6 cursor-pointer">
                {faq.q}
                <span className="transition group-open:rotate-180 text-brand-aqua ml-4 shrink-0">
                  <ChevronIcon />
                </span>
              </summary>
              <div className="text-brand-charcoal/80 font-sans pb-6 text-base leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
