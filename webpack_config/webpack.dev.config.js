/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const getDefault = require('./webpack.common.config.js')

let ENVPATH = '../envs/development.env.js'
const CONSTS = require(ENVPATH)
const publicPath = CONSTS.PUBLIC_PATH

function getConfig(target) {
  const defaultCfg = getDefault(target)

  const config = merge(defaultCfg, {
    // profile: true,
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          // todo css not enable
          test: /\.css$/i,
          exclude: /\.module\.css$/,
          use: [
            target === 'web'
              ? { loader: 'style-loader' }
              : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
          ],
        },
        {
          // todo css not enable
          test: /\.module\.css$/i,
          use: [
            target === 'web'
              ? { loader: 'style-loader' }
              : MiniCssExtractPlugin.loader,
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
      filename: '[name].bundle.js',
      publicPath,
    },
    plugins: [
      new webpack.DefinePlugin(
        Object.assign(
          {
            PRDUCTION: false,
            DEVELOPMENT: true,
            SSR: target === 'node' ? true : false,
          },
          CONSTS.extractKeyValue(CONSTS)
        )
      ),
    ],
  })

  if (target === 'web') {
    config.entry.client.unshift(
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
    )
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  } else {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      })
    )
  }
  return config
}

module.exports = [getConfig('web'), getConfig('node')]
