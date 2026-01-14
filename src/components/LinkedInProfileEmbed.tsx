const LinkedInProfileEmbed = () => {
  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium" // Set size to medium (or large, etc.)
      data-theme="light"
      data-type="VERTICAL" // Set type to VERTICAL (or HORIZONTAL)
      data-vanity="erikalynne1093" // Use the correct vanity name
      data-version="v1"
    >
      {/* Updated the href to the correct, full URL format */}
      <a className="badge-base__link LI-simple-link" href="www.linkedin.com">
        Erika Robinson
      </a>
    </div>
  );
};

export default LinkedInProfileEmbed;
