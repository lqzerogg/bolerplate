/* eslint-disable @typescript-eslint/no-var-requires */
const postcssImport = require('postcss-import')
const mixins = require('postcss-mixins')
const presets = require('postcss-preset-env')
const cssnano = require('cssnano')
module.exports = {
  map: false,
  plugins: [
    postcssImport,
    mixins,
    presets({
      stage: 1,
      browsers: '> 0.5%, last 2 versions, not dead',
    }),
    cssnano,
  ],
}
