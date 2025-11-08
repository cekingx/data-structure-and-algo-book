import { describe, expect, it } from "vitest";
import { greatestNumber } from "../../src/chapter-4/greatest-number";

describe('greatest-number', () => {
  it("should get the greatest number", () => {
    const result = greatestNumber([1,2,3,4])
    expect(result).toBe(4)
  })
})
