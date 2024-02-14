/** @type {import('next').NextConfig} */
// const { withSuperjson } = require('next-superjson');
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
   i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'es',
   },
   trailingSlash: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
      ],
   },
   async headers() {
      return [
         {
            // matching all API routes
            source: '/api/:path*',
            headers: [
               { key: 'Access-Control-Allow-Credentials', value: 'true' },
               { key: 'Access-Control-Allow-Origin', value: '*' },
               {
                  key: 'Access-Control-Allow-Methods',
                  value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
               },
               {
                  key: 'Access-Control-Allow-Headers',
                  value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
               },
            ],
         },
      ];
   },
   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
         });
      }
      return config;
   },
};
module.exports = nextTranslate(nextConfig);
