import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { routes, pages } from './routes'
import './App.css'

function App(props: { location: Location }) {
  return (
    <div className="App">
      <nav className="tab-ctn">
        <div className="tabs">
          {pages.map(({ name, path }) => {
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
      <Switch>{routes}</Switch>
    </div>
  )
}

export default hot(withRouter(App))