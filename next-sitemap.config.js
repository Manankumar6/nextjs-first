/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techcanva.in',
  generateRobotsTxt: true,
  exclude: ['/login', '/signup', '/not-authenticate'], // Stop indexing utility pages
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://techcanva.in/sitemap-0.xml', 
    ],
  },
};