import { createSlice } from '@reduxjs/toolkit'
import { Post } from '../../../models'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    user: '1',
    date: new Date('2019-12-12').getTime(),
    reactions: {
      thumbsUp: 0,
      hooray: 1,
      heart: 2,
      rocket: 3,
      eyes: 4,
    },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    user: '2',
    date: new Date('2021-12-12').getTime(),
    reactions: {
      thumbsUp: 3,
      hooray: 4,
      heart: 10,
      rocket: 3,
      eyes: 4,
    },
  },
]

export const key = 'posts'

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(
      state,
      action: { type: string; payload: Omit<Post, 'reactions'> }
    ) {
      state.push(
        Object.assign(
          {
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
          action.payload
        )
      )
    },
    postUpdated(state, action: { type: string; payload: Partial<Post> }) {
      const existingPost = state.find((post) => post.id === action.payload.id)
      Object.assign(existingPost || {}, action.payload)
    },
  },
})

export const { postAdded, postUpdated } = slice.actions
export const selector = function (state: { posts: Post[] }): Post[] {
  return state.posts
}
export default slice.reducer
type PostsState = ReturnType<typeof slice.reducer>
export type TypeState = {
  [key]: PostsState
}
