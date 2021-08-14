import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postUpdated, TypeState, selectPostById } from '../featureSlice'
import PostForm from '../components/PostForm'
import { ctn, ctnTitle } from './index.module.css'
import { User } from '../../../../models'

export default function PostEditor(): JSX.Element {
  const { pid } = useParams() as { pid: string }
  const post = useSelector((state: TypeState) => selectPostById(state, pid))
  const users = useSelector((state: { users: User[] }) => state.users)
  if (!post) {
    throw new Error('Post not found')
  }

  const dispatch = useDispatch()
  const history = useHistory()

  function savePost(
    title: string,
    content: string,
    user: string,
    date: number
  ) {
    if (title && content) {
      dispatch(postUpdated({ id: pid, title, content, user, date }))
      history.push(`/post/${pid}`)
    }
  }

  return (
    <section className={ctn}>
      <h2 className={ctnTitle}>edit post</h2>
      <PostForm users={users} post={post} saveHandler={savePost} />
    </section>
  )
}
