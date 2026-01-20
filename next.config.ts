import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        // Treat the loaded file as JS (so importing returns a component)
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakhnxedpyjqgzkgrzub.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
