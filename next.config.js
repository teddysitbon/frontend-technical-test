module.exports = {
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: false,
    styledComponents: true,
  },
  env: {
    SWAGGER_API_URL: 'http://localhost:3005',
  },
};
