/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export for Azure Static Web Apps
  reactStrictMode: true,
  images: {
    unoptimized: true, // needed for static hosting
  },
  // optional: if you had public runtime vars, move them here
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  },
};

module.exports = nextConfig;
