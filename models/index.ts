export type ExtraInfo = {
  [index: string]: string
}
export interface User {
  isLogin: boolean
  id: string
  name: string
  avatar: string
  desc: string
  account: string
  realName: string
  location: string
  extraInfo: ExtraInfo
}
export interface Post {
  id: string
  date: number
  title: string
  content: string
  user: string
  reactions: {
    thumbsUp: number
    hooray: number
    heart: number
    rocket: number
    eyes: number
  }
}

export enum STATUS {
  idel = 'idel',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
}

export type Author = Pick<User, 'id' | 'name'>
export interface Notification {
  id: string
  date: number
  user: string
  read: boolean
  message: string
}
