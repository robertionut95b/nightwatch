module.exports = {
  images: {
    domains: ['m.media-amazon.com'],
  },
  env: {
    OMDB_API_URL: process.env.OMDB_API_URL,
    OMDB_API_KEY: process.env.OMDB_API_KEY,
    API_GRAPHQL_URL: process.env.API_GRAPHQL_URL,
    APP_SITE_NAME: process.env.APP_SITE_NAME,
  },
  webpack: (config, options) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};