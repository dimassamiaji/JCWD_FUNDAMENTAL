//declaration
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
