import ArrowIcon from "@/components/icons/ArrowIcon";
import StarRating from "@/components/icons/StarRating";

const reviews = [
  {
    quote:
      "Brandi and her team were incredibly honest during the inspection. Another company told us we needed a full replacement after a storm, but 41 Roofing showed us it was just minor repair work. The communication was excellent from start to finish.",
    name: "Sarah M.",
    location: "Crowley, TX",
    service: "Roof Repair",
  },
  {
    quote:
      "The crew was professional, fast, and the cleanup was spotless. They replaced our entire roof in one day. Brandi clearly runs a tight ship, and it shows in the quality of the work and the respect they show your property.",
    name: "David T.",
    location: "Burleson, TX",
    service: "Roof Replacement",
  },
  {
    quote:
      "A rare find in the roofing industry. They actually did exactly what they said they would do, when they said they would do it. Dealing with storm damage is stressful, but 41 Roofing made the restoration process straightforward.",
    name: "Robert K.",
    location: "Arlington, TX",
    service: "Storm Damage",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-softGray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">North Texas Homeowners</p>
            <h2 className="font-heading font-black text-[32px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1]">
              BUILT ON TRUST.
              <br />
              PROVEN BY THE PEOPLE WE SERVE.
            </h2>
          </div>
          <a
            href="#reviews"
            className="relative inline-flex items-center gap-3 font-heading font-bold text-sm tracking-widest text-brand-black uppercase group"
          >
            Read More Reviews
            <ArrowIcon className="w-4 h-4" />
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black group-hover:w-full transition-all duration-300 ease-in-out" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-brand-white p-10 lg:p-12 border border-brand-border rounded-[10px] flex flex-col justify-between h-full relative"
            >
              <div className="text-[80px] font-heading font-black text-brand-aqua/20 absolute top-4 left-6 leading-none">
                &ldquo;
              </div>
              <div className="relative z-10 mb-12">
                <StarRating />
                <p className="font-sans text-brand-charcoal text-base leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div className="mt-auto border-t border-brand-border pt-6">
                <p className="font-heading font-bold text-sm uppercase tracking-wide">{review.name}</p>
                <p className="text-brand-muted text-xs uppercase tracking-widest mt-1">
                  {review.location} &bull; {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
