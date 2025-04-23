import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's strict mode
  swcMinify: true,       // Enables SWC-based minification for better performance
};

export default nextConfig;
