export default function Commercial() {
  return (
    <section id="commercial" className="bg-brand-charcoal py-24 md:py-32 text-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading font-black text-[32px] md:text-[52px] leading-[1.1] mb-8">
            COMMERCIAL ROOFING
            <br />
            WITHOUT THE GUESSWORK.
          </h2>
          <p className="font-heading font-bold text-brand-aqua text-sm tracking-widest uppercase mb-8">
            Property Owners &bull; Facility Managers &bull; Business Owners &bull; Commercial Property Managers
          </p>
          <p className="font-sans text-brand-white/80 text-lg mb-12 max-w-xl">
            Protecting your commercial asset requires specialized expertise. We provide dependable inspection,
            repair, and replacement services for low-slope and commercial systems.
          </p>
          <a
            href="/services/commercial-roofing"
            className="inline-flex justify-center items-center bg-brand-white text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua transition-colors duration-300"
          >
            Explore Commercial Roofing
          </a>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full">
          <img
            src="https://images.unsplash.com/photo-1541888000431-155e8eb94f54?auto=format&fit=crop&q=80&w=1000"
            alt="Commercial Roofing"
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
