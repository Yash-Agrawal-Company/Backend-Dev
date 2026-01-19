let numbers = [1, 2, 3, 4, 5];
// Pop() Push() Shift() Unshift()

// // Remove the last element from the array
// let lastElement = numbers.pop();
// console.log("Popped Element:", lastElement); // Output: 5
// console.log("Array after pop:", numbers); // Output: [1, 2, 3, 4]

// // Add an element to the end of the array
// numbers.push(6);
// console.log("Array after push:", numbers); // Output: [1, 2, 3, 4, 6]

// // Remove the first element from the array
// let firstElement = numbers.shift();
// console.log("Shifted Element:", firstElement); // Output: 1
// console.log("Array after shift:", numbers); // Output: [2, 3, 4, 6]

// // Add an element to the beginning of the array
// numbers.unshift(0);
// console.log("Array after unshift:", numbers); // Output: [0, 2, 3, 4, 6]

// //index of
// let index = numbers.indexOf(3);
// console.log("Index of 3:", index); // Output: 2

// //includes
// let includesFour = numbers.includes(4);
// console.log("Array includes 4:", includesFour); // Output: true

// //slice
// let slicedArray = numbers.slice();
// console.log("Sliced Array (1 to 4):", slicedArray); // Output: [2, 3, 4]

// //reverse array using slice
// let reversedArray = numbers.slice().reverse();
// console.log("Reversed Array:", reversedArray); // Output: [5, 4, 3, 2, 1]

console.log("Original Array:", numbers); // Output: [1, 2, 3, 4, 5]

numbers.map((value,index) => {
    console.log(`Value ${value} at index ${index}`)
})