import ArrowIcon from "@/components/icons/ArrowIcon";

const materials = [
  "ARCHITECTURAL SHINGLES",
  "IMPACT-RESISTANT OPTIONS",
  "METAL ROOFING",
  "COMMERCIAL SYSTEMS",
];

export default function Materials() {
  return (
    <section id="materials" className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Materials &amp; Roofing Systems</p>
            <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-brand-black leading-[1.1]">
              CHOOSE A ROOF BUILT FOR YOUR HOME AND YOUR PROPERTY.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex justify-center items-center border-2 border-brand-black text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-black hover:text-brand-white transition-colors duration-300"
          >
            Explore Roofing Materials
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {materials.map((mat) => (
            <a
              key={mat}
              href="#contact"
              className="bg-brand-white p-8 border border-brand-border h-[300px] flex flex-col justify-between group hover:border-brand-black transition-colors"
            >
              <h3 className="font-heading font-bold text-xl text-brand-black">{mat}</h3>
              <div className="flex justify-between items-center text-brand-aqua opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-heading font-bold text-xs tracking-widest text-brand-black uppercase">
                  View Options
                </span>
                <ArrowIcon className="w-5 h-5 text-brand-black" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
