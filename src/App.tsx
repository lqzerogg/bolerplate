import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { routes, pages } from './routes';
import './App.css';

function App(props: any) {
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
            );
          })}
        </div>
      </nav>
      <Switch>{routes}</Switch>
    </div>
  );
}

export default withRouter(App);
