const steps = [
  { num: "01", title: "INSPECT", desc: "A comprehensive, honest evaluation of your property's exterior." },
  { num: "02", title: "DOCUMENT", desc: "Thorough photographic documentation of current conditions." },
  { num: "03", title: "EXPLAIN", desc: "A clear, no-pressure conversation about what we found and what it means." },
  { num: "04", title: "PLAN", desc: "Developing a precise scope of work and timeline for your approval." },
  { num: "05", title: "BUILD", desc: "Professional installation using premium materials and proven techniques." },
  { num: "06", title: "FINAL WALKTHROUGH", desc: "Ensuring every detail meets our standard and your satisfaction." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-brand-softGray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="md:w-1/3">
          <p className="eyebrow mb-4">Our Process</p>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-brand-black leading-[1.1] sticky top-32">
            STRAIGHTFORWARD
            <br />
            FROM INSPECTION TO COMPLETION.
          </h2>
        </div>
        <div className="md:w-2/3 flex flex-col gap-12">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-8 group">
              <div className="font-heading font-black text-brand-border text-5xl md:text-6xl group-hover:text-brand-black transition-colors">
                {step.num}
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-2">{step.title}</h3>
                <p className="font-sans text-brand-charcoal/80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
