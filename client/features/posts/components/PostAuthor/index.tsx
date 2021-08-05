import React from 'react'
import { useSelector } from 'react-redux'
import { User } from '../../../../../models'

export default function PostAuthor({
  uid,
  className,
}: {
  uid: string
  className?: string
}): JSX.Element {
  const author = useSelector((state: { users: User[] }) =>
    state.users.find((user) => user.id === uid)
  )
  return (
    <span className={className}>{author ? author.name : 'unknown author'}</span>
  )
}
