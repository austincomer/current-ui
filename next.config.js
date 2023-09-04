/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/overview/introduction',
        permanent: true,
      },
    ]
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')({
  // ...
  options: {
    providerImportSource: '@mdx-js/react',
  },
})
module.exports = withMDX(nextConfig)
