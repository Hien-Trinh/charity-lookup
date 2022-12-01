/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.globalgiving.org',
          port: '',
          pathname: '/pfil/**',
        },
      ],
    },
}

module.exports = nextConfig
