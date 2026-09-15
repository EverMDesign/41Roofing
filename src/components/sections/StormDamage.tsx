const processSteps = [
  { num: "01", title: "INSPECT", desc: "Comprehensive evaluation of your entire roofing system." },
  { num: "02", title: "DOCUMENT", desc: "Photographic evidence of all visible damage." },
  { num: "03", title: "EXPLAIN", desc: "Clear review of findings without pressure." },
  { num: "04", title: "PLAN", desc: "Detailed scope of work and timeline for your approval." },
  { num: "05", title: "REPAIR / REPLACE", desc: "Professional execution of the approved scope." },
  { num: "06", title: "FINAL WALKTHROUGH", desc: "Ensuring every detail meets our standard and your satisfaction." },
];

export default function StormDamage() {
  return (
    <section id="storm" className="relative bg-brand-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601004652238-d65fa3462947?auto=format&fit=crop&q=80&w=2000"
          alt="Storm Damage"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Storm Damage — Top */}
        <div className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-brand-aqua mb-4">North Texas Storms</p>
            <h2 className="font-heading font-black text-brand-white text-[32px] md:text-[60px] md:leading-[66px] leading-[1.1] mb-8">
              WHEN TEXAS WEATHER HITS,
              <br />
              KNOW WHAT TO DO NEXT.
            </h2>
            <p className="font-sans text-brand-white/80 text-lg md:text-xl max-w-xl mb-10">
              Hail, high winds, and heavy rain can compromise a roof instantly. Missing shingles, roof leaks, and
              hidden impact damage require immediate professional evaluation to prevent further structural
              deterioration.
            </p>
            <a
              href="#contact"
              className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
            >
              Book Your Free Inspection
            </a>
          </div>
          <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-[10px]">
            <video
              src="/41-roofing-inspecting-roofing.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 border border-white/10 rounded-[10px] pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-brand-aqua text-brand-black px-4 py-2 rounded-[10px] font-heading font-bold text-xs md:text-sm tracking-widest uppercase">
              Free Inspections, Honest Answers.
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Our Process — Bottom */}
        <div className="py-24 md:py-32">
          <p className="eyebrow text-brand-aqua mb-4">Our Process</p>
          <h3 className="font-heading font-black text-brand-white text-[28px] md:text-[48px] leading-[1.1] mb-16">
            FROM BEGINNING TO END.
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {processSteps.map((step) => (
              <div key={step.num}>
                <span className="block font-heading font-bold text-brand-aqua text-3xl md:text-4xl mb-4">
                  {step.num}
                </span>
                <h4 className="font-heading font-bold text-brand-white text-base md:text-lg mb-2">
                  {step.title}
                </h4>
                <p className="font-sans text-brand-white/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-brand-charcoal/50 border border-white/10 rounded-[10px] p-6 md:p-8 max-w-4xl mb-12 border-l-4 border-l-brand-aqua">
            <p className="font-sans text-brand-white text-base md:text-lg italic">
              &ldquo;We document visible damage, explain our findings and provide a clear construction scope.&rdquo;
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            Request A Storm Inspection
          </a>
        </div>
      </div>
    </section>
  );
}
