//declaration

// paramter adalah variable yang menyimpan nilai karakteristik agar sebuah fungsi dapat melakukan proses yang ia kerjakan
// argumen nilai dari variable
// method : function yang ada di dalem object

function square(number) {
  return number * number;
}
function square2(number) {
  number * number;
}

function s(x) {
  console.log(x * x);
}
const a = s(8);
console.log(a, "ini isi a");
function s2(x) {
  console.log(x * x);
  return x;
}
// s2 > console.log > apakah console.log memiliki return ? jawabannya tidak.

const b = s2(8);
console.log(b, "ini isi b");
// 1. panggil function s2
// 2. menjalankan function console.log
// 3. console.log akan memunculkan text terminal sesuai dengan isi arg
// 4. karena console.log tidak memiliki return
// 5. di line 17 sama aja dengan return undefined
// 6. alhasil variable b adalah undefined

const result = square(2); //4
const result2 = square2(2);
console.log(result);
console.log(result2);

// console.log(square(5));
// console.log(square(6));
// console.log(square(7));
// console.log(square(8));

// function multi(x, y) {
//   return x * y;
// }
// console.log(multi(2, 6));

// function adalah kumpulan instruksi
// function terbagi menjadi 2 yaitu memiliki return dan tidak memiliki return
// kegunaan dari return adalah mengembalikan sebuah value
// valuenya bisa dimasukan ke dalam variable, ditampilkan lewat console.log , dll

function contoh() {
  let variable = 2;
  return variable;
}

console.log(contoh() + contoh());

function log2(str) {
  console.log(str);
}
console.log(console.log(console.log("heii", console.log("hii"))));

function penjumlahan(a, b) {
  //   console.log(a + b);
  return a + b;
}
const hasil = penjumlahan(7, penjumlahan(5, 5)); //

console.log(hasil);
// penjumlahan(2, 4);

//function expression
const perkalian = function (a, b) {
  return a * b;
};

const pembagian = (a, b) => {
  return a / b;
};

const pengurangan = (a, b) => a - b;

console.log(perkalian(5, 5));
console.log(pembagian(10, 2));

const pemangkatan = (arrN) => arrN[0] ** arrN[1];
console.log(pemangkatan([2, 5]));

const joinArr = (arr1, arr2) => arr1.concat(arr2);
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(joinArr(arr1, arr2));

const cekNumber = (n) => (!(n % 2) ? "even" : "odd");
console.log(cekNumber(5));

const f1 = (n) => f2() + n;
const f2 = () => 5;
console.log(f1(2));

// arrow function
const arrow1 = () => "hello"; //function arrow1 otomatis return string "hello"
const arrow2 = () => {
  let str = "hullo";
  let str2 = "helli";
  return str + str2;
};
const arrow3 = function () {
  let str = "hullo";
  let str2 = "helli";
  return str + str2;
};
function arrow4() {
  let str = "hullo";
  let str2 = "helli";
  return str + str2;
}

const display = (param) => {
  console.log("saya akan memunculkan nilai param");
  console.log(param);
  console.log("function display selesai");
};

const p = (angka1, angka2) => angka1 + angka2;

display(2);
display(p(2, 4));

let x = 0;

const p2 = (angka1, angka2) => {
  return angka1 + angka2;
};

x = p2(2, 2);
console.log(x);

const f = () => {
  return 1;
  console.log();
};

function namafunction(param) {
  //code block
}

const namafunction2 = function (param) {};

const namafunction3 = (param) => {
  //code block
};

const namafunction4 = (param) => 1;

const multiply = (n1, n2 = 5, n3 = 2) => n1 * n2 * n3;
console.log(multiply(5, 2));
console.log(multiply(3)); // n1 = 3, n2 default (5)
console.log(multiply(10, 5, 9)); // n1 = 3, n2 default (5)

// rest parameter

const myfunction = (a, b, ...restParam) => {
  console.log(a);
  console.log(b);
  // [3,4,5,6,7]
  for (let i = 0; i < restParam.length; i++) {
    console.log(restParam[i]);
  }
  return [a, b, ...restParam]; // [1,2,3,4,5,6,7]
};

console.log(myfunction(1, 2, 3, 4, 5, 6, 7));

let number = 1;
let number2 = number;
number++;
console.log(number2, "line 195"); //1
console.log(number, "line 194"); //2

const numbers = [1, 2];
const numbers2 = numbers; // menjadikan variable numbers2 sebagai pointer (deep copy)
const numbers3 = [...numbers]; // shallow copy
// numbers[2] = 3;
numbers.push(3);
numbers2.push(4);
console.log(numbers2);
console.log(numbers);
console.log(numbers3);

// nested function

const getMessages = (fname) => {
  const sayHello = () => "Hello " + fname + ".";
  const welcomeMessages = () => "welcome to purwadhika!";
  return sayHello() + " " + welcomeMessages();
};
console.log(getMessages("Udin"));

//closure (function nge return function)

const greeting = (name) => {
  const defaultMsg = "Hello ";
  return function () {
    return defaultMsg + name;
  };
};
const greetingDavid = greeting("david");

console.log(greeting("david")());
console.log(greetingDavid());

//currying
const multiplier = (factor) => (number) => factor * number;
const multiplier2 = (factor) => {
  return function (number) {
    return factor * number;
  };
};
const mul3 = multiplier(3);
const mul5 = multiplier(5);
console.log(mul3(2));
console.log(mul5(10));
console.log(multiplier2(5)(3));

// recursive

const countDown = (fromNumber) => {
  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) countDown(nextNumber);
};
console.log(fromNumber);
console.log(countDown(5));
