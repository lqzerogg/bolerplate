import React from 'react'
import path from 'path'
import serialize from 'serialize-javascript'
import { User } from '../types'
import { renderToString } from 'react-dom/server'
import { createStore, Reducer, Action } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { ChunkExtractor } from '@loadable/server'

const webStats = path.resolve('.dist/assets/loadable-stats.json')
const serverStats = path.resolve('.dist/server_assets/loadable-stats.json')

export function render(url: string, context: Record<string, never>): string {
  const nodeExtractor = new ChunkExtractor({
    statsFile: serverStats,
    entrypoints: ['client'],
  })
  const { default: App, appReducer } = nodeExtractor.requireEntrypoint(
    'client'
  ) as {
    default: React.FunctionComponent
    appReducer: Reducer<User | undefined, Action>
  }

  const extractor = new ChunkExtractor({
    statsFile: webStats,
    entrypoints: ['client'],
  })
  const store = createStore(appReducer)
  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  const content = renderToString(jsx)
  return renderHtml({
    scripts: extractor.getScriptTags(),
    styles: extractor.getStyleTags(),
    links: extractor.getLinkTags(),
    state: serialize(store.getState()),
    content,
  })
}

function renderHtml({
  scripts = '',
  styles = '',
  links = '',
  content = '',
  state = '',
}) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    ${styles}
    ${links}
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src *; child-src 'none'; script-src 'nonce-Id1DogTWj5e4R/tUH+9PNQ==' localhost:5000 'unsafe-eval' 'self'; prefetch-src localhost:5000 'self'; style-src localhost:5000 'unsafe-inline' 'self';worker-src localhost:5000 'self';font-src localhost:5000 'self';"
    />
    <title>{{title}}</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="text/javascript" nonce="Id1DogTWj5e4R/tUH+9PNQ==">
      window.__state__ = ${state}
    </script>
    ${scripts}
  </body>
</html>
  `
}
