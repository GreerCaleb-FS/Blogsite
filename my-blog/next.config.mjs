/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Blogsite", // repo name
  assetPrefix: "/Blogsite/",
};

export default nextConfig;
