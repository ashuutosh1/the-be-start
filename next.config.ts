/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/legal/terms-condition",
        destination: "/company-terms/terms-condition",
      },
      {
        source: "/legal/privacy-policies",
        destination: "/company-terms/privacy-policies",
      },
      {
        source: "/legal/report-bugs",
        destination: "/company-terms/report-bugs",
      },
      {
        source: "/legal/marketing",
        destination: "/company-terms/marketing",
      },
      {
        source: "/legal/copyright-issue",
        destination: "/company-terms/copyright-issue",
      },
      {
        source: "/legal/help-center",
        destination: "/company-terms/help-center",
      },
    ];
  },
};



module.exports = nextConfig;
