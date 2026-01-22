//Question 2: Custom Module
/* Build a module called stringUtils.js that exports functions for capitalizing strings, reversing
 strings, and counting vowels. */

function captitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
function countVowels(str) {
  let vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsArray.includes(str.charAt(i))) count += 1;
  }
  return count;
}

export {captitalizeString,countVowels,reverseString}