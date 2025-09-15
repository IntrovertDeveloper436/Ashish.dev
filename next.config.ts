import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",

  // You can add more options later if needed
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
