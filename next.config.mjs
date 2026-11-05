/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/arbit-infratel-preview',
  assetPrefix: '/arbit-infratel-preview/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
