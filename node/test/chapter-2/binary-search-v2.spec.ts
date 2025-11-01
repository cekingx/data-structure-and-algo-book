import { assert, describe, it } from 'vitest'
import { binary_search } from '../../src/chapter-2/binary-search-v2'

describe('binary-search-v2', () => {
  describe("Odd Collection", () => {
    const collection = [1,2,3,4,5,6,7,8,9]

    it("should get first element", () => {
      const result = binary_search(collection, 1)
      assert.equal(result, 1)
    })

    it("should get last element", () => {
      const result = binary_search(collection, 9)
      assert.equal(result, 9)
    })

    it("should get middle element", () => {
      const result = binary_search(collection, 8)
      assert.equal(result, 8)
    })

    it("should not get element", () => {
      const result = binary_search(collection, 10)
      assert.instanceOf(result, Error)
      assert.equal(result.message, 'not found')
    })
  })

  describe("Even Collection", () => {
    const collection = [1,2,3,4,5,6,7,8,9,10]

    it("should get first element", () => {
      const result = binary_search(collection, 1)
      assert.equal(result, 1)
    })

    it("should get last element", () => {
      const result = binary_search(collection, 10)
      assert.equal(result, 10)
    })

    it("should get middle element", () => {
      const result = binary_search(collection, 8)
      assert.equal(result, 8)
    })

    it("should not get element", () => {
      const result = binary_search(collection, 11)
      assert.instanceOf(result, Error)
      assert.equal(result.message, 'not found')
    })
  })
})