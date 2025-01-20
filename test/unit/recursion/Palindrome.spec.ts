import { describe, it, expect } from "vitest";
import { Palindrome } from "../../../src/recursion/Palindrome";

describe("Palindrome", () => {
  it("should return '' when word is empty", () => {
    const result = Palindrome("");
    expect(result).toEqual("");
  });

  it("should return false when word is not empty", () => {
    const result = Palindrome("awesome");
    expect(result).toBe(false);
  });

  it("should return false when word is not empty", () => {
    const result = Palindrome("foobar");
    expect(result).toBe(false);
  });

  it("should return true when word is not empty", () => {
    const result = Palindrome("tacocat");
    expect(result).toBe(true);
  });
  it("should return true when word is not empty", () => {
    const result = Palindrome("amanaplanacanalpanama");
    expect(result).toBe(true);
  });
});
