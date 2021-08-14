import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as clax from './index.module.css'
import { ExtraInfo, User } from '../../../models'
import Loading from '../../common/Loading'

type ExtraFunctionType = (title: string, value: string) => void

const defaultUser = {
  isLogin: false,
} as User

const extraTitleMapping: ExtraInfo = {
  constellation: '星座',
  profession: '演员',
}

export default function About(): JSX.Element {
  const [user, setUser] = useState(defaultUser)
  const addExtraInfo: ExtraFunctionType = useCallback(
    (title, value) => {
      setUser((oldUser) => {
        const extraPair: ExtraInfo = { [title]: value }
        extraTitleMapping[title] = title
        const newUser = { ...oldUser }
        newUser.extraInfo = { ...newUser.extraInfo, ...extraPair }
        return newUser
      })
    },
    [setUser]
  )

  const { uid } = useParams() as { uid: string }
  useEffect(() => {
    global
      .fetch(`/api/user/${uid}`, { method: 'GET' })
      .then((res) => {
        return res.json()
      })
      .then((newUser) => {
        setUser(newUser)
      })
  }, [uid, setUser])

  const $content = user.isLogin ? (
    <>
      <div className={clax.banner}></div>
      <div className={clax.basicInfo}>
        <div className={clax.avatarWrp}>
          <img src={user.avatar} alt="头像" className={clax.avatar} />
        </div>
        <div className={clax.name}>{user.name}</div>
        <div className={clax.personDesc}> {user.desc} </div>
      </div>
      <ul className={clax.privateInfo}>
        <InfoItem title="账号" value={user.account} />
        <InfoItem title="真实姓名" value={user.realName} />
        <InfoItem title="地区" value={user.location} />
      </ul>
      <ExtraInfoList extraInfo={user.extraInfo} />
      <AddPanel addExtraInfo={addExtraInfo} />
    </>
  ) : (
    <Loading size="middle" />
  )

  return <div className={`about ${clax.ctn}`}>{$content}</div>
}

function ExtraInfoList({ extraInfo }: { extraInfo: ExtraInfo }) {
  const $listItems = []
  for (const key in extraInfo) {
    $listItems.push(
      <InfoItem
        key={key}
        title={extraTitleMapping[key]}
        value={extraInfo[key]}
      />
    )
  }
  return <ul className={clax.extraInfo}>{$listItems}</ul>
}

function AddPanel({ addExtraInfo }: { addExtraInfo: ExtraFunctionType }) {
  const [extraTitle, setExtraTitle] = useState('')
  const [extraValue, setExtraValue] = useState('')

  return (
    <div className={clax.addPanel}>
      <div className={clax.addInputWrp}>
        <input
          className={clax.addInputTitle}
          onChange={(e) => setExtraTitle(e.target.value)}
          type="text"
          value={extraTitle}
          placeholder="请输入信息标题"
        />
        <input
          className={clax.addInputValue}
          type="text"
          onChange={(e) => setExtraValue(e.target.value)}
          value={extraValue}
          placeholder="请输入信息内容"
        />
      </div>
      <div
        className={clax.addOp}
        onClick={() => addExtraInfo(extraTitle, extraValue)}
      >
        <span className="iconfont icon-add"></span>
        <span className={clax.addText}>添加个人资料</span>
      </div>
    </div>
  )
}

function InfoItem({
  title,
  value,
  badge,
}: {
  title: string
  value: string
  badge?: JSX.Element
}): JSX.Element {
  return (
    <li className={clax.infoItem}>
      <span className={clax.infoTitle}>{title}</span>
      <span className={clax.infoValue}>
        {value}
        {badge}
      </span>
    </li>
  )
}
