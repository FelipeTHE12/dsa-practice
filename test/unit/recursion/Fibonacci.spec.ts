import { describe, it, expect } from "vitest";
import { fibonacci } from "../../../src/recursion/Fibonacci";

describe("Fibonacci testing", () => {
  it("should return 0 when number is 0", () => {
    const result = fibonacci(0);
    expect(result).toBe(0);
  });

  it("should return 1 when number is 1", () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
  });

  it("should return 1 when number is 2", () => {
    const result = fibonacci(2);
    expect(result).toBe(1);
  });

  it("should return 3 when number is 3", () => {
    const result = fibonacci(3);
    expect(result).toBe(2);
  });

  it("should return 3 when number is 4", () => {
    const result = fibonacci(4);
    expect(result).toBe(3);
  });
});
