import { useEffect } from "react";

interface LinkedInProfileEmbedProps {
  vanity?: string;
  size?: "medium" | "large";
  theme?: "light" | "dark";
  type?: "VERTICAL" | "HORIZONTAL";
}

const LinkedInProfileEmbed = ({ 
  vanity = "erikalynne1093",
  size = "large",
  theme = "light",
  type = "HORIZONTAL"
}: LinkedInProfileEmbedProps) => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    if ((window as any).LI) {
      (window as any).LI.renderAll();
    }
  }, [vanity]);

  return (
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size={size} 
      data-theme={theme} 
      data-type={type} 
      data-vanity={vanity} 
      data-version="v1"
    >
      <a 
        className="badge-base__link LI-simple-link" 
        href={`https://www.linkedin.com/in/${vanity}?trk=profile-badge`}
      >
        Erika Robinson
      </a>
    </div>
  );
};

export default LinkedInProfileEmbed;
