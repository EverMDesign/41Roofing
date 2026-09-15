const checklist = [
  "Ensure gate access is unlocked if your roof has a rear-facing slope.",
  "Move vehicles out of the driveway to allow our technician to park close for ladder access.",
  "Secure any pets that may be sensitive to sounds on the roof during the walk-around.",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PrepareForInspection() {
  return (
    <section className="py-24 md:py-32 bg-brand-lightAqua">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <img
              src="/inspection-preparation.webp"
              alt="Homeowner preparing property for a roof inspection"
              className="w-full aspect-video object-cover grayscale"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="eyebrow mb-4">While you wait</p>
            <h2 className="font-heading font-black text-3xl md:text-4xl mb-8">
              HOW TO PREPARE FOR YOUR INSPECTION.
            </h2>
            <ul className="space-y-6">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="text-brand-aqua mt-1">
                    <CheckIcon />
                  </span>
                  <p className="text-brand-charcoal/70">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
