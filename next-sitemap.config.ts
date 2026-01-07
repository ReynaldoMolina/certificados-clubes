module.exports = {
  siteUrl: "https://certificados-clubes.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/editor", "/pdf"],
      },
    ],
  },
};
