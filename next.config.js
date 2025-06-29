/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Exclude specific directories from the build process
  outputFileTracingExcludes: {
    '*': ['**/studio/**'],
  },
  // Transpile specific packages
  transpilePackages: ['@ly/ds-core'],
  // Completely exclude Sanity Studio from the build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /(node_modules|studio)/,
    });
    return config;
  },
};

export default nextConfig;
