/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withPlugins([
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  }],
], {
  distDir: 'build',
 
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ['retoolbox.netlify.app'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Modify the config as needed
    return config;
  },
});
