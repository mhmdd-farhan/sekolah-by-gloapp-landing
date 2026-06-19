import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our own brand mark (public/logo.svg) is trusted, static content.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
