
interface ServiceItem {
  title: string;
  desc: string;
  href: string;
}

const roofingServices: ServiceItem[] = [
  { title: "Roof Repair", desc: "Targeted fixes for active leaks and damage.", href: "/services/roof-repair" },
  { title: "Roof Replacement", desc: "Complete tear-offs and new system installations.", href: "/services/roof-replacement" },
  { title: "Commercial Roofing", desc: "Low-slope and flat roof solutions for businesses.", href: "/services/commercial-roofing" },
  { title: "Emergency Tarping", desc: "Immediate protection to prevent further damage.", href: "/services/emergency-tarping" },
];

const restorationServices: ServiceItem[] = [
  { title: "Gutters", desc: "Seamless gutter installation and replacement.", href: "/services/gutters" },
  { title: "Exterior Repairs", desc: "Siding, fascia, soffit, and trim restoration.", href: "/services/exterior-repairs" },
  { title: "Interior & Exterior Restoration", desc: "Full property restoration after storm or water damage.", href: "/services/interior-exterior-restoration" },
  { title: "Interior & Exterior Painting", desc: "Professional prep, prime, and finish for any surface.", href: "/services/interior-exterior-painting" },
];

function ServiceList({ items }: { items: ServiceItem[] }) {
  return (
    <div className="border-t border-brand-border">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex items-center justify-between gap-4 py-5 px-4 -mx-4 border-b border-brand-border hover:bg-brand-softGray transition-colors duration-200"
        >
          <div className="min-w-0">
            <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-brand-black">
              {item.title}
            </h3>
            <p className="text-sm text-brand-muted font-sans mt-1">{item.desc}</p>
          </div>
          <svg
            className="shrink-0 w-6 h-6 text-brand-black transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-white relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="eyebrow mb-4">How can we help?</p>
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1] max-w-3xl">
            Start with what your property needs.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Roofing */}
          <div>
            <a href="/services/roofing" className="block mb-6">
              <h3 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight underline underline-offset-4 decoration-1">
                Roofing
              </h3>
              <p className="text-sm text-brand-muted font-sans mt-1">Residential and Commercial</p>
            </a>
            <ServiceList items={roofingServices} />
          </div>

          {/* Restoration & Remodeling */}
          <div>
            <a href="/services/restoration" className="block mb-6">
              <h3 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight underline underline-offset-4 decoration-1">
                Restoration &amp; Remodeling
              </h3>
              <p className="text-sm text-brand-muted font-sans mt-1">Residential and Commercial</p>
            </a>
            <ServiceList items={restorationServices} />
          </div>
        </div>
      </div>
    </section>
  );
}
