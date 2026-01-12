import { Star, ExternalLink, MapPin } from "lucide-react";

interface GoogleBusinessEmbedProps {
  businessName?: string;
  rating?: number;
  reviewCount?: number;
  businessUrl?: string;
  placeId?: string;
  address?: string;
}

const GoogleBusinessEmbed = ({
  businessName = "Erika Robinson - Wholesale Mortgage Broker",
  rating = 5.0,
  reviewCount = 47,
  businessUrl = "https://g.page/your-business-page",
  placeId = "YOUR_PLACE_ID",
  address = "Available Nationwide"
}: GoogleBusinessEmbedProps) => {
  // Generate stars based on rating
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="bg-card rounded-sm shadow-elegant overflow-hidden">
      {/* Google Business Header */}
      <div className="bg-white px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-foreground font-body font-medium">Google Business Profile</span>
        </div>
      </div>

      {/* Business Info */}
      <div className="p-6">
        <h3 className="font-heading text-xl text-foreground font-semibold mb-2">
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
                    ? 'text-yellow-400 fill-yellow-400' 
                    : i === fullStars && hasHalfStar
                    ? 'text-yellow-400 fill-yellow-400/50'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground font-body text-sm">
            ({reviewCount} reviews)
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" />
          <span className="font-body text-sm">{address}</span>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-sm overflow-hidden mb-4 aspect-video bg-muted">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:${placeId}`}
            title="Google Maps Location"
          />
        </div>

        {/* Sample Reviews */}
        <div className="space-y-4 mb-6">
          <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">Recent Reviews</p>
          
          {[
            {
              author: "Michael T.",
              text: "Erika is incredibly knowledgeable and responsive. She helped us find the perfect loan product for our clients.",
              rating: 5
            },
            {
              author: "Sarah K.",
              text: "Outstanding service! Always available to answer questions and provides competitive rates.",
              rating: 5
            }
          ].map((review, index) => (
            <div key={index} className="bg-muted/30 rounded-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-body font-semibold text-sm">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <span className="font-body font-medium text-foreground">{review.author}</span>
                <div className="flex items-center gap-0.5 ml-auto">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
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

      {/* View on Google Link */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border">
        <a
          href={businessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#1a73e8] font-body font-medium transition-colors"
        >
          View on Google
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default GoogleBusinessEmbed;
