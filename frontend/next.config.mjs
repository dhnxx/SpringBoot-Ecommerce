/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        port: "", // Leave empty if no specific port is required
        pathname: "/**", // Match all paths
      },
    ],
  },
};

export default nextConfig;
