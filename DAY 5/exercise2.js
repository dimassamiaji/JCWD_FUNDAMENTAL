// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
const lha = (arr = []) => {
  let lowest = Math.min(...arr);
  let highest = Math.max(...arr);
  let avg = arr.reduce((sum, curr) => sum + curr) / arr.length;
  return {
    lowest,
    highest,
    avg,
  };
};

console.log(lha([1, 1, 1, 1, 3, 5, 6]));

// const arr1 = [10, 20, 30, 40];
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// console.log(
//   arr.reduce((sum, curr) => sum + curr),
//   100
// );
// console.log(sum);
// console.log(arr.reduce((inisatu,valuePerLoop) => { return inisatu + valuePerLoop }, 1));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const arr2string = (arr = []) =>
  arr
    .map((val, i) => (i + 1 == arr.length ? "and " + val : val + ","))
    .join(" ");
// ["apple,", "banana,", "cherry", "and date"];
// ("apple, banana, cherry, and date");
console.log(arr2string(["apple", "banana", "cherry", "date"]));

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
const split = (str = "") => str.split(" ");
console.log(split("hello world"));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const sumArr = (arr1 = [], arr2 = []) =>
  arr1.map((val, i) => arr1[i] + arr2[i]); //[5,7,9]
console.log(sumArr([1, 2, 3], [4, 5, 6]));

const sum = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
};
console.log(sum([1, 2, 3], [4, 5, 6]));
// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

const add = (arr = [], newElement) =>
  arr.indexOf(newElement) == -1 ? [...arr, newElement] : arr;

console.log(add([1, 2, 3, 4], 5));
console.log([1, 2, 3, 4].indexOf(7), "ini index ke");
console.log([1, 2, 3, 4].includes(7), "ini includes");

const add2 = (arr = [], newElement) => {
  const cek = arr.includes(newElement); // true or false
  if (cek == false) {
    arr.push(newElement);
  }
  return arr;
};

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
const removeOdd = (arr = []) => arr.filter((val) => val % 2 == 0);
console.log(removeOdd([1, 2, 3, 4, 5, 6]));
// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// Example :
//               maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//               The function will return [5, 10, 24, 3, 6]
const multiple = (maxSize, ...ints) => {
  console.log(ints, "ini integers");
  ints.length = maxSize;
  return ints;
};
console.log(multiple(3, 1, 2, 3, 4, 5, 6));

// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
const combine = (arr1, arr2) => [...arr1, ...arr2];
console.log(combine([1, 2, 3], [4, 5, 6]));

// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const findDup = (arr = []) => {
  const res = [];
  arr.filter((val) => {
    const check = arr.filter((val2) => val2 == val).length;
    if (check > 1 && res.indexOf(val) == -1) res.push(val);
  });
  return res;
};

console.log("dupp", findDup([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]
const diff = (arr1 = [], arr2 = []) => [
  ...arr1.filter((val) => arr2.indexOf(val) == -1),
  ...arr2.filter((val) => arr1.indexOf(val) == -1),
];
console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//arr1 [1,2,3,4,5]
//arr2 [3,4,5,6,7]

//return [element1 , element2 ]
//element1 = arr1.filter((val) => arr2.indexOf(val) == -1) [1,2]
//element2 = arr2.filter((val) => arr1.indexOf(val) == -1) [6,7]
// [...element1,...element2]
//return element1.concact(element2)

// Based on the array below write a function that will return primitive data types only.
// The function will return [1, undefined, “string”]
let arr = [1, [], undefined, {}, "string", {}, []];
const primitiveOnly = (arr = []) => arr.filter((val) => typeof val != "object");
console.log(primitiveOnly(arr));

// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
const secondSmallest = (arr = []) => arr.sort((a, b) => a - b)[1];
console.log(secondSmallest([3, 4, 5, 6, 2, 1]));
const arr3 = [2, 1, 3, 100];
console.log(
  arr3.sort((a, b) => b - a),
  "ini hasil sort"
);

// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
const sumNumbers = (arr = []) =>
  arr.filter((val) => typeof val == "number").reduce((sum, curr) => sum + curr);

const sumNumbers2 = (arr = []) =>
  arr.reduce((sum, curr) => (typeof curr == "number" ? sum + curr : sum));

console.log(sumNumbers2([1, 2, "3", "udin"]));

const sumN = (arr = []) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") result += arr[i];
  }
  return result;
};

const cek = typeof true; //"boolean"
const cek2 = typeof 100; // "number"
const cek3 = typeof "udin"; //"string"
console.log(typeof cek);

// Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40
const sumDup = (arr = []) => {
  arr.sort((a, b) => a - b); // [10,10,10,10,20,30,40,50,60]
  let sum = 0; // sum = 40
  arr.map((val, i) => {
    if (val == arr[i - 1] || val == arr[i + 1]) sum += val;
  });
  return sum; //40
};
console.log("sumdup", sumDup([10, 20, 40, 10, 50, 30, 10, 60, 10]));
// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
const rps = (pick = "") => {
  const variant = ["rock", "paper", "scissor"];
  const computer = Math.floor(Math.random() * 3); //1
  const player = variant.indexOf(pick.toLowerCase()); //0
  const result = `${variant[player]} vs ${variant[computer]} = `;
  //rock vs paper
  if (
    (player == 0 && computer == 2) ||
    (player == 1 && computer == 0) ||
    (player == 2 && computer == 1)
  )
    return result + "win";
  else if (player == computer) return result + "draw";
  else return result + "lose";
};

console.log(rps("rock"));
