/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  },
  reactStrictMode: false,
};

export default nextConfig;
