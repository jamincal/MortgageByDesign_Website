import { Star, ExternalLink, MapPin } from "lucide-react";

interface YelpBusinessEmbedProps {
  businessName?: string;
  rating?: number;
  reviewCount?: number;
  businessUrl?: string;
  address?: string;
  reviews?: { author: string; text: string; rating: number }[];
}

const YelpBusinessEmbed = ({
  businessName = "Mortgage By Design",
  rating = 5.0,
  reviewCount = 0,
  businessUrl = "https://www.yelp.com/biz/mortgage-by-design-phoenix",
  address = "Phoenix, AZ",
  reviews = [
    {
      author: "Placeholder Review",
      text: "Real Yelp reviews will appear here once the Yelp Fusion API key is connected.",
      rating: 5,
    },
    {
      author: "Placeholder Review",
      text: "This card mirrors the live data layout — author name, star rating, and review excerpt.",
      rating: 5,
    },
  ],
}: YelpBusinessEmbedProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-card rounded-sm shadow-elegant overflow-hidden">
      {/* Yelp Header */}
      <div className="bg-card px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm bg-[#d32323] flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
            Y
          </div>
          <span className="text-foreground font-body font-medium">Yelp Business Profile</span>
        </div>
        <span className="text-xs font-body uppercase tracking-wider text-muted-foreground">
          Verified
        </span>
      </div>

      {/* Business Info */}
      <div className="p-6">
        <h3 className="font-heading text-2xl text-foreground font-semibold mb-2">
          {businessName}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-foreground font-body font-semibold">{rating.toFixed(1)}</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < fullStars
                    ? "text-[#d32323] fill-[#d32323]"
                    : i === fullStars && hasHalfStar
                    ? "text-[#d32323] fill-[#d32323]/50"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground font-body text-sm">
            {reviewCount > 0 ? `(${reviewCount} reviews)` : "(reviews loading)"}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" />
          <span className="font-body text-sm">{address}</span>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">
            Recent Reviews
          </p>

          {reviews.map((review, index) => (
            <div key={index} className="bg-muted/40 rounded-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-body font-semibold text-sm">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium text-foreground">{review.author}</span>
                <div className="flex items-center gap-0.5 ml-auto">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#d32323] fill-[#d32323]" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border">
        <a
          href={businessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#d32323] hover:text-[#a51b1b] font-body font-medium transition-colors"
        >
          Read all reviews on Yelp
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default YelpBusinessEmbed;
