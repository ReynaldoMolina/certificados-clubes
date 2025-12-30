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
};

export default nextConfig;
