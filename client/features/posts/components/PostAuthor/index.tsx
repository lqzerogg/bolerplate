import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from '../../../users/featureSlice'

export default function PostAuthor({
  uid,
  className,
}: {
  uid: string
  className?: string
}): JSX.Element {
  const author = useSelector(selectAllUsers).find((user) => user.id === uid)
  return (
    <Link to={`/user/${uid}`} className={className}>
      {author ? author.name : 'unknown author'}
    </Link>
  )
}
