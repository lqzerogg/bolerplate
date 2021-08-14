import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import TimeAgo from '../../../common/TimeAgo'
import ReactionBtn from '../components/ReactionBtn'
import {
  ctn,
  reactions,
  post,
  title,
  subWrp,
  content,
  link,
  author,
  time,
} from './index.module.css'
import { TypeState, selectPostById } from '../featureSlice'

export default function Post(): JSX.Element {
  const { pid } = useParams() as { pid: string }
  const postData = useSelector((state: TypeState) => selectPostById(state, pid))
  if (!postData) {
    throw new Error(`could not find post: ${pid}`)
  }
  return (
    <section className={ctn}>
      <article className={post}>
        <h2 className={title}>{postData.title}</h2>
        <p className={subWrp}>
          by &nbsp;
          <PostAuthor className={author} uid={postData.user} />
          <TimeAgo className={time} timestamp={postData.date} />
        </p>
        <p className={content}>{postData.content}</p>
        <ReactionBtn className={reactions} post={postData} />
        <Link to={`/edit/post/${postData.id}`} className={link}>
          edit it
        </Link>
      </article>
    </section>
  )
}
