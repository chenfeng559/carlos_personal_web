import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: process.env.NODE_ENV === "production" ? "/carlos_personal_web" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/carlos_personal_web" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
