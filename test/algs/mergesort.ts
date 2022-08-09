
/**
 * 1. 对数组分成两半
 * 2. 对前一半进行排序
 * 3. 对后一半进行排序
 * 4. 对分别排好序的两半再做排序: 直接新建数组，然后按大小把两个数组的数字填上去
 */

// const arrayStack: Array<Array<number>> = []

// function _getANewArray(): number[] {
//   if(arrayStack.length > 0) { return arrayStack.pop() as number[] }
//   return new Array<number>()
// }

// function _releaseArray(arr: number[]): void {
//   arrayStack.push(arr)
// }

// function _mergeSort(arr: number[], start: number, end: number): number[] {
//   if(start === end) {
//     const result = _getANewArray()
//     result.length = 1
//     result[0] = arr[start]
//     return result
//   }
//   const halfIndex = Math.floor((end + start) / 2)
//   const prevHalf = _mergeSort(arr, start, halfIndex)
//   const lastHalf = _mergeSort(arr, halfIndex + 1, end)
//   const result = _getANewArray()
//   result.length = end - start + 1
//   for(let i = 0, j = 0, count = 0; i < prevHalf.length || j < lastHalf.length; count++) {
//     if(i >= prevHalf.length) {
//       result[count] = lastHalf[j]
//       ++j
//     } else if(j >= lastHalf.length) {
//       result[count] = prevHalf[i]
//       ++i
//     } else if(prevHalf[i] < lastHalf[j]) {
//       result[count] = prevHalf[i]
//       ++i
//     } else {
//       result[count] = lastHalf[j]
//       ++j
//     }
//   }
//   _releaseArray(prevHalf)
//   _releaseArray(lastHalf)
//   return result
// }

// export default function mergeSort(arr: number[]): number[] {
//   return _mergeSort(arr, 0, arr.length - 1)
// }

function _doSort(arr: number[], start: number, end: number): number[] {
  if(start === end) return [arr[start]]
  const d = Math.floor((start + end) / 2)
  const leftHalf = _doSort(arr, start, d)
  const rightHalf = _doSort(arr, d + 1, end)
  const result = []
  let i = 0, j = 0, k = 0
  const count = end - start
  while(k <= count) {
    if(i >= leftHalf.length) {
      result[k++] = rightHalf[j++]
    } else if(j >= rightHalf.length) {
      result[k++] = leftHalf[i++]
    } else if(leftHalf[i] < rightHalf[j]) {
      result[k++] = leftHalf[i++]
    } else {
      result[k++] = rightHalf[j++]
    }
  }
  return result
}

export default function mergeSort(arr: number[]): number[] {
  return _doSort(arr, 0, arr.length - 1)
}
