import { LinkedInEmbed } from "react-social-media-embed";
import { Linkedin, ExternalLink } from "lucide-react";

interface LinkedInProfileEmbedProps {
  // Your LinkedIn profile URL - update this with your actual profile
  profileUrl?: string;
  // A recent LinkedIn post URL for the embed (required for the embed to work)
  postUrl?: string;
}

const LinkedInProfileEmbed = ({ 
  profileUrl = "https://www.linkedin.com/in/erikalynne1093",
  postUrl = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7280987542972141569"
}: LinkedInProfileEmbedProps) => {
  return (
    <div className="bg-card rounded-sm shadow-elegant overflow-hidden">
      {/* Profile Header */}
      <div className="bg-[#0A66C2] px-6 py-4">
        <div className="flex items-center gap-3">
          <Linkedin className="w-6 h-6 text-white" />
          <span className="text-white font-body font-medium">LinkedIn Profile</span>
        </div>
      </div>
      
      {/* Embed Container */}
      <div className="p-4 bg-white">
        <LinkedInEmbed 
          url={postUrl}
          width="100%"
          height={500}
        />
      </div>
      
      {/* View Full Profile Link */}
      <div className="px-6 py-4 bg-muted/30 border-t border-border">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#0A66C2] hover:text-[#004182] font-body font-medium transition-colors"
        >
          View Full Profile
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default LinkedInProfileEmbed;
