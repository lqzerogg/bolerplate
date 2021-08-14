import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { selectAllUsers, TypeState as UsersState } from '../featureSlice'
import {
  TypeState as PostsState,
  selectPostsByUser,
} from '../../posts/featureSlice'
import { userCtn, postsList, postLink } from './User.module.css'

export default function User(): JSX.Element {
  const { uid } = useParams() as { uid: string }
  const user = useSelector((state: UsersState) =>
    selectAllUsers(state).find((user) => user.id === uid)
  )
  const posts = useSelector((state: PostsState) =>
    selectPostsByUser(state, uid)
  )
  const $post = posts.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`} className={postLink}>
        {post.title}
      </Link>
    </li>
  ))
  if (!user) throw new Error('User not found')
  return (
    <section className={userCtn}>
      <h2>{user.name}</h2>
      <ul className={postsList}>{$post}</ul>
    </section>
  )
}
