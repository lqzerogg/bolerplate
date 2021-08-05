import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import TimeAgo from '../components/TimeAgo'
import {
  ctn,
  post,
  title,
  content,
  link,
  author,
  time,
} from './index.module.css'
import { TypeState } from '../featureSlice'

export default function Post(): JSX.Element {
  const { pid } = useParams() as { pid: string }
  const postData = useSelector((state: TypeState) =>
    state.posts.find((post) => post.id === pid)
  )
  if (!postData) {
    throw new Error(`could not find post: ${pid}`)
  }
  return (
    <section className={ctn}>
      <article className={post}>
        <h2 className={title}>{postData.title}</h2>
        <p className={content}>{postData.content}</p>
        <TimeAgo className={time} timestamp={postData.date} />
        <PostAuthor className={author} uid={postData.user} />
        <Link to={`/edit/post/${postData.id}`} className={link}>
          edit it
        </Link>
      </article>
    </section>
  )
}
