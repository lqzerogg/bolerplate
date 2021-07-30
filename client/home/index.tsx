import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logo from '@assets/logo.svg'

function Home(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          hello world! count: {count}
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
        {' | '}
        <Link to="/about/1234" className="App-link">
          go to visit 1234{' '}
        </Link>
      </p>
    </header>
  )
}

// export default (
//   <Route exact key="/" path="/">
//     <Home />
//   </Route>
// );

export default {
  path: '/',
  name: 'home',
  exact: true,
  component: Home,
}
