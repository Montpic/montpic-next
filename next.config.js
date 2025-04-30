/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This helps with file-based static exports
  experimental: {
    appDir: true,
  },
  // Generate all routes statically
  trailingSlash: true,
};

module.exports = nextConfig;