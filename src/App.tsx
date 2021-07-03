import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from '/assets/logo.svg';
import './App.css';

type Page = {
  name: string;
  path: string;
  component: React.ReactElement;
};
const pages: Page[] = [
  { name: 'Home', path: '/', component: <div>Home</div> },
  { name: 'About', path: '/about', component: <div>about</div> },
  { name: 'Detail', path: '/detail', component: <div>details</div> },
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
        <ul>{pages.map(({ name, path }) => {})}</ul>
      </nav>
    </div>
  );
}

export default App;
