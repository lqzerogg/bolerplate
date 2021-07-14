/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const express = require('express')

async function createServer() {

  const app = express()

  //dev mod
  if(true) {
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpack = require('webpack')
    const config = require('../webpack.dev.config.js')({}, { mode: 'development' })
    const compiler = webpack(config)
    const hotMiddleware = require('webpack-hot-middleware')
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    }))
    app.use(hotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }))
    app.get('/', async (req, res) => {
      const html = fs.readFileSync(path.resolve(__dirname, '../.dist/index.html'), { encoding: 'utf8' })
      res.send(html).end()
    })
  }


  app.listen(3000, () => {
    console.log('Server listening 3000')
  })
}

createServer()