import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  ForwardedRef,
} from 'react'
import { format } from 'date-fns'
import {
  ctn,
  postTitle,
  postUser,
  postDate,
  postContent,
  saveBtn,
  postLabel,
} from './index.module.css'
import { Post } from '../../../../../models'
import { Author } from '../../../users/featureSlice'

type TypeProp = {
  saveHandler: (
    title: string,
    content: string,
    user: string,
    date: number
  ) => void
  post: Omit<Post, 'reactions'>
  users: Author[]
}

export interface FormInstance {
  clear(): void
}

function PostForm(
  { saveHandler, post, users }: TypeProp,
  ref: ForwardedRef<FormInstance>
): JSX.Element {
  const [titleState, setTitleState] = useState(post.title)
  const [contentState, setContentState] = useState(post.content)
  const [uid, setUid] = useState(post.user || (users[0] && users[0].id))
  const [dateState, setDateState] = useState(
    format(post.date || Date.now(), 'yyyy-MM-dd')
  )
  const savePost = useCallback(() => {
    let date = 0
    try {
      date = Date.parse(dateState)
    } catch (e) {
      date = Date.now()
    }
    saveHandler(titleState, contentState, uid, date)
  }, [titleState, contentState, saveHandler, uid, dateState])

  useImperativeHandle(
    ref,
    () => ({
      clear: () => {
        setTitleState('')
        setContentState('')
        setDateState(format(Date.now(), 'yyyy-MM-dd'))
        setUid(users[0].id)
      },
    }),
    [setTitleState, setContentState, setUid, users]
  )

  const $options = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <form className={ctn}>
      <label htmlFor="postTitle" className={postLabel}>
        Post title:
      </label>
      <input
        type="text"
        className={postTitle}
        id="postTitle"
        name="postTitle"
        value={titleState}
        onChange={(e) => setTitleState(e.target.value)}
      />
      <label htmlFor="postDate" className={postLabel}>
        Post date:
      </label>
      <input
        type="text"
        className={postDate}
        id="postDate"
        name="postDate"
        value={dateState}
        onChange={(e) => setDateState(e.target.value)}
      />
      <label htmlFor="postAuthor" className={postLabel}>
        Author:
      </label>
      <select
        name="postAuthor"
        id="postAuthor"
        className={postUser}
        onChange={(e) => setUid(e.target.value)}
      >
        {$options}
      </select>
      <label htmlFor="postContent" className={postLabel}>
        Post content:
      </label>
      <textarea
        name="postContent"
        className={postContent}
        id="postContent"
        value={contentState}
        onChange={(e) => setContentState(e.target.value)}
      ></textarea>
      <button type="button" className={saveBtn} onClick={savePost}>
        save
      </button>
    </form>
  )
}

export default forwardRef(PostForm)
