"use client";

import { useEffect } from "react";

export default function CredlyBadge({ badgeId }: { badgeId: string }) {
  useEffect(() => {
    const scriptId = "credly-embed-script";

    // Avoid injecting the script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
    />
  );
}
