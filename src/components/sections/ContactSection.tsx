import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "(623) 363-1093",
    href: "tel:+16233631093",
  },
  {
    icon: Mail,
    label: "Email",
    value: "erobinson@adaxahome.com",
    href: "mailto:erobinson@adaxahome.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Phoenix, AZ — Available Nationwide",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground font-semibold mb-4">
              Let's design your mortgage
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Whether you're ready to start or just exploring options, reach out and let's talk
              through what makes sense for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, index) => (
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

          <div className="bg-secondary p-8 md:p-12 rounded-sm shadow-elegant">
            <h3 className="font-heading text-2xl text-foreground font-semibold mb-6 text-center">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
