import { describe, it } from "vitest";
import { selectionSort } from "../../src/chapter-5/selection-sort";

describe("selection-sort", () => {
  it("should move the smallest to first", () => {
    const result = selectionSort([4,3,2,1])
    console.log('result', result)
  })
})
