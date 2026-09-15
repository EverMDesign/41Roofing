import ModalCTA from "@/components/ModalCTA";

const problems = [
  "Roof Leak",
  "Missing Shingles",
  "Hail Damage",
  "Wind Damage",
  "Aging Roof",
  "Water Stains",
  "Damaged Flashing",
  "Skylight Leak",
  "Sagging / Soft Decking",
  "Recent Storm",
];

export default function Diagnosis() {
  return (
    <section id="problems" className="py-24 md:py-32 bg-brand-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-white leading-[1.1] mb-6">
            NOT SURE WHAT YOUR ROOF NEEDS?
          </h2>
          <p className="text-brand-white/70 text-lg md:text-xl font-sans mb-12 border-l-2 border-brand-aqua pl-6">
            A roof problem does not automatically mean you need a new roof. Start with an honest inspection.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            {problems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 py-4 divider-dark"
              >
                <div className="w-1.5 h-1.5 bg-brand-aqua shrink-0" />
                <span className="font-heading font-semibold text-brand-white/90 tracking-wide text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div>
            <ModalCTA className="inline-flex bg-brand-white text-brand-black px-8 py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest hover:bg-brand-aqua transition-colors duration-300">
              Schedule An Inspection
            </ModalCTA>
          </div>
        </div>
        <div className="hidden lg:block h-[600px] w-full relative overflow-hidden rounded-[10px] bg-brand-black">
          <img
            src="/41-roofing-and-restoration-roof-replacement.webp"
            alt="41 Roofing and Restoration roof replacement"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 border border-white/10 rounded-[10px] m-4 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
