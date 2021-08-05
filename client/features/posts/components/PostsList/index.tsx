import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../../../../models'
import PostAuthor from '../../components/PostAuthor'
import TimeAgo from '../../components/TimeAgo'
import ReactionBtn from '../../components/ReactionBtn'
import {
  postAuthor,
  postLink,
  postExcerpt,
  postTitle,
  postContent,
  postReactions,
  postTime,
  postsList,
} from './index.module.css'

export default function PostsList({ posts }: { posts: Post[] }): JSX.Element {
  const $posts = posts
    .slice()
    .sort((prev, next) => (prev.date > next.date ? -1 : 1))
    .map((post) => {
      return (
        <article className={postExcerpt} key={post.id}>
          <h3 className={postTitle}>{post.title}</h3>
          <TimeAgo className={postTime} timestamp={post.date} />
          <p className={postContent}>{post.content.substring(0, 100)}</p>
          <PostAuthor className={postAuthor} uid={post.user} />
          <ReactionBtn className={postReactions} post={post} />
          <Link to={`/post/${post.id}`} className={postLink}>
            view it
          </Link>
        </article>
      )
    })
  return (
    <section className={postsList}>
      <h2>posts</h2>
      {$posts}
    </section>
  )
}
