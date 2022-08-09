
export default class MyPromise<T> {
  status: string
  value: T | undefined
  reason: any
  cb: (() => void) | undefined
  ecb: (() => unknown) | undefined
  getStatus() { return this.status }
  constructor(fn: (resolve: (arg: T) => void, reject: (arg: any) => void) => void) {
    this.status = 'pending'
    fn((arg: T) => {
      this.resolve(arg)
    }, (arg: any) => {
      this.reject(arg)
    })
    this.value = undefined
    this.cb = undefined
  }
  resolve(value: T) {
    if(this.status !== 'pending') { return }

    this.status = 'success'
    this.value = value
    global.setTimeout(() => {
      this._executeCB()
    }, 0)
  }
  reject(reason: any) {
    if(this.status !== 'pending') { return }

    this.status = 'rejected'
    this.reason = reason
    global.setTimeout(() => {
      this._executeECB()
    }, 0)
  }
  then(cb: (value: T) => unknown) {
    return new MyPromise<unknown>((resolve) => {
      this.cb = () => {
        const val = cb(this.value as T)
        resolve(val)
      }
    })
  }
  catch(ecb: (reason: any) => unknown) {
    return new MyPromise<unknown>((resolve) => {
      this.ecb = () => {
        const val = ecb(this.reason)
        resolve(val)
      }
    })
  }
  _executeCB() {
    if(this.cb) {
      this.cb()
    }
  }
  _executeECB() {
    if(this.ecb) {
      this.ecb()
    }
  }
  static resolve<M>(value: M) {
    return new Promise<M>((resolve) => {
      resolve(value)
    })
  }
  static reject<M>(reason: any) {
    return new Promise<M>((resolve, reject) => {
      reject(reason)
    })
  }
  // todo call back next tick
}