import type { NextConfig } from "next";

const isGHActions = process.env.GITHUB_ACTIONS === "true";
const repo = "social-anxiety-dialogue-practice";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGHActions ? `/${repo}` : "",
  assetPrefix: isGHActions ? `/${repo}/` : "",
};

export default nextConfig;
