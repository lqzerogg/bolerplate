import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import axios from 'axios'
import { delaySpan } from '../../libs/util'
import { Post, STATUS } from '../../../models'

const initialState = {
  list: [],
  status: 'idel',
  error: undefined,
} as {
  list: Post[]
  status: STATUS
  error?: string
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function (): Promise<Post[]> {
    const response = await delaySpan(axios.get('/api/post/list'), 2000)
    return response.data
  }
)

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async function (post: Omit<Post, 'reactions' | 'id'>): Promise<Post> {
    const response = await delaySpan(axios.post('/api/post/add', post), 2000)
    return response.data
  }
)

export const key = 'posts'

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated(state, action: { type: string; payload: Partial<Post> }) {
      const existingPost = state.list.find(
        (post) => post.id === action.payload.id
      )
      Object.assign(existingPost || {}, action.payload)
    },
    reactionAdded(
      state,
      action: {
        type: string
        payload: { pid: string; rid: keyof Post['reactions'] }
      }
    ) {
      const existingPost = state.list.find(
        (post) => post.id === action.payload.pid
      )
      if (existingPost) {
        existingPost.reactions[action.payload.rid]++
      }
    },
  },
  extraReducers: (builder) => {
    // fetch list
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = STATUS.loading
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = STATUS.succeeded
      state.list = state.list.concat(action.payload)
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = STATUS.failed
      state.error = action.error.message
    })

    // add posts
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.list.push(action.payload)
    })
  },
})

type PostsState = ReturnType<typeof slice.reducer>
export type TypeState = {
  [key]: PostsState
}

export const { postUpdated, reactionAdded } = slice.actions

export const selectAllPosts = function (state: TypeState): Post[] {
  return state.posts.list
}
export const selectPostById = function (
  state: TypeState,
  id: string
): Post | undefined {
  return state.posts.list.find((post) => post.id === id)
}
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state: TypeState, uid: string): string => uid],
  (posts: Post[], uid: string) => posts.filter((post) => post.user === uid)
)

export default slice.reducer
