
type MyPartial<T> = {
  [key in keyof T]?: T[key]
}
type MyRequired<T> = { [key in keyof T]-?: T[key] }
type MyMutable<T> = { -readonly [key in keyof T]: T[key] }
type MyReadOnly<T> = { readonly [key in keyof T]: T[key] }
type MyRecord<P extends any, T> = { [key in keyof P]: T }
type MyPick<T, K extends keyof T> = {
  [p in K]: T[p]
}
type MyExclude<T, P> = T extends P ? never : T
type MyExtract<T, P> = T extends P ? T : never
declare type MyOmit<T, P> = Pick<T, MyExclude<keyof T, P>>
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never


