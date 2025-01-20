import { describe, it, expect } from "vitest";
import { reverseString } from "../../../src/recursion/ReverseString";


describe("ReverseString", () => {
    it("should return '' when string is empty", () => {
        const result = reverseString("");
        expect(result).toStrictEqual("");
    });

    it('should reverse the string awesome to emosewa', () => {
        const result = reverseString("awesome");
        expect(result).toStrictEqual("emosewa");
    })
});
