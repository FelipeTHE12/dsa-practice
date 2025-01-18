import { describe, it, expect } from "vitest";
import { productOfArray } from "../../../src/recursion/ProductOfArray";

describe("Product of array testing", () => {
  it("should return 1 when array is empty", () => {
    const result = productOfArray([]);
    expect(result).toBe(1);
  });

  it("should return 2 when array is [1, 2]", () => {
    const result = productOfArray([1, 2]);
    expect(result).toBe(2);
  });

  it("should return 6 when array is [1, 2, 3]", () => {
    const result = productOfArray([1, 2, 3]);
    expect(result).toBe(6);
  });

  it("should return 24 when array is [1, 2, 3, 4]", () => {
    const result = productOfArray([1, 2, 3, 4]);
    expect(result).toBe(24);
  });
});
