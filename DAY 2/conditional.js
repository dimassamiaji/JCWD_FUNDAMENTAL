// comparison operators
// ==  sama dengan value (membandingkan valuenya)
// === sama dengan value dan tipe datanya
// != tidak sama dengan value (membandingkan value)
// !== tidak sama dengan value dan tipe datanya
// > lebih besar, membandingkan value sebelah kiri lebih besar dari sebelah kanan
// < lebih kecil, membandingkan value sebelah kiri lebih kecil dari sebelah kanan
// >= lebih besar atau sama dengan, sama dengan line 8 atau sama dengan value pembandingnya
// <= lebih kecil atau sama dengan, sama dengan line 9 atau sama dengan value pembandingnya

//if statement

let age = 16;
if (age >= 17) {
  //statements
  console.log("boleh buat ktp");
} else {
  console.log("belum cukup umur untuk buat ktp");
}

if (1 == "1") console.log("valuenya sama");

if (1 === 1) console.log("value dan tipe datanya sama ");

if (1 != 2) console.log("valuenya tidak sama ");

if (1 !== "1") console.log("value atau tipe datanya tidak sama ");

if (18 > "15") console.log("value sebelah kiri lebih besar dari sebelah kanan");

if (18 < "20") console.log("value sebelah kiri lebih kecil dari sebelah kanan");

// curly brackets digunakan apabila kita mau memasukan multiple statements
// apabila hanya single statement tidak perlu menggunakan curly bracket

//else if
let grade = "B";

if (grade === "A") console.log("excellent result");
else if (grade === "B") console.log("great result");
else if (grade === "C") console.log("good result");
else if (grade === "D") console.log("bad result");
else if (grade === "F") console.log("very bad result");
else console.log("invalid grade");

let brand = "toyota";

if (brand == "toyota") console.log("mobil toyota kijang");
else if (brand === "honda") console.log("mobil honda civic");

if (brand == "nissan") console.log("mobil nissan gtr");
if (brand == "wuling") console.log("mobil wuling air ev");
if (brand != "mitsubishi") console.log("bukan mobil evo");
if (brand != "porche") console.log("bukan mobil porche");
// line 50
// line 55
// line 56

//nested if
let provinsi = "banten",
  kota = "tangerang selatan";

if (provinsi == "banten") {
  if (kota == "tangerang selatan") console.log("welcome to tangsel");
  else if (kota == "tangerang") console.log("welcome to kota tangerang");
} else if (provinsi == "jakarta") {
  if (kota == "dki jakarta") console.log("welcome to dki jakarta");
  else if (kota == "jakarta selatan") console.log("welcome to jaksel");
}

if (provinsi == "banten" && kota == "tangerang selatan")
  console.log("welcome to tangsel");
else if (provinsi == "banten" && kota == "tangerang")
  console.log("welcome to kota tangerang");
else if (provinsi == "jakarta" && kota == "dki jakarta")
  console.log("welcome to dki jakarta");
else if (provinsi == "jakarta" && kota == "jakarta selatan")
  console.log("welcome to jaksel");

if (provinsi == "banten" || kota == "tangerang selatan" || kota == "tangerang")
  console.log("banten atau tangerang selatan atau tangerang");
else if (
  provinsi == "jakarta" ||
  kota == "dki jakarta" ||
  kota == "jakarta selatan"
)
  console.log("jakarta atau dki jakarta atau jaksel");

//buat sebuah kondisi dimana provinsi wajib banten dan kota wajib tangerang selatan atau tangerang
provinsi = "jakarta";
if (
  provinsi == "banten" &&
  (kota == "tangerang selatan" || kota == "tangerang")
)
  console.log("tangerang atau tangsel");

// logical operator
// && (and) dalam 1 scope condition terdapat 2 atau lebih kondisi yang wajib dipenuhi seluruhnya
// || (or) dalam 1 score condition terdapat 2 atau lebih kondisi yang salah satunya wajib true
// ! (not) biasanya digunakan untuk menandakan bahwa hasil dari perbandingannya adalah false

if (!(5 * 2 == 11)) console.log("5 x 2 adalah 10 bukan 11");

// truthy and falsy
if (5) console.log("5 adalah true");
if (0) console.log("0 tidak true"); //tidak muncul
if ("") console.log("string kosong tidak true");
if (" ") console.log("spasi adalah true");
if (5 || 0) console.log("5nya true, 0 false, muncul");
if (5 && 0) console.log("5 true dan 0 false, tidak muncul");
if (5 && !0) console.log("muncul ga? muncul");
if (5 && !"") console.log("muncul ga?muncul");
if (0 || !"") console.log("muncul ? muncul");
if (0 && !"") console.log("muncul tidak? muncul"); // tidak muncul
if (true) console.log("ini boolean true");
if (true || false) console.log("true or false");
if (true && !false) console.log("true and false");
if (undefined) console.log("ini undefined"); //tidak muncul
if (!undefined) console.log("ini undefined");
if (null) console.log("ini null"); //tidak muncul
if (!null) console.log("ini null");

brand = "nissan";
if (brand) console.log("muncul ga? munculllll");
if (5 * 2) console.log("muncul tidak");
if (10 % 2) console.log("muncul??"); //tidak muncul

let result = 0;
console.log(Boolean(result), "ini result"); // check 0 konversi ke boolean
console.log(Boolean("false")); // true
if (!result) {
  const number = "2";
  console.log(result + 2, "ini cuma proses");
  result + 2; // 2, result tetap 0
  if (result + 2 == 2) result++; // result = 1
  result++; // result = 2
  result += number; // result = "22"
  console.log(result); // "22"
}
