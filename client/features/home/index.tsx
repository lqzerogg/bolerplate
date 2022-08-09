import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, TypeState } from './featureSlice'
import { fetchNotifications } from '../notifications/featureSlice'
import './index.css'
import logo from '@assets/logo.svg'

export default function Home(): JSX.Element {
  // const [count, setCount] = useState(0)
  const count = useSelector((state: TypeState) => state.counter.value)
  const dispatch = useDispatch()
  console.log('update home')

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => dispatch(increment())}>
          increate count: {count}
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          decreate count: {count}
        </button>
        <button type="button" onClick={() => dispatch(fetchNotifications())}>
          fetch new notifications
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
