module.exports = {
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/kharoxe',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/kharoxe',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/277128564019560450',
        permanent: true,
      },
      
    ]
  },
}
