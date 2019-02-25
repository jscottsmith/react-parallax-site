const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: false,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
});
