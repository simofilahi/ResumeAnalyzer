/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "ignore-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
