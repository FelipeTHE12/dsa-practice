export function factorial(inputNumber: number): number {
  if (inputNumber === 0) {
    return 1;
  }

  return inputNumber * factorial(inputNumber - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040
