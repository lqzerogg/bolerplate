import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../components/loading'
import { delaySpan, timeout } from '../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(delaySpan(import(/* webpackChunkName: "about" */ './About')))
}

const About = loadable(doLoad, { fallback: <Loading /> })
const path = '/about/:uid'

export default {
  path,
  name: 'about',
  component: About,
}
