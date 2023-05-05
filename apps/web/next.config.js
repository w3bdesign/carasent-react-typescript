const path = require('node:path');

const headers = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "Server",
    value: "Apache 2.0" // fake server value
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "sameorigin"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "Referrer-Policy",
    value: "same-origin"
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=*" // allow specified policies here
  }
];

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { domains: ["rickandmortyapi.com"], minimumCacheTTL: 1200 },
  pageExtensions: ["tsx"],
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../..'),
    appDir: false,
  },
    
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers
      }
    ];
  }
};
