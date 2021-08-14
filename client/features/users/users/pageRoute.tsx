import React from 'react'
import loadable from '@loadable/component'
import Loading from '../../../common/Loading'
import { delaySpan, timeout } from '../../../libs/util'

const doLoad = /* #__LOADABLE__ */ () => {
  return timeout(
    delaySpan(import(/* webpackChunkName: "users" */ './UsersList'))
  )
}

const component = loadable(doLoad, { fallback: <Loading /> })
const path = '/users'
const name = 'users'

export default {
  exact: true,
  component,
  path,
  name,
}
