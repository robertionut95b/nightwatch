module.exports = {
    images: {
        domains: ['m.media-amazon.com']
    },
    env: {
        OMDB_API_URL: process.env.OMDB_API_URL,
        OMDB_API_KEY: process.env.OMDB_API_KEY,
        USE_SSL: process.env.USE_SSL,
    },
    webpack: (config, options) => {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    },
}