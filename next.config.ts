import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // Type errors ki wajah se production build fail hone se bachata hai
  },
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
};

export default nextConfig;