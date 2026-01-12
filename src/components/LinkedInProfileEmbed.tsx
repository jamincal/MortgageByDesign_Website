interface LinkedInProfileEmbedProps {
  vanity?: string;
}

const LinkedInProfileEmbed = ({ 
  vanity = "erikalynne1093"
}: LinkedInProfileEmbedProps) => {
  return (
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="large" 
      data-theme="light" 
      data-type="HORIZONTAL" 
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
