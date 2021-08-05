import React from 'react'
import { useSelector } from 'react-redux'
import PostsList from '../components/PostsList'
import PostForm from './AddPostForm'
import { Post } from '../../../../models'
import { posts, postsTitle } from './index.module.css'

function Posts(): JSX.Element {
  const list = useSelector((state: { posts: Post[] }) => state.posts)
  return (
    <div className={posts}>
      <h1 className={postsTitle}>posts page</h1>
      <PostForm />
      <PostsList posts={list} />
    </div>
  )
}

export default Posts
