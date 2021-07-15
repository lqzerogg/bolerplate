/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const defaultCfg = require('./webpack.common.config')

module.exports = (/* env, argv */) => {
  let envPath = './envs/production.env.js'
  const CONSTS = require(envPath)
  const publicPath = CONSTS.PUBLIC_PATH
  return merge(defaultCfg, {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
            },
          ],
        },
        {
          // todo css not enable
          test: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                esModule: true,
                modules: {
                  namedExport: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            { loader: 'postcss-loader' },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          /* additional options here */
        }),
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].bundle.css',
      }),
      new webpack.DefinePlugin(
        Object.assign(
          {
            PRDUCTION: true,
            DEVELOPMENT: false,
          },
          CONSTS.extractKeyValue(CONSTS)
        )
      ),
    ],
    output: {
      path: path.resolve(__dirname, '.dist/assets/'),
      publicPath,
      filename: '[name].[contenthash].bundle.js',
    },
  })
}
