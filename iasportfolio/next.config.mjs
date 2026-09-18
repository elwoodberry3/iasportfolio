/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploys as pure static files to Vercel / any CDN.
  output: "export",

  // Static export cannot use the Image Optimization API, so serve images as-is.
  images: {
    unoptimized: true,
  },

  // Emit /demos/index.html instead of /demos.html so folder-style routes
  // resolve cleanly on static hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
