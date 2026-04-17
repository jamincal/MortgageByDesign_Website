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
              <span className="italic text-gold">you</span> — not the bank.
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                Hi, I'm Erika Robinson, founder of <strong className="text-foreground">Mortgage by Design LLC</strong>.
                I do mortgages a little differently. As a wholesale mortgage broker, I don't work for a
                bank — I work for you. Instead of pushing one lender's products, I shop your loan across{" "}
                <strong className="text-foreground">75+ lenders nationwide</strong> to find the best rate,
                terms, and strategy based on your goals.
              </p>
              <p>
                Whether you're buying your first home, refinancing to lower your payment, pulling equity to
                pay off debt, or investing in real estate, my job is to make the process simple, strategic,
                and stress-free. No cookie-cutter loans here — everything is designed around your bigger
                financial picture.
              </p>
              <p>
                I'm known for being responsive, honest, and detail-obsessed. I'll walk you through your
                options, explain the numbers in plain English, and stay in your corner from application
                to closing — and beyond.
              </p>
              <p className="font-heading italic text-2xl text-foreground pt-2">
                Better options. Smarter guidance. A broker who actually cares about the outcome.
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
