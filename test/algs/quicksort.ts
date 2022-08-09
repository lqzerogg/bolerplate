
// function innerArrage(arr: number[], start: number, end: number): number {
//   const partition = Math.floor((end + start) / 2)
//   const partitionValue = arr[partition]
//   arr[partition] = arr[end]
//   let i = start, j = end - 1, tempValue
//   do {
//     while(arr[i] <= partitionValue && i < end) i++
//     while(arr[j] >= partitionValue && j > start) j--
//     if(i < j) {
//       tempValue = arr[i]
//       arr[i] = arr[j]
//       arr[j] = tempValue
//     }
//   } while(i < j)
//   arr[end] = arr[i]
//   arr[i] = partitionValue
//   return i
// }

// function innerSort(arr: number[], start: number, end: number) {
//   if(start === end) { return arr }
//   const partitionNum = innerArrage(arr, start, end)
//   if(partitionNum > start) { innerSort(arr, start, partitionNum - 1) }
//   if(partitionNum < end) { innerSort(arr, partitionNum + 1, end) }
//   return arr
// }

// function quickSort(arr: number[]): number[] {  
//   return innerSort(arr, 0, arr.length - 1)
// }

// export default quickSort

function _swap(arr: number[], indexA: number, indexB: number) {
  const temp = arr[indexA]
  arr[indexA] = arr[indexB]
  arr[indexB] = temp
}

function _partition(arr: number[], start: number, end: number) {
  const d = Math.floor((start + end) / 2)
  let i = start, j = end - 1
  if(i === j) {
    if(arr[start] > arr[end]) {
      _swap(arr, start, end)
    }
    return start
  }
  _swap(arr, d, end)
  while(i < j) {
    while(arr[i] <= arr[end]) i++
    while(arr[j] >= arr[end]) j--
    if(i < j) {
      _swap(arr, i, j)
    }
  }
  _swap(arr, i, end)
  return i
}

function _doSort(arr: number[], start: number, end: number) {
  if(start >= end) {
    return arr
  }
  const p = _partition(arr, start, end)
  _doSort(arr, start, p - 1)
  _doSort(arr, p + 1, end)
  return arr
}

export default function quickSort(arr: number[]): number[] {
  return _doSort(arr, 0, arr.length - 1)
}