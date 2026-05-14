/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Eportfolio',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
