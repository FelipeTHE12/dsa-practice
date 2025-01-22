import { beforeEach, describe, expect, it, vi } from "vitest";
import { twoSum } from "../../../src/leetcode/1-TwoSum";

describe("TwoSum", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    })

    it("should return an empty list when an empty list is given", () => {
        const result = twoSum([], 10)
        expect(result).toStrictEqual([]);
    });

    it("should return [0] when just one number is given and its equal to target", () => {
        const result = twoSum([10], 10)
        expect(result).toStrictEqual([0]);
    });

    it("should return [] when just one number is given and its higher than target", () => {
        const result = twoSum([11], 10)
        expect(result).toStrictEqual([]);
    });

    it("should return [0, 1] when the the first and second values match target", () => {
        const result = twoSum([2, 7, 11, 15], 9)
        expect(result).toStrictEqual([0, 1]);
    });

    it("should return [3] when the target value is the fourth on the order", () => {
        const result = twoSum([2, 7, 11, 15], 9)
        expect(result).toStrictEqual([0, 1]);
    });

    it("should return the expected result when the numbers are not in an asc order", () => {
        const result = twoSum([7, 11, 15, 2], 9)
        expect(result).toStrictEqual([0, 3]);
    });
});
