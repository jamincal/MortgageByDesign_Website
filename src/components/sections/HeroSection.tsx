import { ChevronDown } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHome})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p
            className="text-gold font-body text-base md:text-lg tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-in font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Mortgage By Design
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-semibold leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Erika Robinson
          </h1>
          <p
            className="font-heading italic font-bold text-accent text-2xl md:text-3xl mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            Mortgages, by design, not by default.
          </p>
          <p
            className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-xl mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            A wholesale mortgage broker shopping 75+ lenders to find the right loan,
            rate, and strategy for your bigger financial picture.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary font-body font-medium px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-card"
            >
              Start a Conversation
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-medium px-8 py-4 rounded-sm transition-all duration-300"
            >
              Explore Loan Products
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
