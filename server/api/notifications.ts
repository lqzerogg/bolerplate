import express from 'express'
import clone from 'clone'

let id = 0
export function getNotifications(
  req: express.Request,
  res: express.Response
): void {
  let before: number = req.query.before as unknown as number
  const notiModel = {
    id: '0',
    read: false,
    date: Date.now(),
    user: '1',
    message: 'hello there',
  }
  const notifications: typeof notiModel[] = []
  before = before || Date.now()
  for (let i = 0; i < 20; ++i) {
    const notification = clone(notiModel, false)
    notification.id = `${id++}`
    notification.date = before - i * 1000 * 1000 * 60
    notification.user = `${i}`
    notification.message += id
    notifications.push(notification)
  }
  res.json(notifications)
}

export default function init(router: express.Router): void {
  router.get('/notification/list', getNotifications)
}
