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

const CLIENT_PATH = path.resolve(__dirname, 'client')

const defaultCfg = {
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

module.exports = (env, argv) => {
  let config
  let envPath
  if (argv.mode === 'development') {
    envPath = './envs/development.env.js'
    const CONSTS = require(envPath)
    const publicPath = CONSTS.PUBLIC_PATH
    defaultCfg.entry.client.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
    // htmlPluginCfg.publicPath = publicPath
    config = merge(defaultCfg, {
      profile: true,
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
    envPath = './envs/production.env.js'
    const CONSTS = require(envPath)
    const publicPath = CONSTS.PUBLIC_PATH
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