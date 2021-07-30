import { ExtraInfo, User } from '../../types'
import express from 'express'

const defaultUser = {
  isLogin: true,
  id: '',
  name: '超级大美女',
  avatar:
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F22%2F172342ehscjzq4jbpjjnt4.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630120586&t=7404f4620c747b77f496c4d576a09155',
  desc: '美若天仙',
  account: '189********',
  realName: '刘亦菲',
  location: '广东深圳',
  extraInfo: {
    constellation: '双子座',
    profession: '演员',
  },
} as User

export function getUser(
  req: express.Request,
  res: express.Response /*, next*/
): void {
  const uid = req.params.uid
  const user = {
    ...defaultUser,
    id: uid,
    name: `${defaultUser.name}_${uid}`,
    desc: `${defaultUser.desc}_${uid}`,
    realName: `${defaultUser.realName}_${uid}`,
  }
  res.json(user)
}
