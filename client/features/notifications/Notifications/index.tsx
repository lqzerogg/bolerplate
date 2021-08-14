import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import TimeAgo from '../../../common/TimeAgo'
import { Author, Notification } from '../../../../models'
import { selectAllUsers } from '../../users/featureSlice'
import { selectAllNotifications, allNotificationsRead } from '../featureSlice'
import {
  notiItem,
  notiMsg,
  isUnread,
  notisTitle,
  notisList,
  notisCtn,
  notiTime,
} from './index.module.css'

export default function Notifications(): JSX.Element {
  const users = useSelector(selectAllUsers)
  const notis = useSelector(selectAllNotifications)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(allNotificationsRead())
    }
  }, [dispatch])

  const $notis = notis.map((noti) => {
    const user =
      users.find((user) => user.id === noti.user) ||
      ({ name: 'unknown user' } as Author)
    return <NotificationItem key={noti.id} notification={noti} user={user} />
  })
  return (
    <section className={notisCtn}>
      <h2 className={notisTitle}>notifications</h2>
      <ol className={notisList}>{$notis}</ol>
    </section>
  )
}

function NotificationItem({
  notification,
  user,
}: {
  notification: Notification
  user: Author
}): JSX.Element {
  const itemClaxNames = classnames(notiItem, {
    [isUnread]: notification.read ? false : true,
  })
  return (
    <li className={itemClaxNames}>
      <div>
        <b>{user.name}</b>
        <TimeAgo className={notiTime} timestamp={notification.date} />
      </div>
      <div className={notiMsg}>{notification.message}</div>
    </li>
  )
}
