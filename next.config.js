/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [{
          source: '/admin',
          destination: '/admin/index.html',
          permanent: true
        }];
      }
}

module.exports = nextConfig
