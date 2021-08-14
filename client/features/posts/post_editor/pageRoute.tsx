import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../../common/Loading'
import { delaySpan, timeout } from '../../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(
    delaySpan(import(/* webpackChunkName: "post_editor" */ './PostEditor'), 0)
  )
}

const component = loadable(doLoad, { fallback: <Loading /> })
const path = '/edit/post/:pid'
const name = 'post editor'

export default {
  path,
  name,
  component,
}
