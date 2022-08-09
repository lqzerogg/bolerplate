

export default function * genNum() {
  let i = 0
  while(true) {
    yield i++
  }
}