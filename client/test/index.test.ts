import { Dog } from './index'

test('should be right', () => {
  expect(new Dog<string>('Jack').name).toBe('Jack')
})