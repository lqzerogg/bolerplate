/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')

module.exports = async function (app, req, res) {
  res.send(html).end()
}

function renderHtml({ scripts = '', styles = '', links = '', content = '' }) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    ${styles}
    ${links}
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src *; child-src 'none'; script-src 'nonce-Id1DogTWj5e4R/tUH+9PNQ==' localhost:5000 'self'; prefetch-src localhost:5000 'self'; style-src localhost:5000 'unsafe-inline' 'self';worker-src localhost:5000 'self';"
    />
    <title>{{title}}</title>
  </head>
  <body>
    <div id="root">
      ${content}
    </div>
    ${scripts}
  </body>
</html>
  `
}
