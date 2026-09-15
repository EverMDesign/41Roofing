const factors = [
  "Roof Age",
  "Extent of Damage",
  "Leak History",
  "Material Condition",
  "Storm Impact",
  "Decking Condition",
  "Long-Term Cost",
];

export default function RepairOrReplace() {
  return (
    <section id="repair-replace" className="py-24 md:py-32 bg-brand-softGray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] w-full bg-brand-charcoal overflow-hidden rounded-[10px] order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1518063223069-70dc4e1074e0?auto=format&fit=crop&q=80&w=1000"
            alt="Roof assessment"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1] mb-6">
            REPAIR OR REPLACE?
          </h2>
          <p className="font-sans text-brand-charcoal/80 text-lg mb-8">
            Some roofs can be repaired, while others require replacement. Our honest inspections evaluate key
            factors to give you the truth about your roof&rsquo;s condition.
          </p>
          <ul className="space-y-4 font-heading font-bold text-sm tracking-widest uppercase mb-12">
            {factors.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-brand-aqua" />
                {item}
              </li>
            ))}
          </ul>
          {/* Learn About Roof Repair / Learn About Replacement links — moved to docs/revisit.md */}
          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            Schedule An Inspection Or Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
