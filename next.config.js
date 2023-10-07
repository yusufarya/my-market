/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  // exportPathMap: async function () {
  //   return {
  //     "/": { page: "/" },
  //     "/master-unit": { page: "/unit" },
  //     "/About/About": { page: "/about-page" },
  //   };
  // },
  async rewrites() {
    return [
      {
        source: "/master-unit",
        destination: "/unit",
      },
    ];
  },
};

module.exports = nextConfig;
