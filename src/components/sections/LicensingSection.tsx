import { MapPin, CheckCircle2, Globe2 } from "lucide-react";

const activeStates = [
  "Arizona",
  "California",
  "Colorado",
  "Washington",
  "Oregon",
  "Pennsylvania",
  "Florida",
  "Ohio",
];

const availableStates = [
  "Connecticut",
  "Delaware",
  "Idaho",
  "Michigan",
  "Minnesota",
  "Montana",
  "Nebraska",
  "Texas",
  "Virginia",
];

const LicensingSection = () => {
  return (
    <section id="licensing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Coverage Map
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold">
            Licensing & Coverage
          </h2>
          <p className="font-heading italic text-xl md:text-2xl text-muted-foreground mt-3">
            Where I can help you
          </p>
          <p className="text-muted-foreground font-body mt-4 text-sm">
            Licensed across the country, and available in every state for investor DSCR loans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Actively Licensed */}
          <div className="bg-card p-8 rounded-sm shadow-elegant border border-gold/20">
            <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mb-5">
              <CheckCircle2 className="w-6 h-6 text-gold" />
            </div>
            <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-2">
              Actively Licensed
            </p>
            <h3 className="font-heading text-2xl text-foreground font-semibold mb-4">
              8 States
            </h3>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              {activeStates.map((state) => (
                <li key={state} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  {state}
                </li>
              ))}
            </ul>
          </div>

          {/* Available on Request */}
          <div className="bg-card p-8 rounded-sm shadow-elegant">
            <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-2">
              Available on Request
            </p>
            <h3 className="font-heading text-2xl text-foreground font-semibold mb-4">
              9 More States
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-3 italic">
              Through Adaxa Home — I can get licensed quickly when business calls for it.
            </p>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              {availableStates.map((state) => (
                <li key={state} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  {state}
                </li>
              ))}
            </ul>
          </div>

          {/* Nationwide DSCR */}
          <div className="bg-primary text-primary-foreground p-8 rounded-sm shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="w-12 h-12 bg-gold/20 rounded-sm flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6 text-gold" />
              </div>
              <p className="text-gold font-body text-xs tracking-[0.2em] uppercase mb-2">
                DSCR & Investor Loans
              </p>
              <h3 className="font-heading text-2xl font-semibold mb-4">All 50 States</h3>
              <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
                For real estate investors, I can write DSCR loans nationwide — qualified on
                rental income, not personal income. No state restrictions, no slowdowns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingSection;
