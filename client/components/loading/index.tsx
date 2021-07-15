import React from 'react'
import { spinner, bubble1, bubble2, loadingWrapper } from './index.module.css'

export default function Loading(): JSX.Element {
  return (
    <div className={loadingWrapper}>
      <div className={spinner}>
        <div className={bubble1}></div>
        <div className={`${bubble1} ${bubble2}`}></div>
      </div>
    </div>
  )
}
