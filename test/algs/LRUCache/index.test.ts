
import LRUCache from './index'

describe('lru cache ', () => {
  const cache = new LRUCache(3)
  test('method put should be right', () => {
    cache.put('1', 1)
    expect(cache.get('1')).toBe(1)
    cache.put('2', 2)
    expect(cache.get('2')).toBe(2)
    cache.put('3', 3)
    expect(cache.get('3')).toBe(3)
  })
  test('least recently used should be abandomed', () => {
    cache.put('4', 4)
    expect(cache.get('1')).toBe(undefined)
  })
  test('get method should update key time', () => {
    cache.get('2')
    cache.put('5', 5)
    expect(cache.get('2')).toBe(2)
    expect(cache.get('3')).toBe(undefined)
  })
})