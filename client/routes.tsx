import React from 'react'
import home from './home'
import { Route } from 'react-router-dom'

type Page = {
  name: string
  path: string
  component: React.FunctionComponent
}
// require all dynamic pages
const ctx = require.context('./dynamic_pages', true, /index\.tsx/)
const pages: Page[] = ctx.keys().map((key) => ctx(key).default)

// require all static pages
pages.unshift(home)
// const pages: Page[] = [
//   home,
//   about,
//   details,
// ];

const routes: JSX.Element[] = pages.map((page) => (
  <Route
    key={page.path}
    path={page.path}
    exact={page.path === '/' ? true : false}
  >
    <page.component />
  </Route>
))

export { pages, routes }
