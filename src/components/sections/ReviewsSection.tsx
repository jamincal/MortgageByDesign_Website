import YelpBusinessEmbed from "@/components/YelpBusinessEmbed";

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Client Reviews
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold">
            What clients are saying
          </h2>
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
