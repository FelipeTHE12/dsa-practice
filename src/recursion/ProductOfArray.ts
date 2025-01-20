export const productOfArray = (arrayOfNumbers: number[]): number => {
  if (arrayOfNumbers.length === 0) {
    return 1;
  }

  const firstNumber = arrayOfNumbers[0];
  arrayOfNumbers.shift();
  return firstNumber * productOfArray(arrayOfNumbers);
};

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
