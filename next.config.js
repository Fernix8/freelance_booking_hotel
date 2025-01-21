const webpack = require('webpack');
const { parsed: env } = require('dotenv').config({
    path: '.env',
});

module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        webpack(config) {
            config.module.rules.push({});
            config.plugins.push(new webpack.EnvironmentPlugin(env));
            return config;
        },
        typescript: {
            ignoreBuildErrors: false,
        },
        reactStrictMode: true,
        i18n: {
            locales: ['en', 'vn'],
            defaultLocale: 'en',
            localeDetection: false,
        },
    };
    return nextConfig;
};
