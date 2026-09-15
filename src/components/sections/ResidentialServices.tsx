import ArrowIcon from "@/components/icons/ArrowIcon";

const leftColumn = [
  "Roof Inspections",
  "Roof Repair",
  "Roof Replacement",
  "Storm Damage Inspection",
  "Hail Damage",
];

const rightColumn = [
  "Emergency Tarping",
  "Skylights",
  "Flashing Repairs",
  "Decking / Structural Repair",
  "Gutters",
];

export default function ResidentialServices() {
  return (
    <section id="residential" className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <p className="eyebrow mb-4">Residential Roofing</p>
          <h2 className="font-heading font-bold text-[32px] md:text-[64px] text-brand-black leading-[1.1] max-w-4xl">
            COMPLETE ROOFING SERVICES FOR NORTH TEXAS HOMES.
          </h2>
          <p className="mt-8 text-brand-charcoal/80 max-w-2xl text-lg font-sans">
            Texas heat, severe wind, large hail, and heavy rain put incredible stress on aging roofing systems. We
            build roofs designed to withstand the unique demands of our local climate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32">
          <div>
            {leftColumn.map((s) => (
              <a
                key={s}
                href="#contact"
                className="group block py-8 divider-light flex justify-between items-center hover:bg-brand-softGray transition-colors px-4 -mx-4"
              >
                <span className="font-heading font-bold text-xl md:text-2xl text-brand-black tracking-wide">
                  {s}
                </span>
                <ArrowIcon className="w-6 h-6 text-brand-black" />
              </a>
            ))}
          </div>
          <div>
            {rightColumn.map((s) => (
              <a
                key={s}
                href="#contact"
                className="group block py-8 divider-light flex justify-between items-center hover:bg-brand-softGray transition-colors px-4 -mx-4"
              >
                <span className="font-heading font-bold text-xl md:text-2xl text-brand-black tracking-wide">
                  {s}
                </span>
                <ArrowIcon className="w-6 h-6 text-brand-black" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
