export function twoSum(nums: number[], target: number): number[] {
    if (nums.length === 0) {
        return []
    }

    const numbersAndIndexesMap = new Map<number, { index: number, value: number }>();

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];

        if (value <= target) {
            const differenceOfTarget = target - value;

            if (differenceOfTarget === 0) {
                return [i];
            }

            const differenceOnMap = numbersAndIndexesMap.get(differenceOfTarget);

            if (differenceOnMap) {
                return [differenceOnMap.index, i];
            }

            numbersAndIndexesMap.set(value, { index: i, value });
        }
    }

    return [];
};

//console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([9], 9))
// console.log(twoSum([11, 15, 17, 9], 9))