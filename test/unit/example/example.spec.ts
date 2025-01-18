import { describe, it, expect } from "vitest";

describe("Test example", () => {
  it("should sum two numbers", () => {
    const sum = (a: number, b: number) => a + b;
    expect(sum(2, 3)).toBe(5);
  });
});
