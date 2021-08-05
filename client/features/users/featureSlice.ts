import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

export const key = 'users'

const usersSlice = createSlice({
  name: key,
  initialState,
  reducers: {},
})

export default usersSlice.reducer
type UsersState = ReturnType<typeof usersSlice.reducer>
export type TypeState = {
  [key]: UsersState
}
