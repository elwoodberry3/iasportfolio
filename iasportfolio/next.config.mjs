/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: `output: "export"` was REMOVED. Static export forbids route handlers,
  // and /api/contact must run on the server so the n8n secret (x-ias-secret) is
  // never shipped to the browser. On Vercel this deploys as a normal Next app —
  // no config needed. The rest of the site is still statically rendered where it
  // can be; only the one API route is dynamic.

  // Kept from the static config so nothing else changes visually.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
