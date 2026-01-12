import { useEffect, useState } from "react";

interface LinkedInProfileEmbedProps {
  vanity?: string;
}

const LinkedInProfileEmbed = ({ vanity = "erikalynne1093" }: LinkedInProfileEmbedProps) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // If the badge script (in index.html) can’t run inside the preview iframe,
    // the badge will stay unrendered. After a short delay, show a fallback link.
    const t = window.setTimeout(() => setShowFallback(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

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
      <a className="badge-base__link LI-simple-link" href={`https://www.linkedin.com/in/${vanity}/?trk=profile-badge`}>
        Erika Robinson
      </a>

      {showFallback ? (
        <div className="mt-3 text-sm">
          <a
            href={`https://www.linkedin.com/in/${vanity}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Open LinkedIn Profile
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default LinkedInProfileEmbed;
