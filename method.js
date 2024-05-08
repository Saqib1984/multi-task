// 1. Array Methods:
// forEach 
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((num) => console.log(num));
// map
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
// filter
let evenNumbers1 = numbers.filter((num) => num % 2 === 1);
console.log(evenNumbers1);
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// reduce
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// 2. String Methods:
// charAt
let str = "Hello";
let firstChar = str.charAt(0); // 'H'
console.log(firstChar);
// indexOf
let index = str.indexOf("l"); // 2
console.log(index);
let index1 = str.indexOf("w"); // -1
console.log(index1);
// subtracting
let subStr = str.substring(1, 3); // 'el'
console.log(subStr);
// toUpperCase
let upperCaseStr = str.toUpperCase(); // 'HELLO'
console.log(upperCaseStr);
// 3. Object Methods:
// Object.keys
let obj = { name: "John", age: 30 };
let keys = Object.keys(obj); // ['name', 'age']
console.log(keys);
// Object.values
let values = Object.values(obj); // ['John', 30]
console.log(values);
// Object.entries
let entries = Object.entries(obj); // [['name', 'John'], ['age', 30]]
console.log(entries);
// Split
let sentence = "Hello, world!";
let words = sentence.split(" "); // ['Hello,', 'world!']
console.log(words);
// Splice
let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(2, 1); // Removes 'cherry'
console.log(fruits);
fruits.splice(2, 0, "grape"); // Inserts 'grape' at index 2
console.log(fruits);
// Pop And Push
let stack = [1, 2, 3];
let poppedItem = stack.pop(); // Removes and returns 3
console.log(poppedItem);
stack.push(4, 5); // Stack is now [1, 2, 4, 5]
console.log(stack);
// Shift and Unshift
let queue = [1, 2, 3];
let shiftedItem = queue.shift(); // Removes and returns 1
console.log(shiftedItem);
queue.unshift(0); // Queue is now [0, 2, 3]
console.log(queue);
// Concat
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArray = arr1.concat(arr2); // [1, 2, 3, 4]
console.log(combinedArray);
// Includes
let number1 = [1, 2, 3, 4, 5];
let hasThree = number1.includes(3); // true
console.log(hasThree);
let hasTen = numbers.includes(10); // false
console.log(hasTen);
// slice
let fruits1 = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruits1.slice(1, 3); // Returns ["banana", "cherry"]
console.log(slicedFruits);
// join
let fruit2 = ["apple", "banana", "cherry"];
let fruitString = fruit2.join(", "); // Returns "apple, banana, cherry"
console.log(fruitString);
// indexOf and lastIndexOf
let number2 = [1, 2, 3, 4, 2];
let firstIndex = number2.indexOf(2); // Returns 1
let lastIndex = number2.lastIndexOf(2); // Returns 4
console.log(firstIndex);
console.log(lastIndex);
// every and some
let number3 = [1, 2, 3, 4, 5];
let allEven = number3.every((num) => num % 2 === 0); // Returns false
let someEven = number3.some((num) => num % 2 === 0); // Returns true
console.log(allEven);
console.log(someEven);
// find and findIndex
let number4 = [1, 2, 3, 4, 5];
let lastEven = number4.find((num) => num % 2 === 0); // Returns 2
let lastEvenIndex = number4.findIndex((num) => num % 2 === 0); // Returns 1
console.log(lastEven);
console.log(lastEvenIndex);
export {};
