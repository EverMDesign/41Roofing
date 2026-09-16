import ArrowIcon from "@/components/icons/ArrowIcon";
import ReviewCard, { type Review } from "@/components/ReviewCard";
import { fetchGoogleReviews } from "@/lib/google-reviews";

const fallbackReviews: Review[] = [
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

export default async function Reviews() {
  const data = await fetchGoogleReviews();

  const reviews: Review[] = data
    ? data.reviews
        .filter((r) => r.rating >= 4)
        .sort((a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime())
        .slice(0, 3)
        .map((r) => ({
          quote: r.text.text,
          name: r.authorAttribution.displayName,
          location: r.relativePublishTimeDescription,
          service: "",
          source: "Google",
          rating: r.rating,
        }))
    : fallbackReviews;

  const showBadge = data && data.totalReviews > 0;

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
            {showBadge && (
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${process.env.GOOGLE_PLACE_ID || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-brand-muted font-heading text-sm uppercase tracking-widest hover:text-brand-black transition-colors"
              >
                <span>{data.rating.toFixed(1)}</span>
                <span className="inline-flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(data.rating) ? "text-yellow-400" : "text-brand-border"} fill-current`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <span>from {data.totalReviews} Google reviews</span>
              </a>
            )}
          </div>
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${process.env.GOOGLE_PLACE_ID || ""}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 font-heading font-bold text-sm tracking-widest text-brand-black uppercase group"
          >
            Read More Reviews
            <ArrowIcon className="w-4 h-4" />
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black group-hover:w-full transition-all duration-300 ease-in-out" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
