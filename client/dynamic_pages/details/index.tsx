import React from 'react'
import loadable from '@loadable/component'

const Details = loadable(
  () => import(/* webpackPrefetch: true */ './Details')
) as React.FunctionComponent
const path = '/details'

function loadData() {
  return new Promise((resolve) => {
    global.setTimeout(resolve, 2000)
  })
}

// export default (
//   <Route key={path} path={path}>
//     <Details />
//   </Route>
// )
export default {
  path,
  name: 'details',
  component: Details,
  loadData,
}
