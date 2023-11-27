// operator javascript
// + penjumlahan
// - pengurangan
// * perkalian
// / pembagian
// % modulo (sisa bagi)
// ** pangkat

console.log(1 + 1, "penjumlahan");
console.log(10 - 1, "pengurangan");
console.log(10 * 10, "perkalian");
console.log(9 / 3, "pembagian");
console.log(10 % 3, "modulo");
console.log(5 ** 2, "pangkat");
console.log(5 + 5 * 2);
console.log((5 + 5) * 2);

// unary

let x = 1;
x = -x;
console.log(x);

// binary
let z = 3;
y = 10;
console.log(z + y);

console.log(1 + 1 + "1");
console.log("1" + 1 + 1);
console.log("1" - 1 - 1);
console.log(1 + 1 + "1");
console.log("1" + 1 + 1);
console.log("1" - 1 - 1, "ini kurang");

console.log("1" + 2 * 2);
console.log("1" + 2 * 2);
console.log("1" + 2 * "dua");
const binatang = "ayam";

console.log(binatang.length + "1");
console.log(Boolean(0) + "3");

//modify in place
let n = 2,
  m = 3;
n += 5; // n = n +5
m -= 1;

console.log(n);
console.log(m);

//increment decrement
let j = 5;
j++; // j = j + 1
j--; // j = j -1
j += 2;
console.log(j);

let k = 11;
console.log(k++);
console.log(k);

let o = 9;
console.log(o--); //9
console.log(o); // 8
console.log(++o); //9

//rectangle area

const width = 5;
const length = 10;
const area = width * length;
console.log(area);
