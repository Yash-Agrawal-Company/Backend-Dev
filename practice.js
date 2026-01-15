// 1.Hello World
console.log("Node.js Backend Started")

// 2.Variables
let name = "Aman" //string 
let age  = 25 // number
const country = "India" // constant
let isStudent = true // boolean

console.log(name)
console.log(age)
console.log(country)
console.log(isStudent)

// Operations in JS
let num1 = 10
let num2 = 20
console.log(num1 + num2) // Addition
console.log(num2 - num1) // Subtraction
console.log(num1 * num2) // Multiplication
console.log(num2 / num1) // Division

//Condition (if-else)
    let loginAge;
    if(loginAge >0){
        console.log("Eligible to vote")
    } else {
        console.log("Not Eligible to vote")
    }
    

    function add(x,y){
        return x + y;
    }
    let result = add(5,10);
    console.log("Addition is: " + result);