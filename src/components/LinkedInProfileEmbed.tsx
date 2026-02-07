type LinkedInProfileEmbedProps = {
  vanity: string;
  name?: string;
  locale?: string;
  theme?: "light" | "dark";
  type?: "VERTICAL" | "HORIZONTAL";
};

const LinkedInProfileEmbed = ({
  vanity,
  name = "Erika Robinson",
  locale = "en_US",
  theme = "light",
  type = "HORIZONTAL",
}: LinkedInProfileEmbedProps) => {
  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale={locale}
      data-size="large"
      data-theme={theme}
      data-type={type}
      data-vanity={vanity}
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href={`https://www.linkedin.com/in/${vanity}?trk=profile-badge`}
      >
        {name}
      </a>
    </div>
  );
};

export default LinkedInProfileEmbed;

