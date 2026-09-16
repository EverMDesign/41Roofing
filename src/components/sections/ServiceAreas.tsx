import ArrowIcon from "@/components/icons/ArrowIcon";

const cities = [
  { name: "CROWLEY", href: "/areas/crowley" },
  { name: "BURLESON", href: "/areas/burleson" },
  { name: "ARLINGTON", href: "/areas/arlington" },
  { name: "JOSHUA", href: "/areas/joshua" },
  { name: "CLEBURNE", href: "/areas/cleburne" },
  { name: "KELLER", href: "/areas/keller" },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 md:py-32 bg-brand-softGray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Local Roofing</p>
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1]">
            PROUDLY SERVING NORTH TEXAS.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-16 max-w-4xl mx-auto text-center">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.href}
              className="font-heading font-black text-2xl md:text-4xl text-brand-black hover:text-brand-aqua transition-colors"
            >
              {city.name}
            </a>
          ))}
        </div>
        {/* <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm tracking-widest text-brand-black hover:text-brand-aqua transition-colors uppercase group"
          >
            View All Service Areas
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
