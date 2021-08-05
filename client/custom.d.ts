declare module '*.svg' {
  const content: any
  export default content
}
declare module '*.module.css'

declare const SSR: boolean
declare const PUBLIC_PATH: string
declare const SERVER_URL: string
declare const ASSETS_PATH: string

declare type ReactProps = {
  children: JSX.Element
}

// export {}
