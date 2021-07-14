import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function render(url: string, context: Record<string, never>): string {
  return ReactDomServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  )
}
