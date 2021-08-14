import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../common/Loading'
import { delaySpan, timeout } from '../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(
    delaySpan(import(/* webpackChunkName: "details" */ './Details'))
  )
}

const component = loadable(doLoad, { fallback: <Loading /> })
const path = '/details'
const name = 'details'

export default {
  path,
  name,
  component,
}
