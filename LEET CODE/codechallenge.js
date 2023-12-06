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


function counter(n, calls) {
  let count = n;
  let results = [];
  
  for (let i = 0; i < calls.length; i++) {
      if (calls[i] === "call") {
          results.push(count);
          count++;
      }
  }
  
  return results;
}

// Testing
console.log(counter(10, ["call","call","call"])); // [10,11,12]