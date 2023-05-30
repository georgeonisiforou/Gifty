/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "cdn.shopify.com",
      "images.asos-media.com",
      "lp.arket.com",
      "asset.uniqlo.com",
      "ouraring.com",
      "media.dertouristik.com",
      "image.api.playstation.com",
      "external.webstorage.gr",
    ],
  },
};

module.exports = nextConfig;
