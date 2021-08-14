import express from 'express'
import webpackCfg from '../webpack_config/webpack.dev.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import hotMiddleware from 'webpack-hot-middleware'
import { render } from './render'
import setApi from './api'

async function createServer() {
  const app = express()

  app.use(express.json())

  setApi(app)

  //dev mod
  if (process.env.NODE_ENV !== 'production') {
    const clientCfg = webpackCfg[0] as unknown as webpack.Configuration
    const compiler = webpack(clientCfg)
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: clientCfg.output && (clientCfg.output.publicPath as string),
        writeToDisk: true,
      })
    )
    app.use(
      hotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
      })
    )

    const serverCfg = webpackCfg[1] as unknown as webpack.Configuration
    const serverAssetsCompiler = webpack(serverCfg)
    serverAssetsCompiler.watch(
      {
        aggregateTimeout: 300,
        poll: undefined,
      },
      (err /*, stats*/) => {
        // console.log(stats)
        if (err) {
          console.error(err)
        }
      }
    )
  }

  app.get('*', (req, res) => {
    res.send(render(req.url, {})).end()
  })

  app.listen(3000, () => {
    console.log('Server listening 3000')
  })
}

createServer()
export default {}
