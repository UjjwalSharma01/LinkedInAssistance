/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This disables running ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
