import { Star } from "lucide-react";
import reviews from "@/data/experienceReviews.json";

export type ExperienceReview = {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
};

export const experienceReviews = reviews as ExperienceReview[];

// Only 5-star reviews, newest first — this is what we publish on the site.
export const fiveStarReviews = experienceReviews
  .filter((r) => r.rating >= 5)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const EXPERIENCE_PROFILE_URL = "https://www.experience.com/reviews/erika-robinson-mortgage";

export const formatReviewDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "America/Phoenix" });

export const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => {
      const fill = Math.max(0, Math.min(1, rating - (i - 1)));
      return (
        <span key={i} className="relative inline-block h-4 w-4">
          <Star className="absolute h-4 w-4 text-gold/30" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
            <Star className="h-4 w-4 fill-gold text-gold" />
          </span>
        </span>
      );
    })}
    <span className="ml-2 text-sm font-body text-muted-foreground">{rating.toFixed(1)}</span>
  </div>
);

export const ExperienceReviewCard = ({ review }: { review: ExperienceReview }) => (
  <article className="h-full flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm">
    <StarRating rating={review.rating} />
    <p className="mt-4 flex-1 font-body text-foreground/90 leading-relaxed whitespace-pre-line">{review.text}</p>
    <div className="mt-5 pt-4 border-t border-border">
      <p className="font-heading text-lg font-semibold text-foreground">{review.author}</p>
      <p className="font-body text-xs text-muted-foreground">
        {review.location && <>{review.location} · </>}
        {formatReviewDate(review.date)} · Experience.com
      </p>
    </div>
  </article>
);
