import { describe, expect, it } from "vitest";
import { bubble_sort } from "../../src/chapter-4/bubble-sort";

describe("bubble-sort", () => {
  it("should sort the array", () => {
    const result = bubble_sort([4,2,7,1,3])
    expect(result).toEqual([1,2,3,4,7])
  })

  it("should sort the array", () => {
    const result = bubble_sort([3,1,2])
    expect(result).toEqual([1,2,3])
  })
})
