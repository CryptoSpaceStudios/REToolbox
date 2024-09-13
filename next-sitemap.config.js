const { TuneSharp } = require('@mui/icons-material');
const { userAgent } = require('next/server');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: `https://${process.env.VERCEL_URL}` || 'https://retoolbox.netlify.app',
    generateRobotsTxt: true,
    exclude: ['/sitemap.xml', '/api'],
    transform: async (config, path) => {
        return {
            loc: `https://${process.env.VERCEL_URL}/${path}`,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    robotsTxtOptions: {
        additionalSitemaps: [
            `https://${process.env.VERCEL_URL}/sitemap.xml`,
        ],
        policies: [{
            userAgent: '*',
            disallow: '/api/*',
            }
        ],
    }
}