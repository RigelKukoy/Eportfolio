/** @type {import('next').NextConfig} */
const nextConfig = {
 output: 'export',
 images: {
  unoptimized: true,
 },
 basePath: '/Eportfolio',
 distDir: 'out',
};

module.exports = nextConfig;
