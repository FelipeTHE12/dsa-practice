import { describe, it, expect } from "vitest";
import { myCustomMathPow } from "../../../src/recursion/Exponent";

describe("Exponent Testing", () => {
  it("should return 1 when exponent is 0", () => {
    const result = myCustomMathPow(2, 0);
    expect(result).toBe(1);
  });

  it("should return 2 when exponent is 1", () => {
    const result = myCustomMathPow(2, 1);
    expect(result).toBe(2);
  });

  it("should return 4 when exponent is 2", () => {
    const result = myCustomMathPow(2, 2);
    expect(result).toBe(4);
  });

  it("should return 16 when exponent is 4", () => {
    const result = myCustomMathPow(2, 4);
    expect(result).toBe(16);
  });
});
