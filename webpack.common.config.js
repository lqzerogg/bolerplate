/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
// const util = require('util')
// read as json data
// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');

const CLIENT_PATH = path.resolve(__dirname, 'client')

module.exports = {
  entry: {
    client: [path.resolve(CLIENT_PATH, 'client-entry.tsx')],
    server: [path.resolve(CLIENT_PATH, 'server-entry.tsx')],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        use: [
          'thread-loader',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname, 'client'), path.resolve(__dirname, 'assets')],
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: [path.resolve(__dirname, 'client'), path.resolve(__dirname, 'assets')],
        type: 'asset/resource'
      },
    ]
  },
  output: {
    clean: true,
    pathinfo: false,
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@loadable\/component|react-hot-loader)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    }
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'assets/')
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(CLIENT_PATH, 'index.html'),
      inject: false,
      filename: '../index.html'
    }),
  ],
};
// load csv,tsv,xml as json
// other setting
// const defaultCfg = {
//   module: {
//     rules: [
//       {
//         test: /\.(csv|tsv)$/i,
//         use: ['csv-loader'],
//       },
//       {
//         test: /\.xml$/i,
//         use: ['xml-loader'],
//       },
//       {
//         test: /\.toml$/i,
//         type: 'json',
//         parser: {
//           parse: toml.parse,
//         },
//       },
//       {
//         test: /\.yaml$/i,
//         type: 'json',
//         parser: {
//           parse: yaml.parse,
//         },
//       },
//       {
//         test: /\.json5$/i,
//         type: 'json',
//         parser: {
//           parse: json5.parse,
//         },
//       },
//     ]
//   },
// };