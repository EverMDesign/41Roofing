// TODO: Re-enable after A2P approval
// import QuoteForm from "@/components/QuoteForm";
// import ModalCTA from "@/components/ModalCTA";
import { fetchGoogleReviews } from "@/lib/google-reviews";

function YellowStars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < Math.round(rating) ? "text-yellow-400" : "text-white/20"} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default async function Hero() {
  const data = await fetchGoogleReviews();
  const googleUrl = `https://www.google.com/maps/place/?q=place_id:${process.env.GOOGLE_PLACE_ID || ""}`;

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
          <div className="lg:col-span-12">
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
              {/* TODO: Re-enable ModalCTA after A2P approval */}
              {/* <ModalCTA className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300">
                Get A Free Roof Inspection
              </ModalCTA> */}
              <a
                href="tel:817-266-9433"
                className="inline-flex justify-center items-center border border-brand-border text-brand-white px-10 py-5 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors duration-300"
              >
                Call / Text 817-266-9433
              </a>
            </div>
          </div>

          {/* TODO: Re-enable QuoteForm after A2P approval */}
          {/* <div className="hero-animate hero-animate-right lg:col-span-5" style={{ animationDuration: "1000ms", animationDelay: "500ms" }}>
            <div className="hero-form-glow">
              <QuoteForm variant="hero" formType="hero-quote" />
            </div>
          </div> */}
        </div>

        {/* Trust Bar */}
        <div className="hero-animate hero-animate-up w-full border-t border-white/20 pt-6 mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm font-heading font-bold text-brand-white/60 tracking-widest uppercase" style={{ animationDuration: "900ms", animationDelay: "900ms" }}>
          {data && data.totalReviews > 0 && (
            <>
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-white hover:text-brand-aqua transition-colors"
              >
                <span>{data.rating.toFixed(1)}</span>
                <YellowStars rating={data.rating} />
                <span>({data.totalReviews} Reviews)</span>
              </a>
              <span className="hidden md:inline">&bull;</span>
            </>
          )}
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
