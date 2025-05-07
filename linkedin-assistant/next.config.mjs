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
};

export default nextConfig;
