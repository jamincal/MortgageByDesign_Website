import { Linkedin, MapPin, Briefcase, ExternalLink } from "lucide-react";
import erikaPhoto from "@/assets/erika-linkedin.jpg";

interface ProfileCardProps {
  name?: string;
  title?: string;
  company?: string;
  location?: string;
  linkedinUrl?: string;
  tagline?: string;
}

const ProfileCard = ({
  name = "Erika Robinson",
  title = "Wholesale Mortgage Broker",
  company = "Mortgage by Design LLC",
  location = "Phoenix, Arizona",
  linkedinUrl = "https://www.linkedin.com/in/erikalynne/",
  tagline = "Mortgages, by design — not by default.",
}: ProfileCardProps) => {
  return (
    <article className="bg-card rounded-sm shadow-elegant overflow-hidden border border-border">
      {/* Navy banner */}
      <div className="relative h-40 md:h-48 bg-gradient-to-br from-primary via-navy-light to-primary">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--gold))_0%,transparent_60%)]" />
      </div>

      {/* Photo */}
      <div className="px-8 -mt-28 mb-4">
        <div className="relative inline-block">
          <img
            src={erikaPhoto}
            alt={`${name} — ${title}`}
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-4 border-card shadow-card"
          />
          <span className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-gold border-2 border-card" />
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
            <Briefcase className="w-4 h-4 text-gold" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{location}</span>
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

        {/* CTA */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-[#0A66C2] hover:bg-[#004182] text-primary-foreground font-body font-medium py-3 rounded-sm transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          Connect on LinkedIn
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>
    </article>
  );
};

export default ProfileCard;
