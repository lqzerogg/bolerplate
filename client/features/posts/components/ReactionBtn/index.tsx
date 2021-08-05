import React from 'react'
import { Post } from '../../../../../models'
import { reactions, reaction } from './index.module.css'

const reactionEmoji: { [index: string]: string } = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  post: Post
}

export default function ReactionBtn({ post, className }: Props): JSX.Element {
  const $btns = Object.entries(post.reactions).map(([name, count]) => (
    <button key={name} type="button" className={reaction}>
      {reactionEmoji[name]} &nbsp; {count}
    </button>
  ))
  return <div className={`${className} ${reactions}`}>{$btns}</div>
}
