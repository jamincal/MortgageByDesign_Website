import YelpBusinessEmbed from "@/components/YelpBusinessEmbed";

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold">
            Client Reviews
          </h2>
          <p className="font-heading italic text-xl md:text-2xl text-muted-foreground mt-3">
            What clients are saying
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <YelpBusinessEmbed
            businessName="Mortgage By Design"
            businessUrl="https://www.yelp.com/biz/mortgage-by-design-phoenix"
            address="Phoenix, AZ"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
