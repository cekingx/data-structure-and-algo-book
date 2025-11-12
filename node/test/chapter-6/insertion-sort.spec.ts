import { describe, it } from "vitest";
import { insertionSort } from "../../src/chapter-6/insertion-sort";

describe("insertion-sort", () => {
  it("should move the second item", () => {
    const result = insertionSort([4,3,2,1])
    console.log('result', result)
  })

  it("should not move the second item", () => {
    const result = insertionSort([1,2,3,4])
    console.log('result', result)
  })

   it("should sort", () => {
     const result = insertionSort([2,4,7,1,3])
     console.log('result', result)
   })
})
