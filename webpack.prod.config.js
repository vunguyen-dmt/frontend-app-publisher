const { createConfig } = require('@edx/frontend-build');

const config = createConfig('webpack-prod');

config.module.rules[0].exclude = /node_modules\/(?!(tinymce-language-selector|@edx))/;

module.exports = config;