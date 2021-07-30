import React from 'react'
import {
  spinner,
  bubble1,
  bubble2,
  loadingWrapper,
  small,
  middle,
} from './index.module.css'

export default function Loading({
  size = 'small',
}: {
  size?: string
}): JSX.Element {
  let sizeClx
  switch (size) {
    case 'middle': {
      sizeClx = middle
      break
    }
    case 'large': {
      sizeClx = 'large'
      break
    }
    default: {
      sizeClx = small
    }
  }
  return (
    <div className={loadingWrapper}>
      <div className={`${spinner} ${sizeClx}`}>
        <div className={bubble1}></div>
        <div className={`${bubble1} ${bubble2}`}></div>
      </div>
    </div>
  )
}
