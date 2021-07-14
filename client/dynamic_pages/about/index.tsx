import React from 'react'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'

const About = loadable(
  () => import(/* webpackPrefetch: true */ './About')
) as React.FunctionComponent
const path = '/about'

// export default (
//   <Route key={path} path={path}>
//     <About />
//   </Route>
// )
export default {
  path,
  name: 'about',
  component: About,
}
