// Reverse Words in a Sentence Input: "Java is fun" → Output: "fun is Java"
let string = "Java is fun"
console.log(string.split(' ').reverse().join(' '))

// Check for Rotation Given two strings, check if one is a rotation of another. Input: "ABCD", "CDAB" → Output: true

let s1 = "ABCD"
let s2 = "ADCB"

console.log((s1.length === s2.length) && (s1+s1).includes(s2))
