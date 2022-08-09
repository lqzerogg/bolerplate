import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { Link, Switch, withRouter } from 'react-router-dom'
import { $routes, routes } from './routes'
import './App.css'
import ErrorBoundary from './common/ErrorBoudary'
import { fetchUsers } from './features/users/featureSlice'
import {
  fetchNotifications,
  selectAllNotifications,
} from './features/notifications/featureSlice'

const AppContext = createContext({ uid: 111 })
const User = { uid: 1234 }
const pageNames = ['home', 'details', 'posts']

const linksData = routes
  .filter((page) => pageNames.indexOf(page.name) > -1)
  .sort((prev) => (prev.name === 'home' ? -1 : 1))

export { AppContext }

function NotiIcon({ num = 0 }: { num: number }): JSX.Element {
  const route = routes.find((route) => route.name === 'notifications')
  const path = (route && route.path) || ''
  const numClaxNames = classnames('noti-num', {
    'is-show': num > 0 ? true : false,
  })
  return (
    <section className="noti-icon">
      <Link to={path} className="noti-link">
        <span className="icon-messagecenter iconfont noti-text"></span>
      </Link>
      <span className={numClaxNames}>{num}</span>
    </section>
  )
}
function App(props: { location: Location }) {
  console.log('hot reload without react-hot-loader~~~~')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchNotifications())
  }, [dispatch])
  const notis = useSelector(selectAllNotifications)
  let $notiIcon: JSX.Element | null
  if (props.location.pathname.indexOf('/notifications') >= 0) {
    $notiIcon = null
  } else {
    let count = 0
    notis.forEach((noti) => {
      count += noti.read ? 0 : 1
    })
    $notiIcon = <NotiIcon num={count} />
  }
  return (
    <div className="App">
      {$notiIcon}
      <div className="fetch-btn" onClick={() => dispatch(fetchNotifications())}>
        fetch
      </div>
      <nav className="tab-ctn">
        <div className="tabs">
          {linksData.map(({ name, path }) => {
            return (
              <Link
                className={`tab ${
                  props.location.pathname === path ? 'is-active' : ''
                }`}
                key={path}
                to={path}
              >
                {name}
              </Link>
            )
          })}
        </div>
      </nav>
      <AppContext.Provider value={User}>
        <ErrorBoundary>
          <Switch>{$routes}</Switch>
        </ErrorBoundary>
      </AppContext.Provider>
    </div>
  )
}

export default withRouter(App as React.FunctionComponent)

// 1 3 nexttick 2