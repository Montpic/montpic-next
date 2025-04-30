/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
  },
  trailingSlash: true, // Aide à la navigation sur GitHub Pages
};

module.exports = nextConfig;