/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This disables running ESLint during build
    ignoreDuringBuilds: true,
  },
  // Set output to 'export' for static site generation
  output: 'export',
  // Since we're creating a static website, we need to disable image optimization
  images: {
    unoptimized: true,
  },
  // Disable the requirement for routes-manifest.json
  experimental: {
    // This helps Vercel understand it's a static site
    deploymentId: process.env.VERCEL_DEPLOYMENT_ID || 'local',
  },
  // Ensure we have a 404 page for static hosting
  trailingSlash: true,
};

export default nextConfig;
