import fs from "fs";

let data = fs.readFileSync("sample.txt")
console.log(data.toString());

let temp_string = "This is a string";
temp_string.trim()
let words = temp_string.split(' ');
fs.writeFileSync("no_of_words.txt",`No of words in string ${temp_string} are : `+words.length.toString());