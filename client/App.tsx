import { hot } from 'react-hot-loader/root'
import React, { createContext } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { $routes, routes } from './routes'
import './App.css'
import ErrorBoundary from './components/ErrorBoudary'

const AppContext = createContext({ uid: 111 })
const User = { uid: 1234 }
const pageNames = ['home', 'details', 'posts']

export { AppContext }

function App(props: { location: Location }) {
  return (
    <div className="App">
      <nav className="tab-ctn">
        <div className="tabs">
          {routes
            .filter((page) => pageNames.indexOf(page.name) > -1)
            .sort((prev) => (prev.name === 'home' ? -1 : 1))
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
