import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../components/Loading'
import { delaySpan, timeout } from '../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(delaySpan(import(/* webpackChunkName: "about" */ './About')))
}

const component = loadable(doLoad, { fallback: <Loading /> })
const path = '/about/:uid'
const name = 'about'

export default {
  path,
  name,
  component,
}
