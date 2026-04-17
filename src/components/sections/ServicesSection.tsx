import {
  Home,
  RefreshCw,
  Wallet,
  Building2,
  Briefcase,
  Building,
  Zap,
} from "lucide-react";

const products = [
  {
    icon: Home,
    title: "Conventional, FHA, VA & Jumbo Loans",
    description:
      "A full range of traditional home loan options to fit different financial situations. First-time buyer, veteran, luxury upgrade, or low-down-payment, I'll help you choose the loan that fits your goals.",
  },
  {
    icon: RefreshCw,
    title: "Refinances & Cash-Out Strategies",
    description:
      "Lower your rate, reduce your payment, shorten your term, or tap into your equity. Smart cash-out strategies that put your equity to work for debt payoff, home improvements, or future investments.",
  },
  {
    icon: Wallet,
    title: "HELOANs & HELOCs",
    description:
      "Home Equity Loans and Lines of Credit let you tap your equity without refinancing your first mortgage, great for renovations, debt consolidation, or financial flexibility, often with faster closings.",
  },
  {
    icon: Building2,
    title: "DSCR & Investor Loans",
    description:
      "Designed for real estate investors. DSCR loans qualify based on rental income rather than personal income, structured around cash flow and long-term returns whether you're growing a portfolio or buying your first investment.",
  },
  {
    icon: Briefcase,
    title: "Asset-Based & Non-Traditional Income Loans",
    description:
      "If your income doesn't fit the standard W-2 box, you still have options. Bank statements, assets, or alternative documentation help self-employed borrowers, entrepreneurs, and retirees qualify.",
  },
  {
    icon: Building,
    title: "Commercial Loans",
    description:
      "Financing for business owners and investors purchasing or refinancing income-producing properties, office, retail, industrial, and mixed-use, structured around cash flow, performance, and long-term goals.",
  },
  {
    icon: Zap,
    title: "Hard Money Options (When Needed)",
    description:
      "For time-sensitive deals or unique scenarios, hard money loans provide fast funding and flexibility. Strategic tools, not long-term solutions, recommended only when they truly make sense.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            What I Offer
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold">
            Loan Products
          </h2>
          <p className="font-heading italic text-xl md:text-2xl text-muted-foreground mt-3">
            Solutions tailored to your situation
          </p>
          <p className="text-muted-foreground font-body mt-4 text-sm">
            From first homes to investment portfolios, and every scenario in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const isLast = index === products.length - 1;
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-sm shadow-elegant hover:shadow-card transition-all duration-300 group border border-transparent hover:border-gold/30 ${
                  isLast ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <product.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-foreground font-semibold mb-3 leading-tight">
                  {product.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
