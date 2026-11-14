import ProfileCard from "@/components/ProfileCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Meet Erika
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold mb-8 leading-tight">
              A broker who works for{" "}
              <span className="italic text-gold">you</span>, not the bank.
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                Hi, I'm Erika Robinson, founder of{" "}
                <strong className="text-foreground">Mortgage by Design LLC</strong> and
                an <strong className="text-foreground">Executive Mortgage Broker</strong>{" "}
                specializing in residential and commercial financing.
              </p>
              <p>
                I do mortgages a little differently. As a wholesale mortgage broker, I
                don't work for a bank, I work for <strong className="text-foreground">YOU</strong>.
                Instead of offering one lender's products, I shop your loan across{" "}
                <strong className="text-foreground">250+ lenders nationwide</strong> to
                find competitive rates, terms, and financing strategies tailored to your
                goals.
              </p>
              <p>
                Whether you're purchasing your first home, refinancing to lower your
                payment, tapping into your equity to consolidate debt, or building your
                real estate investment portfolio, I'm here to make the process simple,
                strategic, and stress-free.
              </p>
              <p>
                Commercial financing? I've got you covered there, too! I offer commercial
                purchase loans, rate-and-term refinances, and cash-out refinances across a
                wide variety of commercial property types. Whether you're purchasing a new
                investment, refinancing an existing commercial property, or unlocking
                equity to fund your next opportunity, I'll help you explore financing
                solutions that make sense for your business and long-term goals.
              </p>
              <p>
                No cookie-cutter loans here. Every financing strategy is designed around
                your bigger financial picture.
              </p>
              <p>
                I'm known for being responsive, honest, and detail-obsessed. I'll walk you
                through your options, explain the numbers in plain English, and personally
                guide you from application to closing, and beyond. But don't just take my
                word for it! Be sure to read my{" "}
                <a
                  href="#testimonials"
                  className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-colors"
                >
                  client testimonials
                </a>{" "}
                to hear firsthand about their personal experiences working with me.
              </p>
              <p className="font-heading italic text-2xl text-foreground pt-2">
                Your property. Your goals. Your mortgage, by design.
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative md:sticky md:top-8">
            <ProfileCard />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
