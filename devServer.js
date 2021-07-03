const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')

async function createServer() {

  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })


  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl
    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      )
      const { render } = await vite.ssrLoadModule('/src/server-entry.tsx')

      const page = await vite.transformIndexHtml(url, template)
      const context = {}
      const appHtml = await render(url, context)
      const html = page.replace('<!--ssr-outlet-->', appHtml)
      res.status(200).set('Content-Type', 'text/html').end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })
  app.listen(3000)
}

createServer()