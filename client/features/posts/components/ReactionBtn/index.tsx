import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Post } from '../../../../../models'
import { reactionAdded } from '../../featureSlice'
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
  const dispatch = useDispatch()
  const toClick = useCallback(
    (e) => {
      if (e.target.dataset.reaction) {
        dispatch(
          reactionAdded({ pid: post.id, rid: e.target.dataset.reaction })
        )
      }
    },
    [post, dispatch]
  )

  const $btns = Object.entries(post.reactions).map(([name, count]) => {
    return (
      <button
        data-reaction={name}
        key={name}
        type="button"
        className={reaction}
      >
        {reactionEmoji[name]} &nbsp; {count}
      </button>
    )
  })
  return (
    <div onClick={toClick} className={`${className} ${reactions}`}>
      {$btns}
    </div>
  )
}
