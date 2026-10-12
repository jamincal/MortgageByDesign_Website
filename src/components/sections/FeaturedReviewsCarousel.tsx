import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { fiveStarReviews, ExperienceReviewCard, EXPERIENCE_PROFILE_URL } from "@/components/ExperienceReviews";

const featured = fiveStarReviews.slice(0, 6);

const FeaturedReviewsCarousel = () => (
  <div className="mt-20 max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Verified on Experience.com</p>
      <h3 className="font-heading text-3xl md:text-4xl text-foreground font-semibold">Featured Client Reviews</h3>
    </div>
    <Carousel opts={{ align: "start", loop: true }} className="px-2 md:px-12">
      <CarouselContent>
        {featured.map((r) => (
          <CarouselItem key={r.id} className="basis-full md:basis-1/2 lg:basis-1/3">
            <ExperienceReviewCard review={r} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
    <p className="md:hidden text-center text-xs text-muted-foreground mt-3 font-body">Swipe to see more</p>
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        to="/reviews"
        className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-body font-medium hover:opacity-90 transition"
      >
        View All Client Reviews
      </Link>
      <a href={EXPERIENCE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent underline underline-offset-4">
        See my Experience.com profile
      </a>
    </div>
  </div>
);

export default FeaturedReviewsCarousel;
