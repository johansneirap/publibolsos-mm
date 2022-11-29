/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mochilasmineras.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
