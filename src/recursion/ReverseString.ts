export function reverseString(word: string): string {
    if (word.length === 0) return ''

    const firstChar = word[word.length - 1]
    return firstChar + reverseString(word.slice(0, -1))
}

// console.log(reverseString('awesome')) // 'emosewa'
// console.log(reverseString('rithmschool')) // 'loohcsmhtir'