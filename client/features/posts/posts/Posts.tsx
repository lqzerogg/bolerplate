import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostsList from '../components/PostsList'
import Loading from '../../../common/Loading'
import { STATUS } from '../../../../models'
import PostForm from './AddPostForm'
import { posts, postsTitle } from './index.module.css'
import { selectAllPosts, fetchPosts, TypeState } from '../featureSlice'
import { fetchNotifications } from '../../notifications/featureSlice'

function Posts(): JSX.Element {
  const list = useSelector(selectAllPosts)
  const status = useSelector((state: TypeState) => state.posts.status)
  const errMessage = useSelector((state: TypeState) => state.posts.error)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === STATUS.idel) {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])
  useEffect(() => {
    dispatch(fetchNotifications())
  }, [dispatch])

  let $posts
  if (status === STATUS.succeeded) {
    $posts = <PostsList posts={list} />
  } else if (status === STATUS.failed) {
    throw new Error(errMessage)
  } else {
    $posts = <Loading />
  }

  return (
    <div className={posts}>
      <h1 className={postsTitle}>posts page</h1>
      <PostForm />
      {$posts}
    </div>
  )
}

export default Posts
