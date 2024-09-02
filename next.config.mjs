/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fiotec.fiocruz.br',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
