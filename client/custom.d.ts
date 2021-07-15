declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.module.css'

declare var PUBLIC_PATH: string
declare var SERVER_URL: string
declare var ASSETS_PATH: string

declare type ReactProps = {
  children: JSX.Element
}
