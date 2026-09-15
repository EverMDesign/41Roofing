export default function HonestInspections() {
  return (
    <section id="inspection" className="bg-brand-lightAqua py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 relative">
          <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&q=80&w=1200"
              alt="Honest Roof Inspection"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 bg-brand-aqua border border-brand-charcoal/10 -z-10" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex flex-col justify-center">
          <h3 className="font-heading font-black text-brand-charcoal text-[28px] md:text-[42px] leading-tight mb-8">
            HONEST INSPECTIONS.
            <br />
            DEPENDABLE RESULTS.
          </h3>
          <h2 className="font-heading font-bold text-brand-charcoal text-xl md:text-2xl mb-8 tracking-wide">
            WE DIAGNOSE BEFORE WE SELL.
          </h2>
          <div className="pl-6 border-l-2 border-brand-black mb-10">
            <p className="font-heading font-bold text-brand-black text-lg md:text-xl italic uppercase tracking-wide">
              &ldquo;We never sell you what you don&rsquo;t need.&rdquo;
            </p>
          </div>
          <div className="font-sans text-brand-charcoal/80 text-base md:text-lg space-y-6">
            <p>
              At 41 Roofing, we believe that a strong reputation is built on telling the truth. Before we ever
              discuss a contract or a replacement, we perform a thorough, honest assessment of your roofing system.
            </p>
            <p>
              We provide clear documentation and truthful recommendations. If a simple repair will extend the life
              of your roof, that is exactly what we will recommend. If storm damage warrants a full replacement, we
              explain our findings clearly so you can make an informed decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
