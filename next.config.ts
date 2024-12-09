/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Allow builds even if there are ESLint errors
  },
};

module.exports = nextConfig;
