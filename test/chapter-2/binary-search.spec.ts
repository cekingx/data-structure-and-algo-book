import { assert, describe, it } from 'vitest'
import { binary_search } from '../../src/chapter-2/binary-search'

describe("binary-search", () => {
  it("should get", () => {
    const result = binary_search([1,2,3,4,5], 3)
    assert.equal(result, 3)
  })
})