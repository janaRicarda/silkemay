/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://silkemay.vercel.app',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true, 
    
    //Default transformation function
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priotity: path === "/" ? 1.0 : 0.7,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    }
};