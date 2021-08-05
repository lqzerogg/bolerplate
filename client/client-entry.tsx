import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import { User } from '../types/index'
import { loadableReady } from '@loadable/component'
import store from './store'
import App from './App'
// import appReducer from './reducer'

global.__webpack_nonce__ = 'Id1DogTWj5e4R/tUH+9PNQ==' // tslint-disable-line
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// const preloadState: User = global.__state__ as User
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// delete global.__state__
// // const store = createStore(appReducer, preloadState)

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
