
export default class Heap {
  arr: number[]
  constructor(arr: number[]) {
    this.arr = arr
    
    const length = this.arr.length
    for(let i = Math.floor( (this.arr.length - 1)/ 2); i >= 0; --i) {
      const left = i * 2 + 1, right = i * 2 + 2 
      let minTree
      if(right >= length) { minTree = left }
      else { minTree = this._compare(left, right) ? left : right }
      
      if(this._compare(minTree, i)) {
        this._swap(minTree, i)
      }
    }
  }
  _compare(i: number, j: number): boolean {
    return this.arr[i] < this.arr[j]
  }
  _swap(i: number, j: number): void {
    const temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
  }
  add(value: number): void {
    this.arr.push(value)
    let i = this.arr.length - 1
    while(i > 0) {
      const parentI = Math.floor((i - 1) / 2)
      if(this._compare(i, parentI)) {
        this._swap(i, parentI)
        i = parentI
      } else { break }
    }
  }
  size(): number {
    return this.arr.length
  }
  pop(): number {
    if(this.arr.length === 0) {
      throw new Error('error')
    }
    const result = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    const count = this.arr.length = this.arr.length - 1
    let i = 0
    for(;;) {
      const left = 2 * i + 1, right = 2 * i + 2
      let minTree
      // find the miner tree
      if(left >= count) { break }
      else if(right >= count) { minTree = left }
      else { minTree = this._compare(left, right) ? left : right }
      // swap or break
      if(this._compare(i, minTree)) { break }
      else {
        this._swap(i, minTree)
        i = minTree
      }
    }
    return result
  }
}
