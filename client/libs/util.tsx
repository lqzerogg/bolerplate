export async function delaySpan<T>(
  promise: Promise<T>,
  delay = 2000
): Promise<T> {
  const timePro = new Promise<void>((resolve) => {
    global.setTimeout(resolve, delay)
  })
  const ele = await Promise.all([promise, timePro])
  return ele[0]
}

export async function timeout<T>(
  promise: Promise<T>,
  timeperiod = 5000
): Promise<T> {
  const timePro = new Promise<void>((resolve, reject) => {
    global.setTimeout(() => reject(new Error('timeout')), timeperiod)
  })
  return Promise.race([promise, timePro]) as unknown as Promise<T>
}
