import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath,
  trailingSlash: true,
  devIndicators: false,
};

export default nextConfig;
