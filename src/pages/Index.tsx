import { Phone, Mail, MapPin, Award, Users, Home, ChevronDown } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import ContactForm from "@/components/ContactForm";
import LinkedInProfileEmbed from "@/components/LinkedInProfileEmbed";
import GoogleBusinessEmbed from "@/components/GoogleBusinessEmbed";
const Index = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroHome})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p 
              className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Wholesale Mortgage Broker
            </p>
            <h1 
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-semibold leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Erika Robinson
            </h1>
            <p 
              className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-xl mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Helping brokers and borrowers navigate the path to homeownership with expertise, integrity, and personalized solutions.
            </p>
            <div 
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary font-body font-medium px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-card"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-medium px-8 py-4 rounded-sm transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* LinkedIn Profile Embed */}
            <div className="relative">
            <LinkedInProfileEmbed 
              profileUrl="https://www.linkedin.com/in/erikalynne1093"
            />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 rounded-sm -z-10" />
            </div>

            {/* About Content */}
            <div>
              <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">About Me</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold mb-6">
                Your Trusted Partner in Wholesale Lending
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  With years of experience in the wholesale mortgage industry, I specialize in connecting mortgage brokers with competitive lending solutions that serve their clients best.
                </p>
                <p>
                  My approach is built on transparency, responsiveness, and a deep understanding of the ever-evolving mortgage landscape. I believe that every transaction is an opportunity to build lasting relationships.
                </p>
                <p>
                  Whether you're looking for conventional, FHA, VA, or non-QM products, I'm here to provide the guidance and support you need to close deals efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">What I Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold">
              Comprehensive Wholesale Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Diverse Loan Products",
                description: "Access to conventional, government, jumbo, and non-QM loan products tailored to your borrowers' unique needs."
              },
              {
                icon: Award,
                title: "Competitive Pricing",
                description: "Leverage my lender relationships to secure the most competitive rates and terms for your clients."
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personalized service from application to closing, ensuring a smooth and efficient process every step of the way."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-sm shadow-elegant hover:shadow-card transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-foreground font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility / Reviews Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">Client Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold">
              Trusted by Brokers Nationwide
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <GoogleBusinessEmbed 
              businessName="Mortgage By Design"
              rating={5.0}
              reviewCount={47}
              businessUrl="https://g.page/mortgage-by-design"
              placeId="ChIJN1t_tDeuEmsRUsoyG83frY4"
              address="Available Nationwide"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">Get in Touch</p>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                Ready to discuss how I can help grow your business? Reach out today and let's explore the possibilities.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(555) 123-4567",
                  href: "tel:+15551234567"
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "erika@example.com",
                  href: "mailto:erika@example.com"
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Available Nationwide",
                  href: null
                }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-secondary rounded-sm hover:bg-cream-dark transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-muted-foreground font-body text-sm mb-1">{contact.label}</p>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="font-heading text-lg text-foreground hover:text-gold transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="font-heading text-lg text-foreground">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 md:p-12 rounded-sm shadow-elegant mb-16">
              <h3 className="font-heading text-2xl text-foreground font-semibold mb-6 text-center">
                Send Me a Message
              </h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 font-body text-sm">
              © {new Date().getFullYear()} Mortgage By Design. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 font-body text-sm">
              NMLS# 000000
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
