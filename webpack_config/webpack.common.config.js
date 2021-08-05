/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { ROOT_PATH, CLIENT_PATH, ASSETS_PATH } = require('./paths')
// const StatsPlugin = require('stats-webpack-plugin')
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const util = require('util')
// read as json data
// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');

module.exports = (target) => {
  const config = {
    target,
    context: ROOT_PATH,
    externals: target === 'node' ? [nodeExternals()] : undefined,
    entry: {
      client: [
        path.resolve(
          CLIENT_PATH,
          `${target === 'web' ? 'client' : 'server'}-entry.tsx`
        ),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|js)$/,
          use: [
            'thread-loader',
            {
              loader: 'babel-loader',
              options: {
                caller: { target },
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          include: [CLIENT_PATH, ASSETS_PATH],
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          include: [CLIENT_PATH, ASSETS_PATH],
          type: 'asset/resource',
        },
      ],
    },
    output: {
      path: path.resolve(
        ROOT_PATH,
        target === 'web' ? '.dist/assets/' : '.dist/server_assets'
      ),
      libraryTarget: target === 'node' ? 'commonjs2' : undefined,
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true,
      pathinfo: false,
    },
    optimization: {
      runtimeChunk: target === 'web' ? 'single' : false,
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@loadable\/component|react-hot-loader|redux|react-redux|@reduxjs\/toolkit)/,
            // test: /[\\/]node_modules/,
            name: 'vendor',
            chunks: 'all',
            priority: 100,
          },
          posts: {
            // test(module) {
            //   if(module.resource&& module.resource.indexOf('features/posts') >= 0) {
            //     console.log('~~~~~~~', module.resource)
            //     return true
            //   }
            //   return false
            // },
            test: /[\\/]features[\\/]posts/,
            reuseExistingChunk: true,
            name: 'postschunk',
            priority: 0,
            enforce: true,
            // chunks: 'all',
          },
          // postscss: {
          //   // test(module) {
          //   //   if(module.resource&& module.resource.indexOf('features/posts') >= 0) {
          //   //     console.log('~~~~~~~', module.resource)
          //   //     return true
          //   //   }
          //   //   return false
          //   // },
          //   // test: /[\\/]features[\\/]posts[\w\\/-_]+\.css$/,
          //   reuseExistingChunk: true,
          //   type: "css/mini-extract",
          //   name: 'postscss',
          //   enforce: true,
          //   priority: 1,
          //   // chunks: 'all',
          // }
        },
      },
    },
    resolve: {
      alias: {
        '@assets': ASSETS_PATH,
      },
      modules: [path.resolve(ROOT_PATH, 'node_modules')],
      symlinks: false,
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new LoadablePlugin({ writeToDisk: true }),
      // new StatsPlugin('stats.json', {
      //   chunkModules: true,
      // }),
      // new WorkboxPlugin.GenerateSW({
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
    ],
  }
  return config
}
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
