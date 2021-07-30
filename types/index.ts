export type ExtraInfo = {
  [index: string]: string
}
export type User = {
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
