/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const defaultCfg = require('./webpack.common.config.js')

module.exports = (/* env, argv */) => {
  let envPath = './envs/development.env.js'
  const CONSTS = require(envPath)
  const publicPath = CONSTS.PUBLIC_PATH
  defaultCfg.entry.client.unshift(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  )
  // htmlPluginCfg.publicPath = publicPath
  return merge(defaultCfg, {
    profile: true,
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          // todo css not enable
          test: /\.css$/i,
          exclude: /\.module\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
          ],
        },
        {
          // todo css not enable
          test: /\.module\.css$/i,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                esModule: true,
                modules: {
                  namedExport: true,
                  localIdentName: '[name]__[local]',
                },
              },
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '.dist/assets/'),
      filename: '[name].bundle.js',
      publicPath,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(
        Object.assign(
          {
            PRDUCTION: false,
            DEVELOPMENT: true,
          },
          CONSTS.extractKeyValue(CONSTS)
        )
      ),
    ],
  })
}
