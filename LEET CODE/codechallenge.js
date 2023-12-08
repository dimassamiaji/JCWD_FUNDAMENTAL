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

console.log(0.1 + 0.2 === 0.3);

// q 7

// q 8

// const arrs = [1, 2, 3];

// const { push } = arrs;

// push(4);

// console.log(arrs)

console.log(typeof "hello" + 10);

if (Infinity > Number.MAX_VALUE) console.log("lebih besar");

console.log("hore");

// let i = 10;

// do {

// let i = 20;

// console.log(i);

// } while (i < 20);

let bool = true;

bool += false;

console.log(bool);

const numbers = [5, 4, 10, 2];

numbers.push(12);

numbers.sort();

console.log(numbers);

const str = "Javascript";
const pindah = str;
if (str === "Javascript") {
  console.log(pindah, "ini if else");
} else console.log("salah");

const date = new Date("2023-11-21");
console.log(Date);

const number = 10;
console.log(number % 2 == 0 ? "genap" : "ganjil");

// const nama = ["budi", "agus", "bambang"];
// const HayoApaHayo =nama.map((a)) => a + "doremi"

let s = [1, 9, 7, 100, 2, 99, 88, 20];
s.splice(2, 4, 91, 92, 93);
console.log(s);

let string = "hello world";
const search = "ell";
console.log(string.replace(search, ""));

console.log(1.5 % 0.5);

const nama = ["Budi", "Agus", "Bambang"];

const HayoApaHayo = nama.map((a) => a + " Doremi");

console.log(HayoApaHayo);

const mobil = {
  brand: "BMW",

  model: "M4",

  price: "$" + 800000,
};

console.log(mobil.model);

let multiply = (a, b) => a * b;

let square = (n) => multiply(n, n);

let printSquare = (n) => {
  let squared = square(n);

  console.log(square(n));

  console.log(squared);
};

printSquare(5);

let num = 4.01567;

console.log(num.toFixed(2));

const arrs = [1, 2, 3];

const { log } = console;

log(arrs.push(4));

const falsee = true;

const truee = [];

console.log(typeof falsee);

console.log(typeof truee);

let yy = 10;

console.log(++yy);

console.log(yy++);

console.log(yy);

// let k = 11;

// do {

// let k = 20;

// console.log(i);

// } while (k < 20);

// let name = "naruto";

// let counter = "";

// if (counter) name += " uzumaki";

// console.log(name);

let n = "10";

n++;

n += 2;

n *= "5";

n += "12";

console.log(n);

const penjumlahan = (a, b) => a * b;

console.log(penjumlahan(10, 2));

// let i = 10;

// while(i > 9) {

// console.log(i);

// }

// i++;
// const array1 = [1, 2, 3, 4];

// const array2 = [1, 2, 3, 4];

// array1 = array1.concat(array2);

// console.log(array2[(1, 2, 3, 4)]);

const arrs1 = [1, 2, 3];

// const { push } = arrs1;

// push(4);
// arrs1.push(4);
// console.log(arrs1);

// const returnObj = (something) => ({ hello: "udin" });

// console.log(returnObj("huhu"));

// const test = () => {
//   let result = 1;

//   while (result < 10) {
//     for (let i = 0; i < 5; i++) {
//       result + 1;

//       result * 5;
//     }
//   }

//   return result;
// };

// console.log(test());

let arr = [1, 2, 3];
let removedElement = arr.shift();
console.log(arr);

let oo = 7;
console.log(oo++);
console.log(--oo);
console.log(oo - 1);

const x = "1";
console.log("5.4" + x);

let pi = 3.14159;
console.log(pi.toPrecision());