const isOdd = (val: number): boolean => val % 2 !== 0;

export function numberListCallback(numbersList: number[], callback: (param: number) => boolean) {
    if (numbersList.length === 0) {
        return false;
    }

    if (callback(numbersList[0])) {
        return true;
    }

    numbersList.shift();
    return numberListCallback(numbersList, callback);
}

// console.log(numberListCallback([1, 2, 3, 4], isOdd)); // true
// console.log(numberListCallback([4, 6, 8, 9], isOdd)); // true
// console.log(numberListCallback([4, 6, 8], isOdd)); // false
// console.log(numberListCallback([4, 6, 8], val => val > 10)); // false