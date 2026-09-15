const reasons = [
  {
    title: "LOCAL TEXAS ROOTS",
    desc: "We aren't out-of-town storm chasers. We are based in Crowley and invested in our community.",
  },
  {
    title: "WOMAN-OWNED",
    desc: "Led by Brandi Burk, bringing a distinct standard of care and communication to the industry.",
  },
  {
    title: "HONEST INSPECTIONS",
    desc: "We tell you exactly what you need, and more importantly, what you don't need.",
  },
  {
    title: "MULTI-SERVICE EXPERTISE",
    desc: "Equipped to handle everything from minor roof repairs to full property restoration.",
  },
  {
    title: "DEPENDABLE RESULTS",
    desc: "High-quality materials installed correctly, ensuring your roof performs when it matters.",
  },
  {
    title: "CLEAR COMMUNICATION",
    desc: "You will never have to guess where your project stands or who to call with a question.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-brand-softGray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="eyebrow mb-4">Why Choose 41 Roofing?</p>
          <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1]">
            THE STANDARD BEHIND EVERY PROJECT.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div key={item.title} className="p-10 bg-brand-white border border-brand-border rounded-[10px] hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <h3 className="font-heading font-black text-xl mb-4">{item.title}</h3>
              <p className="font-sans text-brand-charcoal/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
