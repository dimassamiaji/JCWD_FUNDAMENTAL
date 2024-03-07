// let Mobil = {
// // properti objek
// brand:"Toyota", // Merek Mobil
// model: "Kijang",// Tipe atau Model Mobil
// year:"2007"// Tahun pembuatan

// // Method Objek
// start: function () {
//     console.log("Engine Started");
// },

// drive (speed) {
//     console.log(`Driving at ${speed} km/h`);
// },
// }

let Murid = {
  name: "Dimas",
  nomor_urut: 3,
  kelas: "JCWD",

  menjawab() {
    console.log("saya bisa menjawab!");
  },
  absen(nomor_urut) {
    console.log(`ini absen saya ${nomor_urut}`);
  },
};
console.log(Murid.name);
Murid.menjawab();
Murid.absen("3");

class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }
  bicara() {
    console.log(`${this.nama} mengeluarkan suara ${this.suara}`);
  }

  berjalan() {
    console.log(`${this.nama} bisa berjalan di air`);
  }
}

let kucing = new Hewan("Kitty", "Meow");
let anjing = new Hewan("Bruno", "Guk");

console.log(kucing.nama);
console.log(anjing.nama);

kucing.bicara();
kucing.berjalan();

let temp = [3, 2, 1, 5];
temp.push(3);
temp.sort();
temp.pop();
console.log(temp); // [1,2,3,3]

let output = "Hello";
if ("0" != true) output += ", World!";
console.log(output); // Hello, World!

const data = [
  "number",
  true,
  { name: "junior", age: 17 },
  () => [{ result: "callback" }],
];
console.log(data[3]()[0]["result"]); // ini jawaban bener
console.log(data[3]().result);
console.log(data[3].result);
// console.log(data[3][0].result);

// function capitalize() {
//   const name = "KLEE";
// }
// console.log(name); // ReferenceError: name is not defined

// function capitalize() {
//   const name = "KLEE";
//   return name;
// }
// const capitalizedName = capitalize();
// console.log(capitalizedName);
// ("KLEE");

let name;
function capitalize() {
  name = "KLEE";
}
capitalize();
console.log(name);

getDouble(4);
function getDouble(numb) {
  console.log(2 * 2); // 4
}

const user = { name: "andika", age: 19 };
console.log(user.name);
console.log(user.status); // andika dan undefined

let testName = "andika";
testName += "julien";
testName = "taufik";
console.log(testName); // taufik

let angka = "12";
angka *= 2;
angka++;
angka--;
angka += "1";

console.log(angka);

let arr = [
  "book",
  true,
  [1, "banana"],
  null,
  ["false", [2, NaN], false, ["clock", 0]],
  NaN,
  false,
  [true],
];
console.log(Boolean(arr[4][3][0])); // true

// let testTemp = "Javascript is Awesome".split("");
// for (let i = 0; i < testTemp.length; i += 1) {
//   testTemp.push(testTemp[i]); // terjadi infinite loop karena testTemp.push(testTemp[1])
// }

const nama3 = "indra";
const umur3 = 17;
if (!nama3 || !umur3) console.log("data salah");
else if (nama3 && umur3 > 17) console.log("sudah dewasa");
else if (nama3 && umur3 < 17) console.log("belum dewasa");
else console.log("data tidak lengkap"); // data tidak lengkap

// getDouble2(4); // ini harus di bawah console log

// const getDouble2 = function (numb) {
//   console.log(2 * 2); //"error" karena fungsi dipanggil sebelum dideklarasikan
// };

const fruits = ["Pisang", "Jeruk", "Jambu", "Semangka"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.shift();
console.log(fruits); // [ 'Jeruk', 'Lemon', 'Kiwi', 'Jambu', 'Semangka' ]

console.log(typeof null);
console.log(typeof 151);

function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
console.log(checkDuplicate([1, 2, 3, 1])); // complexity o(n*2)
