import { describe, it, expect } from "vitest";
import { factorial } from "../../../src/recursion/Factorial";
import { fibonacci } from "../../../src/recursion/Fibonacci";

describe("Fibonacci", () => {
  it("should return 1 when number is 1", () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
  });

  it("should return 1 when number is 2", () => {
    const result = fibonacci(2);
    expect(result).toBe(1);
  });

  it("should return 2 when number is 3", () => {
    const result = fibonacci(3);
    expect(result).toBe(2);
  });

  it("should return 3 when number is 4", () => {
    const result = fibonacci(4);
    expect(result).toBe(3);
  });

  it("should return 55 when number is 10", () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
  });

  it("should return 317811 when number is 28", () => {
    const result = fibonacci(28);
    expect(result).toBe(317811);
  });

  it("should return 9227465 when number is 35", () => {
    const result = fibonacci(35);
    expect(result).toBe(9227465);
  });
});
