/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return []
  },
  // Disable proxy for development
  webSocketTimeout: 30000,
  experimental: {
    proxyTimeout: 30000,
  }
}

export default nextConfig
