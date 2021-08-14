import express, { Application } from 'express'
import initUser from './user'
import initPosts from './posts'
import initNotifications from './notifications'

export default function setApi(app: Application): void {
  const router = express.Router()

  initUser(router)
  initPosts(router)
  initNotifications(router)

  app.use('/api', router)
}
