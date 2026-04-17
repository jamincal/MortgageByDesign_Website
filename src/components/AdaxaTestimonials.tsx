import { ExternalLink, Quote, Star } from "lucide-react";
import adaxaLogo from "@/assets/adaxa-logo.jpg";

export interface Testimonial {
  author: string;
  text: string;
  url: string;
  date?: string; // ISO date string
}

interface AdaxaTestimonialsProps {
  testimonials: Testimonial[];
  brandUrl?: string;
}

// Format date in Phoenix time (MST/MDT)
const formatPhoenixDate = (dateString?: string) => {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    timeZone: "America/Phoenix",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const AdaxaTestimonials = ({
  testimonials,
  brandUrl = "https://adaxahome.com",
}: AdaxaTestimonialsProps) => {
  return (
    <div className="bg-card rounded-sm shadow-elegant overflow-hidden border border-border">
      {/* Header with Adaxa logo */}
      <div className="bg-foreground px-6 py-5 border-b border-border flex items-center justify-between">
        <a
          href={brandUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="Visit Adaxa Home"
        >
          <img
            src={adaxaLogo}
            alt="Adaxa Home"
            className="h-9 w-auto object-contain"
          />
          <span className="text-background/80 group-hover:text-background font-body text-sm tracking-wider transition-colors hidden sm:inline">
            Client Testimonials
          </span>
        </a>
        <span className="text-xs font-body uppercase tracking-[0.2em] text-background/60">
          Verified
        </span>
      </div>

      {/* Scrollable reviews */}
      <div className="relative">
        <div
          className="max-h-[520px] overflow-y-auto px-6 py-6 space-y-5
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-muted/40
            [&::-webkit-scrollbar-thumb]:bg-gold/50
            [&::-webkit-scrollbar-thumb]:rounded-full
            hover:[&::-webkit-scrollbar-thumb]:bg-gold"
        >
          {testimonials.map((review, index) => (
            <article
              key={index}
              className="relative bg-muted/30 hover:bg-muted/50 transition-colors rounded-sm p-5 border border-border/60"
            >
              <Quote
                className="absolute top-3 right-3 w-6 h-6 text-gold/30"
                aria-hidden
              />
              <header className="flex items-center gap-3 mb-3 pr-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-heading font-semibold">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-lg text-foreground leading-tight truncate">
                    {review.author}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-gold fill-gold"
                        />
                      ))}
                    </div>
                    {review.date && (
                      <span className="text-xs text-muted-foreground font-body ml-1">
                        • {formatPhoenixDate(review.date)}
                      </span>
                    )}
                  </div>
                </div>
              </header>
              <p className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">
                {review.text}
              </p>
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-body uppercase tracking-wider text-gold hover:text-foreground transition-colors"
              >
                View original review
                <ExternalLink className="w-3 h-3" />
              </a>
            </article>
          ))}
        </div>
        {/* Fade hint at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* CTA */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between flex-wrap gap-2">
        <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">
          Brokered through Adaxa Home
        </p>
        <a
          href={brandUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground hover:text-gold font-body font-medium text-sm transition-colors"
        >
          Visit adaxahome.com
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default AdaxaTestimonials;
