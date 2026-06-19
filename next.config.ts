import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Two case-study previews (Sabrina, Nexus) are SVGs. Next blocks SVG through
    // its image optimizer by default; allow it, sandboxed so the SVGs can't run scripts.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
