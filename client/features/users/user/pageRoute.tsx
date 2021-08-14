import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../../common/Loading'
import { delaySpan, timeout } from '../../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(delaySpan(import(/* webpackChunkName: "user" */ './User')))
}

const component = loadable(doLoad, { fallback: <Loading /> })
const name = 'user'
const path = '/user/:uid'

export default {
  component,
  name,
  path,
}
