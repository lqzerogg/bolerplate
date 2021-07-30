import { hot } from 'react-hot-loader/root'
import React, { createContext } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { $routes, routes } from './routes'
import './App.css'
import ErrorBoundary from './components/errorBoudary'

const AppContext = createContext({ uid: 111 })
const User = { uid: 1234 }

export { AppContext }

function App(props: { location: Location }) {
  return (
    <div className="App">
      <nav className="tab-ctn">
        <div className="tabs">
          {routes
            .filter((page) => page.name !== 'about')
            .map(({ name, path }) => {
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

export default hot(withRouter(App as React.FunctionComponent))
