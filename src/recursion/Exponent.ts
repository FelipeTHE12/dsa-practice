export function myCustomMathPow(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  return base * myCustomMathPow(base, exponent - 1);
}

console.log(myCustomMathPow(2, 0)); // 1
console.log(myCustomMathPow(2, 2)); // 4
console.log(myCustomMathPow(2, 4)); // 16
