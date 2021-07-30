import express, { Application } from 'express'
import { getUser } from './user'

export default function setApi(app: Application): void {
  const router = express.Router()
  router.get('/user/:uid', getUser)

  app.use('/api', router)
}
