import { User } from '../types'

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.module.css'

declare const PUBLIC_PATH: string
declare const SERVER_URL: string
declare const ASSETS_PATH: string
declare const SSR: boolean
declare global {
  namespace NodeJS {
    interface Global {
      __state__?: User
    }
  }
}

declare type ReactProps = {
  children: JSX.Element
}
