import fs from "fs";
import {captitalizeString,countVowels,reverseString} from "./stringUtils.js";
let data = fs.readFileSync("sample.txt")
console.log(data.toString());

let temp_string = "This is a string";
temp_string.trim()
let words = temp_string.split(' ');
fs.writeFileSync("no_of_words.txt",`No of words in string ${temp_string} are : `+words.length.toString());

//Importing the functions from another file

// let no_of_vowels = countVowels("My name is yash")
// console.log(no_of_vowels)




