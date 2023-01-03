const path = require('node:path');

module.exports = {
  reactStrictMode: true,
  images: { domains: ["rickandmortyapi.com"] },
  pageExtensions: ["tsx"],
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../..'),
  },
};
