// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache[key] !== undefined) {
//       return cache[key];
//     }

//     const result = fn(...args);
//     cache[key] = result;

//     return result;
//   };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1

// const createCounter = (n) => () => n++;

// const counter = createCounter(20);
// console.log(counter()); // 20
// console.log(counter()); // 11
// console.log(counter()); // 22


// function counter(n, calls) {
//   let count = n;
//   let results = [];
  
//   for (let i = 0; i < calls.length; i++) {
//       if (calls[i] === "call") {
//           results.push(count);
//           count++;
//       }
//   }
  
//   return results;
// }

// // Testing
// console.log(counter(10, ["call","call","call"])); // [10,11,12]


// function chunk (arr, size) {
//   const chunkedArray = [];
//   let index = 0;

// while (index < arr.length) {
//   chunkedArray.push(arr.slice(index, index + size));
//   index += size;
// }

// return chunkedArray;
// };

// var arr = [1, 2, 3, 4, 5];
// var size = 1;
// console.log(chunk(arr, size));


// q 1
const numbers2 = [1, 2, 3, -1, -2, 10, , 1.23, 12, 5];

numbers2.sort();

console.log(numbers2);


// q 4

console.log(0.1 + 0.2 === 0.3)

// q 7

let name = "naruto"

let counter = "0"

if(counter) name += " uzumaki"

console.log(name)

// q 8

// const arrs = [1, 2, 3];

// const { push } = arrs;

// push(4);

// console.log(arrs)


console.log(typeof 'hello' + 10)

if (Infinity > Number.MAX_VALUE) console.log("lebih besar");

console.log("hore");

// let i = 10;

// do {

// let i = 20;

// console.log(i);

// } while (i < 20);

let bool = true;

bool += false;

console.log(bool)

let i = 10;

console.log(i++)

console.log(++i)

console.log(i)


const numbers = [5, 4, 10, 2];

numbers.push(12);

numbers.sort();

console.log(numbers);