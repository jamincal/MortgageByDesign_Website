import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { experienceReviews, ExperienceReviewCard, EXPERIENCE_PROFILE_URL } from "@/components/ExperienceReviews";

const FILTERS = [
  { key: "all", label: "All ratings" },
  { key: "5", label: "5 stars" },
  { key: "4", label: "4 – 4.9 stars" },
];

export const filterAndSort = (key: string, sort: "newest" | "oldest") =>
  experienceReviews
    .filter((r) => (key === "all" ? true : key === "5" ? r.rating >= 5 : r.rating >= 4 && r.rating < 5))
    .sort((a, b) => (sort === "newest" ? 1 : -1) * (new Date(b.date).getTime() - new Date(a.date).getTime()));

const Reviews = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const list = useMemo(() => filterAndSort(filter, sort), [filter, sort]);
  const avg = (experienceReviews.reduce((s, r) => s + r.rating, 0) / experienceReviews.length).toFixed(2);

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
            {experienceReviews.length} reviews · {avg} average rating ·{" "}
            <a href={EXPERIENCE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
              View on Experience.com
            </a>
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full font-body text-sm border transition ${
                  filter === f.key ? "bg-accent text-accent-foreground border-accent" : "border-border text-foreground hover:border-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="font-body text-sm text-muted-foreground flex items-center gap-2">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
              className="rounded-md border border-border bg-card px-3 py-2 text-foreground"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>

        <p className="font-body text-sm text-muted-foreground mb-4">Showing {list.length} reviews</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <ExperienceReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Reviews;
