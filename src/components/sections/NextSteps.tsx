const steps = [
  {
    number: "01",
    title: "Verification Call",
    description: (
      <>
        A member of the 41 Roofing team will call or text you within{" "}
        <span className="font-bold text-brand-charcoal">2 business hours</span>{" "}
        to confirm your address and preferred inspection window.
      </>
    ),
  },
  {
    number: "02",
    title: "On-Site Inspection",
    description:
      "We perform a thorough, drone-assisted and physical walk-around of your property. You don\u2019t necessarily need to be home, but we recommend it if you have specific interior leak concerns.",
  },
  {
    number: "03",
    title: "Digital Photo Report",
    description:
      "Immediately following the inspection, we\u2019ll provide a digital report documenting all findings\u2014honest results, with no sales pressure.",
  },
];

export default function NextSteps() {
  return (
    <section className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Steps */}
          <div className="lg:col-span-7">
            <h2 className="font-heading font-black text-2xl md:text-3xl mb-12 flex items-center gap-4">
              WHAT HAPPENS NEXT
              <span className="flex-1 h-px bg-brand-border" />
            </h2>

            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 md:gap-8 group">
                  <div className="w-12 h-12 shrink-0 border border-brand-border flex items-center justify-center font-heading font-black text-xl group-hover:bg-brand-aqua transition-colors">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl mb-3">
                      {step.title.toUpperCase()}
                    </h3>
                    <p className="text-brand-charcoal/70 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar — Project Tool */}
          <div className="lg:col-span-5">
            <div className="bg-brand-softGray p-8 md:p-10 border border-brand-border">
              <p className="font-heading font-black text-sm tracking-widest text-brand-muted mb-6">
                PROJECT TOOL
              </p>
              <h3 className="font-heading font-black text-xl md:text-2xl mb-6">
                BLOCK OUT TIME FOR YOUR ROOF.
              </h3>
              <p className="text-brand-charcoal/70 text-sm mb-8 leading-relaxed">
                Most inspections take about 30&ndash;45 minutes. Add a reminder
                to your calendar for tomorrow as a placeholder&mdash;we&rsquo;ll
                confirm the exact time shortly.
              </p>

              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full bg-brand-black text-brand-white py-5 font-heading font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-brand-aqua hover:text-brand-black transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Add to Google Calendar
                </button>
                <button
                  type="button"
                  className="w-full border border-brand-black text-brand-charcoal py-5 font-heading font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-brand-black hover:text-brand-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download .ICS Event
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-border">
                <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-4">
                  Immediate Assistance
                </p>
                <p className="text-sm font-medium mb-1">
                  Need emergency tarping right now?
                </p>
                <a
                  href="tel:817-266-9433"
                  className="text-xl font-heading font-black text-brand-charcoal hover:text-brand-aqua transition-colors uppercase"
                >
                  817-266-9433
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
