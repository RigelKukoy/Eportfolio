/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

const nextConfig = {
  // Static export + basePath only for GitHub Pages.
  // Vercel and `next dev` use the default server-rendered Next.js at the root path.
  ...(isGithubPages && {
    output: 'export',
    basePath: '/Eportfolio',
  }),
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
