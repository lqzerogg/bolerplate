import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../../common/Loading'
import { delaySpan, timeout } from '../../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(delaySpan(import(/* webpackChunkName: "posts" */ './Posts')))
}

const component = loadable(doLoad, { fallback: <Loading /> })
const path = '/posts'
const name = 'posts'

export default {
  exact: true,
  path,
  name,
  component,
}
