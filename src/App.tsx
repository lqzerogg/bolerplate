import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from '/assets/logo.svg';
import './App.css';

type Page = {
  name: string;
  path: string;
  component: React.JSXElementConstructor<any>;
};
function Home() {
  return <div>Home</div>;
}
function About() {
  return <div>About</div>;
}
function Detail() {
  return <div>Details</div>;
}
const pages: Page[] = [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Detail', path: '/detail', component: Detail },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <nav>
        <ul>
          {pages.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Switch>
        {pages.map(({ path, component: RouteComp }) => {
          return (
            <Route exact={path === '/'} key={path} path={path}>
              <RouteComp />:{path}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
