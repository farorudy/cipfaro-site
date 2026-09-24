/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/ateliers',
        destination: 'https://ateliers-numeriques-cip-faro.rudyfaro.chatgpt.site',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
