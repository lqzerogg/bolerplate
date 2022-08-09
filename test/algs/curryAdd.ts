

export default function curryAdd(...args: number[]) {
  const argArr = Array.from(args)
  function _innerAdd(...innerArgs: number[]) {
    Array.prototype.push.apply(argArr, innerArgs)
    return _innerAdd
  }
  _innerAdd.toString = function() {
    return argArr.reduce((sum, val) => sum + val, 0)
  }
  return _innerAdd
}