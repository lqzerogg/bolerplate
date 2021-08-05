import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../../components/Loading'
import { delaySpan, timeout } from '../../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(delaySpan(import(/* webpackChunkName: "post" */ './Post'), 0))
}

const component = loadable(doLoad, { fallback: <Loading /> })
const path = '/post/:pid'
const name = 'post'

export default {
  path,
  name,
  component,
}
