import React from 'react'
import home from './home'
import { Route, matchPath } from 'react-router-dom'

// require all dynamic pages
const ctx = require.context('./dynamic_pages', true, /index\.tsx/)
const routes: Page[] = ctx.keys().map((key) => ctx(key).default)

type Page = {
  name: string
  component: React.FunctionComponent
  path: string
  exact?: boolean
}

// require all static pages
routes.unshift(home)
// const pages: Page[] = [
//   home,
//   about,
//   details,
// ];

const $routes: JSX.Element[] = routes.map((page) => {
  return (
    <Route key={page.path} path={page.path} exact={page.exact}>
      <page.component />
    </Route>
  )
})

export { routes, $routes }
