import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures the site is exported as static files
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
