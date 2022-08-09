import quickSort from './quicksort'
import mergeSort from './mergesort'
import Heap from './minHeap'
import MyPromise from './MyPromise'
import currayAdd from './curryAdd'
import genNum from './genNum'
import { debounce, throttle } from './debounce'
import zeroOnePackage from './zeroOnePackage'

// test('genNum should be right', () => {
//   const iterator = genNum()
//   expect(iterator.next().value).toBe(0)
//   expect(iterator.next().value).toBe(1)
//   expect(iterator.next().value).toBe(2)
//   expect(iterator.next().value).toBe(3)
// })

// test('curryAdd should be right', () => {
//   expect(currayAdd(1,2,3).toString()).toBe(6)
//   expect(currayAdd(1,2,3)(4).toString()).toBe(10)
//   expect(currayAdd(1)(2,3)(4).toString()).toBe(10)
//   expect(currayAdd(1)(2)(3)(4).toString()).toBe(10)
// })

// test('throttle should be right', async () => {
//   let testR = 0
//   function Log(i: number) {
//     testR += i
//   }
//   function delay(t: number) {
//     return new Promise((resolve) => {
//       global.setTimeout(resolve, t)
//     })
//   }
//   const dLog = throttle(Log, 100)
//   for(let i = 0; i < 10; ++i) {
//     await delay(5)
//     dLog(i)
//   }
//   await delay(100)
//   expect(testR).toBe(9)
// })

// test('debounce should be right', async () => {
//   let testR = 0
//   function Log(i: number) {
//     testR += i
//   }
//   function delay(t: number) {
//     return new Promise((resolve) => {
//       global.setTimeout(resolve, t)
//     })
//   }
//   const dLog = debounce(Log, 100)
//   for(let i = 0; i < 10; ++i) {
//     await delay(5)
//     dLog(i)
//   }
//   await delay(100)
//   expect(testR).toBe(9)
// })

// test('my promise should be right', () => {
//   const p1 = new MyPromise<number>((resolve) => {
//     global.setTimeout(() => {
//       resolve(1)
//     }, 100)
//   })
//   let veryNum = 0
//   let veryNum2 = 0
//   p1.then((val) => {
//     veryNum = val
//     return 2
//   }).then((val) => {
//     veryNum2 = val as number
//   })
//   expect(p1.getStatus()).toBe('pending')
//   expect(veryNum).toBe(0)
//   expect(veryNum2).toBe(0)
//   return new Promise((resolve) => {
//     global.setTimeout(() => {
//       expect(p1.getStatus()).toBe('success')
//       expect(veryNum).toBe(1)
//       expect(veryNum2).toBe(2)
//       resolve(1)
//     }, 500)
//   })
// })

// test('quicksort should be right', () => {
//   expect(quickSort([1])).toEqual([1])
//   expect(quickSort([1,2])).toEqual([1,2])
//   expect(quickSort([2,1])).toEqual([1,2])
//   expect(quickSort([3,2,1])).toEqual([1,2,3])
//   expect(quickSort([1,2,3])).toEqual([1,2,3])
//   expect(quickSort([2,1,3])).toEqual([1,2,3])
//   expect(quickSort([3,1,2])).toEqual([1,2,3])
//   expect(quickSort([4,3,5])).toEqual([3,4,5])
//   expect(quickSort([3,1,2,7,6,5,8,4])).toEqual([1,2,3,4,5,6,7,8])
// })

// test('mergeSort should be right', () => {
//   expect(mergeSort([1])).toEqual([1])
//   expect(mergeSort([1,2])).toEqual([1,2])
//   expect(mergeSort([2,1])).toEqual([1,2])
//   expect(mergeSort([3,2,1])).toEqual([1,2,3])
//   expect(mergeSort([1,2,3])).toEqual([1,2,3])
//   expect(mergeSort([2,1,3])).toEqual([1,2,3])
//   expect(mergeSort([3,1,2])).toEqual([1,2,3])
//   expect(mergeSort([4,3,5])).toEqual([3,4,5])
//   expect(mergeSort([3,1,2,7,6,5,8,4])).toEqual([1,2,3,4,5,6,7,8])
//   expect(mergeSort([3,100, 1000, 1001,999,1,2,7,6,5,8,4,1003,1004,1005,1006,1007])).toEqual([1,2,3,4,5,6,7,8,100,999,1000,1001,1003,1004,1005,1006,1007])
// })

// test('min heap should be right', () => {
//   let heap = new Heap([1])
//   expect(heap.size()).toBe(1)
//   expect(heap.pop()).toBe(1)
//   expect(heap.size()).toBe(0)
//   heap = new Heap([1, 2])
//   expect(heap.size()).toBe(2)
//   expect(heap.pop()).toBe(1)
//   expect(heap.size()).toBe(1)
//   expect(heap.pop()).toBe(2)
//   expect(heap.size()).toBe(0)
//   heap = new Heap([2,1])
//   expect(heap.size()).toBe(2)
//   expect(heap.pop()).toBe(1)
//   expect(heap.size()).toBe(1)
//   expect(heap.pop()).toBe(2)
//   expect(heap.size()).toBe(0)
//   heap = new Heap([2,1,3])
//   expect(heap.size()).toBe(3)
//   expect(heap.pop()).toBe(1)
//   expect(heap.pop()).toBe(2)
//   expect(heap.pop()).toBe(3)
//   expect(heap.size()).toBe(0)
//   heap = new Heap([2,3,1,4,5,7,6])
//   expect(heap.size()).toBe(7)
//   expect(heap.pop()).toBe(1)
//   expect(heap.pop()).toBe(2)
//   expect(heap.pop()).toBe(3)
//   expect(heap.pop()).toBe(4)
//   heap.add(10)
//   expect(heap.pop()).toBe(5)
//   expect(heap.pop()).toBe(6)
//   expect(heap.pop()).toBe(7)
//   expect(heap.pop()).toBe(10)
//   expect(heap.size()).toBe(0)
// })

// test('zero one package should be right', () => {
//   expect(zeroOnePackage([2],[1],1,0)).toBe(0)
//   expect(zeroOnePackage([2],[1],1,1)).toBe(2)
//   expect(zeroOnePackage([2,2],[1,2],2,1)).toBe(2)
//   expect(zeroOnePackage([2,2],[1,2],2,2)).toBe(2)
//   expect(zeroOnePackage([2,2],[1,2],2,3)).toBe(4)
//   expect(zeroOnePackage([2,4,4,5],[1,2,3,4],4,5)).toBe(8)
// })