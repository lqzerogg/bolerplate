import React from 'react'
import loadable from '@loadable/component'
import Loading from '../common/Loading'
import { delaySpan, timeout } from './util'

export function dynamicPageWrp(
  dynamicImporting: Promise<React.FunctionComponent>
): ReturnType<typeof loadable> {
  const doLoad = /* #__LOADABLE__ */ () => {
    return timeout(delaySpan(dynamicImporting))
  }
  return loadable(doLoad, { fallback: <Loading /> })
}
