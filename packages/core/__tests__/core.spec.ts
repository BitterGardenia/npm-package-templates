import { random } from '../src'

describe('core', () => {
  test('`random`方法', () => {
    expect(random()).toBeGreaterThanOrEqual(0)
    expect(random()).toBeLessThanOrEqual(1)
  })
})
