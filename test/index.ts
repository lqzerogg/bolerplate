
export default {}

type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

type MyRequire<T> = {
  [P in keyof T]-?: T[P]
}

type MyMutable<T> = {
  -readonly[P in keyof T]: T[P]
}

type MyReonly<T> = {
  readonly[P in keyof T]: T[P]
}

type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyExclude<T, U> = T extends U ? never: T


type MyExtract<T, U> = T extends U ? T : never


// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T]: P extends K ? never: T[P]
// }

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

type MyReturnType<T> = T extends (...args: any[]) => infer S ? S : never

type MyNoNullable<T> = T extends null | undefined ? never: T

type MyParameters<T> = T extends (...args: infer S) => any ? S : never

type MyConstructorParameters<T> = T extends new (...args: infer S) => any ? S : never

type MyInstanceType<T> = T extends new (...args: any[]) => infer S ? S : never

class A {
  a: number
  constructor(a: number) {
    this.a = a
  }
  say(b: boolean) {
    return !b
  }
}
type test1 = MyInstanceType<typeof A>
const a: test1 = { a: 2, say: (b: boolean) => b}





