import { assert, describe, it } from "vitest";
import { linear_search } from "../../src/chapter-2/linear-search";

describe("Linear Search", () => {
  it("should get", () => {
    const result = linear_search([1,2,3,4,5], 3)
    assert.equal(result, 3)
  })
})