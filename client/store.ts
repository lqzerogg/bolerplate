import { configureStore } from '@reduxjs/toolkit'

// load all the slices in features folder
const ctx = require.context('./features', true, /featureSlice\.ts/)
type Reducers = {
  [key: string]: () => unknown
}
const reducer: Reducers = {}
ctx.keys().map((key) => {
  reducer[ctx(key).key] = ctx(key).default
})

const store = configureStore({ reducer })

export default store

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
