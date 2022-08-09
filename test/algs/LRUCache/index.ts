
// lru , k/v , get put
// KEY数量限定
// 构造函数有容量限制
// 超过容量剔除

export default class LRUCaceh {
  private capacity = 0
  private map: Map<string, any>
  private keyArr: Array<string>
  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
    this.keyArr = []
  }

  get(key: string) {

    if(!this.map.get(key)) return

    let theIndex = -1
    this.keyArr.forEach((innerKey, index) => {
      if(innerKey === key) {
        theIndex = index
      }
    })
    this.keyArr.splice(theIndex, 1)
    this.keyArr.unshift(key)

    return this.map.get(key)
  }
  put(key: string, value: any) {

    if(this.map.get(key)) {
      this.get(key)
      return
    }

    if(this.keyArr.length === this.capacity) {
      const oldKey = this.keyArr.pop() as string
      this.keyArr.unshift(key)
      this.map.delete(oldKey)
    } else {
      this.keyArr.unshift(key)
    }
    this.map.set(key, value)
  }

}