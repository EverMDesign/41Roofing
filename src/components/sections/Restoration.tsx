const services = [
  { label: "Gutters", href: "/services/gutters" },
  { label: "Exterior Repairs", href: "/services/exterior-repairs" },
  { label: "Interior & Exterior Restoration", href: "/services/interior-exterior-restoration" },
  { label: "Interior & Exterior Painting", href: "/services/interior-exterior-painting" },
];

export default function Restoration() {
  return (
    <section id="restoration" className="py-24 md:py-32 bg-brand-charcoal text-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-brand-white/50 mb-4">Restoration &amp; Remodeling</p>
          <h2 className="font-heading font-bold text-[32px] md:text-[52px] leading-[1.1]">
            WHEN YOUR PROJECT GOES BEYOND THE ROOF.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 border-t border-white/20 pt-16">
          {services.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-heading font-bold text-xl md:text-2xl hover:text-brand-aqua transition-colors cursor-pointer text-left"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
