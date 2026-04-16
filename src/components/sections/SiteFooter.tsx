import { Instagram, Facebook, Linkedin } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mortgagebydesign1093/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576985290597",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/erikalynne/",
    icon: Linkedin,
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/mortgage-by-design-phoenix",
    // Lucide doesn't ship a Yelp icon — render a styled "Y" mark
    icon: null as never,
  },
];

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Mortgage By Design
            </p>
            <p className="font-heading text-2xl mb-3">Erika Robinson</p>
            <p className="font-body text-sm text-primary-foreground/70 italic">
              Mortgages, by design — not by default.
            </p>
          </div>

          {/* Contact */}
          <div className="font-body text-sm text-primary-foreground/80 space-y-2">
            <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">Contact</p>
            <p>
              <a href="tel:+16233631093" className="hover:text-gold transition-colors">
                (623) 363-1093
              </a>
            </p>
            <p>
              <a
                href="mailto:erobinson@adaxahome.com"
                className="hover:text-gold transition-colors"
              >
                erobinson@adaxahome.com
              </a>
            </p>
            <p>Phoenix, AZ</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3 font-body">Follow</p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:text-primary hover:border-gold transition-all"
                >
                  {social.icon ? (
                    <social.icon className="w-4 h-4" />
                  ) : (
                    <span className="font-heading font-bold text-sm">Y</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-primary-foreground/60 font-body text-xs">
          <p>© {new Date().getFullYear()} Mortgage By Design LLC. All rights reserved.</p>
          <p>NMLS# 1897656</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
