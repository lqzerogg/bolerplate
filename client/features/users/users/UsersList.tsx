import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from '../featureSlice'
import { userItem, usersList, listCtn } from './UsersList.module.css'

export default function UsersList(): JSX.Element {
  const users = useSelector(selectAllUsers)

  const $users = users.map((user) => (
    <li key={user.id} className={userItem}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ))
  return (
    <section className={listCtn}>
      <h2>users:</h2>
      <ul className={usersList}>{$users}</ul>
    </section>
  )
}
