import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import qs from 'qs'
import { Notification, STATUS } from '../../../models'

export const key = 'notifications'
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNofitications',
  async (_, { getState }) => {
    const latestOne = selectAllNotifications(getState() as TypeState)[0]
    const before = (latestOne && latestOne.date) || undefined
    const response = await axios.get(
      `/api/notification/list?${qs.stringify({ before })}`
    )
    return response.data
  }
)

const initialState = {
  list: [],
  status: STATUS.idel,
  error: undefined,
} as {
  list: Notification[]
  status: STATUS
  error: string | undefined
}

const slice = createSlice({
  name: key,
  initialState,
  reducers: {
    allNotificationsRead(state) {
      state.list.forEach((noti) => (noti.read = true))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.status = STATUS.loading
    })
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.list = state.list.concat(action.payload)
      state.list.sort((prev, next) => (prev.date > next.date ? -1 : 1))
    })
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      state.error = action.error.message
    })
  },
})

type NotificationsState = ReturnType<typeof slice.reducer>

export const { allNotificationsRead } = slice.actions

export default slice.reducer

export type TypeState = {
  [key]: NotificationsState
}
export const selectAllNotifications = (state: TypeState): Notification[] =>
  state.notifications.list
