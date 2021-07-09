const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlPlugin = require('html-webpack-plugin')
// const util = require('util')
// read as json data
// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');

//todo dynamic loading
//todo dyanmic loading, extract component css to another file

const PROD_URL = '//localhost:5000/'
const DEV_URL = '/'
const ASSETS_PATH = 'assets/'
const CLIENT_PATH = path.resolve(__dirname, 'client')

const defaultCfg = {
  entry: {
    client: path.resolve(CLIENT_PATH, 'client-entry.tsx'),
    server: path.resolve(CLIENT_PATH, 'server-entry.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
    ]
  },
  output: {
    clean: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'assets/')
    },
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

module.exports = (env, argv) => {
  let config
  if (argv.mode === 'development') {
    const publicPath = `${DEV_URL}${ASSETS_PATH}`
    const clientEntry = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', defaultCfg.entry.client]
    defaultCfg.entry.client = clientEntry
    // htmlPluginCfg.publicPath = publicPath
    config = merge(defaultCfg, {
      mode: 'development',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader", options: { sourceMap: true } },
              { loader: "postcss-loader", options: { sourceMap: true } },
            ]
          }
        ],
      },
      output: {
        path: path.resolve(__dirname, '.dist/assets/'),
        filename: '[name].bundle.js',
        publicPath,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    })
  }
  if (argv.mode === 'production') {
    const publicPath = `${PROD_URL}${ASSETS_PATH}`
    config = merge(defaultCfg, {
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: "postcss-loader",
              }
            ]
          }
        ],
      },
      optimization: {
        minimizer: [
          new TerserPlugin({ /* additional options here */ }),
          new CssMinimizerPlugin(),
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].bundle.css'
        }),
      ],
      output: {
        path: path.resolve(__dirname, '.dist/assets/'),
        publicPath,
        filename: '[name].[contenthash].bundle.js',
      }
    })
  }
  return config;
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