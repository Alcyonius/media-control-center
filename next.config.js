/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.119'],

  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
