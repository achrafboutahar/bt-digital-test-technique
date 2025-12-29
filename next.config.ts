import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  transpilePackages: ["@trilogy-ds/react"],
};

export default nextConfig;
