import React, { useCallback, useRef, RefObject } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ctn, ctnTitle } from './AddPostForm.module.css'
import PostForm, { FormInstance } from '../components/PostForm'
import { postAdded } from '../featureSlice'
import { User } from '../../../../models'

let id = 3

const postValue = { title: '', content: '', id: '', user: '', date: 0 }

export default function AddPostForm(): JSX.Element {
  const dispatch = useDispatch()
  const ref = useRef<FormInstance>() as RefObject<FormInstance>
  const users = useSelector((state: { users: User[] }) => state.users)

  const addPost = useCallback(
    function (title: string, content: string, user: string, date?: number) {
      dispatch(
        postAdded({
          id: `${id++}`,
          title,
          content,
          user,
          date: date || Date.now(),
        })
      )
      if (ref.current) {
        ref.current.clear()
      }
    },
    [dispatch]
  )

  return (
    <section className={ctn}>
      <h2 className={ctnTitle}>Add a new post</h2>
      <PostForm
        users={users}
        ref={ref}
        saveHandler={addPost}
        post={postValue}
      />
    </section>
  )
}
