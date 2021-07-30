import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, Reducer, Action, Store } from 'redux'
import { Provider } from 'react-redux'
import { User } from '../types/index'
import { loadableReady } from '@loadable/component'
import './index.css'
import App from './App'
import appReducer from './reducer'

global.__webpack_nonce__ = 'Id1DogTWj5e4R/tUH+9PNQ==' // tslint-disable-line
const preloadState: User = global.__state__ as User
delete global.__state__

const store = createStore(appReducer, preloadState)

loadableReady(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
})

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register(`${PUBLIC_PATH}service-worker.js`).then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }

if (module.hot) {
  module.hot.accept()
}
