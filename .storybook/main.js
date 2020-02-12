const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-options',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
  ],
  webpackFinal: async (config, { configType }) => {
    //add addon-storysource
    config.module.rules.push({
      test: [/\.stories\.js$/, /index\.js$/],
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre',
    });
    // allow SCSS
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    // setup URL Alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src")
    };
    return config;

  },
};
