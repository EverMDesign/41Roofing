export default function StatementBanner() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full bg-brand-black flex items-center justify-center overflow-hidden">
      <img
        src="/41-roofing-restore-thepast.webp"
        alt="41 Roofing restore the past"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-brand-black/40" />
      <div className="relative z-10 text-center px-6">
        <h2 className="font-heading font-black text-brand-white text-[42px] md:text-[80px] lg:text-[120px] leading-[0.9] tracking-tighter">
          RESTORE THE PAST.
          <br />
          BUILD THE FUTURE.
        </h2>
      </div>
    </section>
  );
}
