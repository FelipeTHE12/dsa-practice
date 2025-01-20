import { describe, it, expect, vi, beforeEach } from "vitest";
import { numberListCallback } from "../../../src/recursion/NumberListCallback";

const isOdd = vi.fn().mockImplementation((val: number) => {
    return val % 2 !== 0;
})

describe("NumberListCallback", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    })

    it("should return false when the list is empty and not call the callback", () => {
        const result = numberListCallback([], isOdd)
        expect(result).toBeFalsy();
        expect(isOdd).toHaveBeenCalledTimes(0);
    });

    it("should return true when there is a number that asserts true on callback", () => {
        const result = numberListCallback([4, 6, 8, 9], isOdd);
        expect(result).toBeFalsy();
        expect(isOdd).toHaveBeenCalledTimes(4);
    });

    it("should return false when the numbers of list doenst match the callback logic", () => {
        const result = numberListCallback([4, 6, 8], isOdd);
        expect(result).toBeFalsy();
        expect(isOdd).toHaveBeenCalledTimes(3)
    });
});
