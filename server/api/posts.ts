import express, { Request, Response } from 'express'
import clone from 'clone'
import { Post } from '../../models'

const postModel = {
  id: '1',
  title: 'First Post!',
  content: 'Hello!',
  user: '1',
  date: new Date('2019-12-12').getTime(),
  reactions: {
    thumbsUp: 0,
    hooray: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
}
const posts = []
const notModKeys = ['reactions', 'id', 'date', 'user']
let id = 20
for (let i = 0; i < id; ++i) {
  const post = clone(postModel, false, 3)
  Object.entries(post).forEach(([key, value]) => {
    if (key === 'reactions') {
      Object.entries(value).forEach(([reaction, count]) => {
        value[reaction] = count + i
      })
    } else if (!notModKeys.includes(key)) {
      post[key] = `${value}_${i}`
    }
  })
  post.id = `${i}`
  post.user = `${i}`
  post.date = post.date - i * 1000 * 60 * 24
  posts.push(post)
}

export function getPosts(req: Request, res: Response): void {
  res.json(posts)
}

export function addPost(req: Request, res: Response): void {
  const { title, content, user, date } = req.body as Post
  const post = Object.assign(clone(postModel), {
    id: id++,
    date,
    title,
    content,
    user,
  })
  posts.push(post)
  res.json(post)
}

export default function init(router: express.Router): void {
  router.get('/post/list', getPosts)
  router.post('/post/add', addPost)
}
