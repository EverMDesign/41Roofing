import HeroQuoteForm from "@/components/HeroQuoteForm";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-brand-black overflow-hidden flex items-end pt-24 pb-12 md:pb-24">
      <div className="absolute inset-0 z-0">
        <img
          src="/41-roofing-and-restoration-roof-replacement.webp"
          alt="41 Roofing and Restoration roof replacement"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Left — Copy */}
          <div className="lg:col-span-7">
            <p className="hero-animate hero-animate-up font-heading font-bold text-brand-aqua tracking-[0.2em] text-xs md:text-sm mb-6 uppercase" style={{ animationDuration: "800ms", animationDelay: "100ms" }}>
              Crowley, Texas &bull; Serving North Texas
            </p>
            <h1 className="hero-animate hero-animate-up font-heading font-black text-brand-white text-[36px] md:text-[64px] lg:text-[72px] leading-[0.95] mb-6" style={{ animationDuration: "900ms", animationDelay: "200ms" }}>
              Roofing &amp; Restoration
              <br />
              In Crowley, TX
            </h1>
            <h2 className="hero-animate hero-animate-up font-heading font-bold text-brand-white text-xl md:text-3xl mb-6 tracking-wide" style={{ animationDuration: "900ms", animationDelay: "550ms" }}>
              Restore The Past.
              <br />
              Build The Future.
            </h2>
            <p className="hero-animate hero-animate-up text-brand-white/80 text-base md:text-lg max-w-xl font-sans font-normal leading-relaxed mb-8" style={{ animationDuration: "900ms", animationDelay: "550ms" }}>
              41 Roofing &amp; Restoration provides roof inspections, repairs, replacements, storm restoration,
              commercial roofing and property restoration throughout Crowley and North Texas.
            </p>
            <div className="hero-animate hero-animate-up flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0" style={{ animationDuration: "900ms", animationDelay: "550ms" }}>
              <a
                href="#contact"
                className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
              >
                Get A Free Roof Inspection
              </a>
              <a
                href="tel:817-266-9433"
                className="inline-flex justify-center items-center border border-brand-border text-brand-white px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors duration-300"
              >
                Call / Text 817-266-9433
              </a>
            </div>
          </div>

          {/* Right — Quote Form */}
          <div className="hero-animate hero-animate-right lg:col-span-5" style={{ animationDuration: "1000ms", animationDelay: "500ms" }}>
            <div className="hero-form-glow">
              <HeroQuoteForm />
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="hero-animate hero-animate-up w-full border-t border-white/20 pt-6 mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm font-heading font-bold text-brand-white/60 tracking-widest uppercase" style={{ animationDuration: "900ms", animationDelay: "900ms" }}>
          <span>Locally Owned</span>
          <span className="hidden md:inline">&bull;</span>
          <span>Woman-Owned</span>
          <span className="hidden md:inline">&bull;</span>
          <span>Free Inspections</span>
          <span className="hidden md:inline">&bull;</span>
          <span>Residential &amp; Commercial</span>
        </div>
      </div>
    </section>
  );
}
