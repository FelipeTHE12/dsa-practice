export function Palindrome(word: string): Boolean | string {
  if (word.length === 0) {
    return "";
  }

  const lastChar = word[word.length - 1];
  const firstChar = word[0];
  return (
    lastChar + Palindrome(word.slice(0, -1)) ===
    firstChar + Palindrome(word.slice(1))
  );
}

console.log(Palindrome("awesome")); // false
console.log(Palindrome("foobar")); // false
console.log(Palindrome("tacocat")); // true
console.log(Palindrome("amanaplanacanalpanama")); // true
console.log(Palindrome("amanaplanacanalpandemonium")); // false
