const { TuneSharp } = require('@mui/icons-material');
const { userAgent } = require('next/server');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.VERCEL_URL || 'https://SITEGOESHERE',
    generateRobotsTxt: true,
    exclude: ['/sitemap.xml', '/api'],
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.VERCEL_URL}/sitemap.xml`,
        ],
        policies: [{
            userAgent: '*',
            disallow: '/api/*',
            }
        ],
    }
}