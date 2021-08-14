import React from 'react'
import { formatDistanceToNow } from 'date-fns'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  timestamp: number
}

export default function TimeAgo({ timestamp, ...attrs }: Props): JSX.Element {
  let timeAgo = ''
  if (!timestamp) {
    timestamp = Date.now()
  }
  const date = new Date(timestamp)
  timeAgo = `${formatDistanceToNow(date)} ago`
  return <span {...attrs}>&nbsp; {timeAgo}</span>
}
