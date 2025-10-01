import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // ✅ ensures API routes run on Netlify Functions
};

export default nextConfig;
