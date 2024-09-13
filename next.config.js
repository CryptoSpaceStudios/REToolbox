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
  // Other Next.js configuration options
});
