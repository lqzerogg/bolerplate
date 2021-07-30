/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const getDefault = require('./webpack.common.config')

function getConfig(target) {
  const defaultCfg = getDefault(target)
  let ENVPATH = '../envs/production.env.js'
  const CONSTS = require(ENVPATH)
  const publicPath = CONSTS.PUBLIC_PATH
  const config = merge(defaultCfg, {
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
          test: /\.module\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
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
    plugins: [
      new webpack.DefinePlugin(
        Object.assign(
          {
            PRDUCTION: true,
            SSR: target === 'node' ? true : false,
            DEVELOPMENT: false,
          },
          CONSTS.extractKeyValue(CONSTS)
        )
      ),
      new MiniCssExtractPlugin({
        filename: `[name].${
          target === 'web' ? '[contenthash].' : ''
        }bundle.css`,
      }),
    ],
    output: {
      publicPath,
      filename:
        target === 'web'
          ? '[name].[contenthash].bundle.js'
          : '[name].bundle.js',
    },
  })

  if (target === 'web') {
    config.optimization.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        /* additional options here */
      }),
    ]
  }
  return config
}

module.exports = [getConfig('web'), getConfig('node')]
