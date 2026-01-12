import { useEffect } from "react";
import { Linkedin } from "lucide-react";

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
    // Load LinkedIn badge script
    const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Re-render badges if script already loaded
    if ((window as any).LI) {
      (window as any).LI.renderAll();
    }
  }, [vanity]);

  return (
    <div className="bg-card rounded-sm shadow-elegant overflow-hidden">
      {/* Profile Header */}
      <div className="bg-[#0A66C2] px-6 py-4">
        <div className="flex items-center gap-3">
          <Linkedin className="w-6 h-6 text-white" />
          <span className="text-white font-body font-medium">LinkedIn Profile</span>
        </div>
      </div>
      
      {/* LinkedIn Badge Container */}
      <div className="p-6 bg-white flex justify-center">
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
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfileEmbed;
