import { Linkedin, Instagram, Facebook, MapPin, Briefcase, Phone } from "lucide-react";
import erikaPhoto from "@/assets/erika-linkedin.jpg";
import bannerBg from "@/assets/linkedin-banner-bg.jpg";
import adaxaLogo from "@/assets/adaxa-logo.jpg";

interface ProfileCardProps {
  name?: string;
  title?: string;
  company?: string;
  location?: string;
  phone?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  tagline?: string;
}

const ProfileCard = ({
  name = "Erika Robinson",
  title = "Wholesale Mortgage Broker",
  company = "Mortgage by Design LLC",
  location = "Phoenix, Arizona",
  phone = "(623) 363-1093",
  linkedinUrl = "https://www.linkedin.com/in/erikalynne/",
  instagramUrl = "https://www.instagram.com/mortgagebydesign1093/",
  facebookUrl = "https://www.facebook.com/profile.php?id=61576985290597",
  tagline = "Mortgages, by design, not by default.",
}: ProfileCardProps) => {
  return (
    <article className="bg-card rounded-sm shadow-elegant overflow-hidden border border-border">
      {/* Banner with logo */}
      <div
        className="relative h-40 md:h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={adaxaLogo}
            alt="Adaxa Home"
            loading="lazy"
            className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>

      {/* Photo */}
      <div className="px-8 -mt-28 mb-4">
        <div className="relative inline-block">
          <img
            src={erikaPhoto}
            alt={`${name}, ${title}`}
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-4 border-card shadow-card"
          />
          <span className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-accent border-2 border-card" />
        </div>
      </div>

      {/* Identity */}
      <div className="px-8 pb-8">
        <h3 className="font-heading text-3xl text-foreground font-semibold leading-tight">
          {name}
        </h3>
        <p className="font-body text-foreground mt-1">{title}</p>
        <p className="font-body text-sm text-muted-foreground italic mt-1">"{tagline}"</p>

        <div className="mt-5 space-y-2 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-accent" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="hover:text-accent transition-colors">
              Personal Cell: {phone}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-border">
          <div>
            <p className="font-heading text-2xl text-foreground font-semibold">75+</p>
            <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
              Lender Network
            </p>
          </div>
          <div>
            <p className="font-heading text-2xl text-foreground font-semibold">50</p>
            <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
              States (DSCR)
            </p>
          </div>
        </div>

        {/* Social CTAs */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-body font-medium py-3 rounded-sm transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white font-body font-medium py-3 rounded-sm transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Instagram</span>
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Facebook"
            className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#0E5FCC] text-white font-body font-medium py-3 rounded-sm transition-colors"
          >
            <Facebook className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Facebook</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
