import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { STATUS, Author } from '../../../models'

const initialState = { list: [], status: STATUS.idel, error: undefined } as {
  list: Author[]
  status: STATUS
  error?: string
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (): Promise<Author[]> => {
    const response = await axios.get('/api/users')
    return response.data
  }
)

export const key = 'users'

const usersSlice = createSlice({
  name: key,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = STATUS.succeeded
      state.list = state.list.concat(action.payload)
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = STATUS.loading
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = STATUS.failed
      state.error = action.error.message
    })
  },
})

export default usersSlice.reducer
type UsersState = ReturnType<typeof usersSlice.reducer>
export type TypeState = {
  [key]: UsersState
}

export const selectAllUsers = (state: TypeState): Author[] => state.users.list
