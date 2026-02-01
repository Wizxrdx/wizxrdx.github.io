"use client";

export default function CredlyBadge({ badgeId }: { badgeId: string }) {
  const host = "https://www.credly.com";
  const embedUrl = `${host}/embedded_badge/${badgeId}`;

  return (
    <iframe
      name="acclaim-badge"
      id={`embedded-badge-${badgeId}`}
      src={embedUrl}
      style={{ width: "150px", height: "270px", border: "none" }}
      title="View my verified achievement on Credly."
    />
  );
}