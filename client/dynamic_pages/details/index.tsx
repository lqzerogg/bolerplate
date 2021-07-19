import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../components/loading'
import { delaySpan, timeout } from '../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(
    delaySpan(import(/* webpackChunkName: "details" */ './Details'))
  )
}

const Details = loadable(doLoad, { fallback: <Loading /> })
const path = '/details'

function loadData(): Promise<void> {
  return new Promise((resolve) => {
    global.setTimeout(resolve, 2000)
  })
}

export default {
  path,
  name: 'details',
  component: Details,
  loadData,
}
