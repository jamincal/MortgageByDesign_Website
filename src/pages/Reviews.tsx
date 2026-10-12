import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fiveStarReviews, ExperienceReviewCard, EXPERIENCE_PROFILE_URL } from "@/components/ExperienceReviews";

const Reviews = () => {
  useEffect(() => {
    document.title = "Client Reviews | Erika Robinson, Mortgage By Design";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link to="/#testimonials" className="font-body text-sm text-accent hover:underline">← Back to home</Link>
        <header className="text-center mt-6 mb-12">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">Testimonials</p>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground font-semibold">All Client Reviews</h1>
          <p className="font-body text-muted-foreground mt-4">
            {fiveStarReviews.length} five-star reviews ·{" "}
            <a href={EXPERIENCE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
              View on Experience.com
            </a>
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fiveStarReviews.map((r) => (
            <ExperienceReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Reviews;
