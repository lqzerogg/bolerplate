
export function debounce(func: (...args: any[]) => any, time: number) {
  let tid: ReturnType<typeof global.setTimeout> | undefined
  return function(...args: any[]) {
    if(tid) {
      global.clearTimeout(tid)
    }
    tid = global.setTimeout(() => {
      func.apply(null, args)
      tid = undefined
    }, time)
  }
}

export function throttle(func: (...args: any[]) => any, time: number) {
  let tid: ReturnType<typeof global.setTimeout> | undefined
  let finalArgs: any[]
  return function(...args: any[]) {
    finalArgs = args
    if(!tid) {
      tid = global.setTimeout(() => {
        func.apply(null, finalArgs)
      }, time)
    }
  }
}
