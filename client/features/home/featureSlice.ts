import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HomeState {
  value: number
}
export const key = 'counter'

export const homeSlice = createSlice({
  name: key,
  initialState: { value: 0 },
  reducers: {
    increment: (state: HomeState) => {
      state.value += 1
    },
    decrement: (state: HomeState) => {
      state.value -= 1
    },
    incrementByAmount: (state: HomeState, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = homeSlice.actions
export default homeSlice.reducer
type CounterState = ReturnType<typeof homeSlice.reducer>
export type TypeState = {
  [key]: CounterState
}
