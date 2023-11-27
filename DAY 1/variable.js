let message; // declare variable message
console.log("ini message", message);
message = null;
console.log(message);

message = "Hello"; // assign variable messag

let msg = "Hello"; // declare dan assign variable message

console.log(
  //arg
  message
);

console.log("ini variable");

//let
let variable1 = "hello"; //decare and assign
variable1 = "hullo"; // re-assign
// let variable1 = "hulu"; tidak bisa re-declare
console.log(variable1);

var variable2 = "hehehe"; // declare and assign
variable2 = "huhuhu"; // re-assign
var variable2 = "hohohoho"; // re-declare
console.log(variable2);

const variable3 = "huhuhu";
// variable3 = "hihi"; // tidak bisa reassign
// const variable3 = "hoho"; tidak bisa redeclare
console.log(variable3);

//by default var
variable4 = "ayam";
variable4 = "sapi";
var variable4 = "burung";

console.log(variable4);

let user = "ini user";

//naming variable
let letters = "ini letters";
let letters1 = "ini letters + number";
// let 2letters ="diawali dengan number" tidak boleh menggunakan angka sebelum letters
let _letters = "ini symbol + letter";
let $letters = "ini symbol + letter";
let _21 = "ini symbol + number";
// let @letters = "symbol lain + letters" tidak boleh menggunakan symbol selain $ dan _
// let let = " hello" let merupakan reserved words
let Letters = "ini Letters"; //penamaan variable di javascript case-sensitive (huruf besar dan huruf kecil dibedakan)
console.log(letters, letters1, _letters);

//tipe tipe data
const string = "ini string"; //string
const number = 1; //number
const bigint = 621873621783n; //bigint
const Null = null; //null
let noAssign; //undefined
const boolean = true; // boolean

const objectUser = {
  id: 1,
  username: "udin",
  password: "password",
  fname: "udin sedunia",
};

const arrBuku = ["komik naruto", "komik bleach", "komik doraemon"];

console.log(string, number, bigint, Null, noAssign, boolean);
console.log(objectUser.password);
console.log(arrBuku[1]);

const angka = Infinity;
const angka2 = Number.MAX_VALUE;
console.log(angka2);
console.log(angka);

//template literal
const double = " kata udin 'makan yuk' ";
const single = ' kata udin "makan yuk" ';
const literal = `kata udin "makan yuk", 'makan yuk' `;

const aku = "aku";
const makan = "makan";
const ketoprak = "ketoprak";

const kalimat = aku + " " + makan + " " + ketoprak;
const kalimat2 = `${aku} ${makan} ${ketoprak}`;

console.log(kalimat);
console.log(kalimat2);

console.log(double);
console.log(single);
console.log(literal);

//string
const iniString = "ayam goreng ayam";
console.log(typeof iniString);

console.log(iniString.length); //ngecek berapa banyak karakter dalam sebuah string
console.log(iniString.charAt(iniString.length - 1));
console.log(iniString.concat(" paling enak"));
console.log(iniString.substring(1, 5));
console.log(iniString.substr(1, 5));
console.log(iniString.indexOf("g"));
console.log(iniString.slice(1, 5));
console.log(iniString.toUpperCase());
console.log(iniString.toLowerCase());
console.log(iniString.replace("ayam", "ikan"));
console.log(iniString.replace(/ayam/g, "ikan"));

//number

const iniNumber = 1.999999;
console.log(iniNumber);
console.log(iniNumber.toString());
console.log(iniNumber.toFixed(2));
console.log(iniNumber.toPrecision(2));

console.log(Number.parseInt(iniNumber));
console.log(Number.parseFloat(iniNumber));
console.log(iniNumber.toString().charAt(1));

//conversion
console.log(String(iniNumber));

const num = "tiga" * "3";
console.log(num);
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
//konversi number ke boolean :
//selain 0 akan dianggap true

console.log(Boolean(""), "ini string");
console.log(Boolean(" "), "ini string");
console.log(Boolean("false"), "ini string");

//konversi string ke boolean :
//selain string kosong(length 0) akan dianggap true
