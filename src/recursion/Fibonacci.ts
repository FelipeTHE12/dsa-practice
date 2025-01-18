export function fibonacci(input: number): number {
  if (input === 0) return 0;
  if (input === 1 || input === 2) return 1;

  return fibonacci(input - 1) + fibonacci(input - 2);
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
