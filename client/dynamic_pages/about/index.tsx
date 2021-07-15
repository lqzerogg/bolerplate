import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../components/loading'
import { delaySpan, timeout } from '../../libs/util'

function doLoad() {
  return timeout(
    delaySpan(
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: "about" */ './About'
      )
    )
  )
}

const About = loadable(doLoad, { fallback: <Loading /> })
const path = '/about'

export default {
  path,
  name: 'about',
  component: About,
}
