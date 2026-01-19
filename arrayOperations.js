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

// console.log("Original Array:", numbers); // Output: [1, 2, 3, 4, 5]

// let result = numbers.map((value,index) => value * 2);
// console.log("Mapped Array (Doubled Values):", result); // Output: [2, 4, 6, 8, 10]

// let filteredArray = numbers.filter((value) => value % 2 === 0);
// console.log("Filtered Array (Even Numbers):", filteredArray); // Output: [2, 4]

// sample json in a variable
// let data = [
//   { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
//   { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
//   { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
//   { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
//   { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
// ]


// let sorteddata = data.filter((item) => {
//      if(item.price < 50 && item.quantity > 5 && item.targetPrice > 50) 
//         return item
    
// })
// console.log(sorteddata)




