import React, { useState, useCallback, useRef, RefObject } from 'react'
import { unwrapResult } from '@reduxjs/toolkit'
import { STATUS } from '../../../../models'
import { useDispatch, useSelector } from 'react-redux'
import { ctn, ctnTitle } from './AddPostForm.module.css'
import PostForm, { FormInstance } from '../components/PostForm'
import { addNewPost } from '../featureSlice'
import { selectAllUsers } from '../../users/featureSlice'

const postValue = { title: '', content: '', id: '', user: '', date: 0 }

export default function AddPostForm(): JSX.Element {
  const dispatch = useDispatch()
  const ref = useRef<FormInstance>() as RefObject<FormInstance>
  const users = useSelector(selectAllUsers)
  const [status, setStatus] = useState(STATUS.idel)

  const addPost = useCallback(
    async function (
      title: string,
      content: string,
      user: string,
      date?: number
    ) {
      if (status === STATUS.loading) return
      try {
        setStatus(STATUS.loading)

        const resultAction = await dispatch(
          addNewPost({
            title,
            content,
            user,
            date: date || Date.now(),
          })
        )
        unwrapResult(resultAction as any)
        if (ref.current) {
          ref.current.clear()
        }
      } catch (e) {
        console.log(e)
      } finally {
        setStatus(STATUS.idel)
      }
    },
    [dispatch, status]
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
