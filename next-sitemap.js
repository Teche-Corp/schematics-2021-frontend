module.exports = {
  siteUrl: 'https://schematics.its.ac.id',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://schematics.its.ac.id/dashboard/sitemap.xml'],
  },
};
