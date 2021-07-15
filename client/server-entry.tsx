import React from 'react'
import path from 'path'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ChunkExtractor } from '@loadable/server'
import App from './App'
const statsFile = path.resolve('../.dist/assets/loadable-stats.json')

export function render(
  url: string,
  context: Record<string, never>
): {
  scripts: string
  styles: string
  links: string
  content: string
} {
  const extractor = new ChunkExtractor({ statsFile })
  const jsx = extractor.collectChunks(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  )
  const scripts = extractor.getScriptTags()
  const styles = extractor.getStyleTags()
  const links = extractor.getLinkTags()
  const content = ReactDomServer.renderToString(jsx)
  return {
    scripts,
    styles,
    links,
    content,
  }
}
