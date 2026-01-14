import { useEffect, useState } from "react";

interface LinkedInProfileEmbedProps {
  vanity?: string;
}

const LinkedInProfileEmbed = ({ vanity = "erikalynne1093" }: LinkedInProfileEmbedProps) => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Check if the LinkedIn badge script function exists on the window object
    if (window.IN && window.IN.ENV && window.IN.ENV.js) {
      try {
        // Force the LinkedIn script to re-process the DOM for new badges
        window.IN.parse(); 
        // If successful, hide the fallback text
        setShowFallback(false);
      } catch (e) {
        // Fallback if the script is present but parsing fails
        setShowFallback(true);
      }
    } else {
      // If the script isn't loaded at all, show the fallback after a delay
      const t = window.setTimeout(() => setShowFallback(true), 1500);
      return () => window.clearTimeout(t);
    }
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

// Declare the external LinkedIn object so TypeScript knows it exists
declare global {
  interface Window {
    IN: any;
  }
}
