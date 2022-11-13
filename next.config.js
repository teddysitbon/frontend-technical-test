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
    API_URL: 'http://localhost:3005',
  },
};
