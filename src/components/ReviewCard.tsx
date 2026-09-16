import StarRating from "@/components/icons/StarRating";

export interface Review {
  quote: string;
  name: string;
  location: string;
  service: string;
  source?: string;
  rating?: number;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-brand-white p-10 lg:p-12 border border-brand-border rounded-[10px] flex flex-col justify-between h-full relative">
      <div className="text-[80px] font-heading font-black text-brand-aqua/20 absolute top-4 left-6 leading-none">
        &ldquo;
      </div>
      <div className="relative z-10 mb-12">
        <StarRating />
        <p className="font-sans text-brand-charcoal text-base leading-relaxed">
          &ldquo;{review.quote.length > 200 ? review.quote.slice(0, 200).trimEnd() + "..." : review.quote}&rdquo;
        </p>
      </div>
      <div className="mt-auto border-t border-brand-border pt-6 flex items-center justify-between">
        <div>
          <p className="font-heading font-bold text-sm uppercase tracking-wide">
            {review.name}
          </p>
          <p className="text-brand-muted text-xs uppercase tracking-widest mt-1">
            {review.location}
            {review.service && <> &bull; {review.service}</>}
          </p>
        </div>
        {review.source && (
          <span className="text-xs font-bold text-brand-muted bg-brand-softGray px-2 py-1 uppercase">
            {review.source}
          </span>
        )}
      </div>
    </div>
  );
}
