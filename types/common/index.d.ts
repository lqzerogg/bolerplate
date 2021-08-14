declare type Partial2Optional<T, K extends keyof T> = Omit<T, K> &
  {
    [P in K]?: T[P]
  }

type Primitive = number | string | boolean | bigint | symbol | null | undefined

type NonUndefined<T> = T extends null ? never : T

declare type MyFunction = (...args: unknown[]) => unknown

declare type MyObject = Record<string, unknown>

type KeysFactory<
  T,
  P extends Primitive | MyObject | MyFunction,
  IsCheckNon extends boolean
> = {
  [K in keyof T]: IsCheckNon extends true
    ? NonUndefined<T[K]> extends P
      ? K
      : never
    : T[K] extends P
    ? K
    : never
}[keyof T]

declare type FunctionKeys<T> = KeysFactory<T, MyFunction, true>
declare type NumberKeys<T> = KeysFactory<T, number, true>
declare type StringKeys<T> = KeysFactory<T, string, true>
declare type ObjectKeys<T> = KeysFactory<T, MyObject, true>

declare type IfEqual<X, Y, A = X, B = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B

declare type MutableKeys<O extends MyObject> = {
  [P in keyof O]: IfEqual<{ [Q in P]: O[P] }, { -readonly [Q in P]: O[P] }, P>
}[keyof O]

declare type ReadonlyKeys<O extends MyObject> = {
  [P in keyof O]: IfEqual<
    { [Q in P]: O[P] },
    { -readonly [Q in P]: O[P] },
    never,
    P
  >
}[keyof O]

declare type OptionalKeys<O extends MyObject> = {
  [P in keyof O]-?: MyObject extends Pick<O, P> ? P : never
}[keyof O]

type TypeKeys<T> = T[keyof T]

declare type PickByValue<O, V> = Pick<
  O,
  TypeKeys<{ [P in keyof O]: O[P] extends V ? P : never }>
>

declare type PickByValueExact<T, V> = Pick<
  T,
  TypeKeys<
    {
      [P in keyof T]: [T[P]] extends [V]
        ? [V] extends [T[P]]
          ? P
          : never
        : never
    }
  >
>

declare type OmitByValue<O, V> = Omit<
  O,
  TypeKeys<{ [P in keyof O]: O[P] extends V ? P : never }>
>

declare type OmitByValueExact<O, V> = Omit<
  O,
  TypeKeys<
    {
      [P in keyof O]: [O[P]] extends [V]
        ? [V] extends [O[P]]
          ? P
          : never
        : never
    }
  >
>

/**
 * Eg === {key1: string}
 * type Eg = Intersection<{key1: string}, {key1:string, key2: number}>
 */
declare type Intersection<T, U> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

/**
 * Eg === {key2: number}
 * type Eg = Intersection<{key1: string, key2: number}, {key1:string}>
 */
declare type Diff<T, U> = Pick<T, Exclude<keyof T, keyof U>>

/**
 * Eg === {key1: number, key2: number}
 * type Eg = Overwrite<{key1: string, key2: number}, {key1:number, key3: boolean}>
 */
declare type Overwrite<T, U, I = Diff<T, U> & Intersection<U, T>> = Pick<
  I,
  keyof I
>

/**
 * Eg === {key1: number, key2: number, key3: boolean}
 * type Eg = Assign<{key1: string, key2: number}, {key1:number, key3: boolean}>
 */
declare type Assign<
  T,
  U,
  I = Diff<T, U> & Intersection<U, T> & Diff<U, T>
> = Pick<I, keyof I>

/**
 * Eg === {key1: string, key2: { key3: boolean }}
 * type Eg = DeepRequired<{key1?: string, key2?: { key3?: boolean}}>
 */
declare type DeepRequired<T> = T extends (...args: unknown[]) => unknown
  ? T
  : T extends Array<unknown>
  ? _DeepRquiredArray<T[number]>
  : T extends MyObject
  ? _DeepRquiredObject<T>
  : T

interface _DeepRquiredArray<T> extends Array<DeepRequired<NonUndefined<T>>> {} // eslint-disable-line

type _DeepRquiredObject<T> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>
}

/**
 * Eg === {key1: string} & {key2: number}
 * type Eg = UnionToIntersection<{key1: string} | {key2: number}>
 */
type UnionToIntersection<T> = (
  T extends unknown ? (arg: T) => void : never
) extends (arg: infer U) => void
  ? U
  : never
