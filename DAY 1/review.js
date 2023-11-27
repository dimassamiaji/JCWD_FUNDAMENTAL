// intro to fundamental

console.log("aku anak singkong");

let message; // declare variable message
message = "hello"; // assign variable message

let msg = "hello"; // declare dan assign variable

console.log(
  // arg
  msg
);

var globalVariable = "Hello World";

let replaceable = "This value will be replaced";
replaceable = "I love Javascript";

const constant = "Hello Purwadhika!";

console.log(globalVariable);
console.log(replaceable);
console.log(constant);

let $nama1 = "Dimas Samiji";
$nama1 = "Karima";

console.log($nama1);

let Letters = "ini Letters";

const objectUser = {
  id: 1,
  username: "udin",
  password: "password",
  fname: "udin sedunia",
};

console.log(objectUser.id);

const arrBook = ["Komik Naruto", "Komik Ragna Crimson", "Komik One Piece"];

console.log(arrBook[0]);

const double = "kata udin, 'makan yuk'";
const single = 'kata udin, "makan yuk"';

console.log(double);
console.log(single);

const aku = "aku";
const makan = "makan";
const ketoprak = "ketoprak";

const kalimat1 = aku + " " + makan + " " + ketoprak;
const kalimat2 = `${aku} ${makan} ${ketoprak}`;

console.log(kalimat1);
console.log(kalimat2);

// string built in method

// String length
const Words = "DASDASDSADAS";
console.log(Words.length);

// String slice()
const Words2 = "Apple, Banana, Kiwi";
console.log(Words2.slice(7));

// String substring()
const Words3 = "Apple, Banana, Kiwi";
console.log(Words3.substring(7));

// String substr()
const Words4 = "Apple, Banana, Kiwi";
console.log(Words4.substr(7, 6));

// String replace()
const Words5 = "lets'go to the Microsoft!";
console.log(Words5.replace("Microsoft", "Asus"));

// String replaceAll()
const Words6 = "aku suka singkong";
console.log(Words6.replaceAll("aku suka singkong", "aku lebih suka ubi"));

// String toUpperCase()
const Words7 = "Karima Abdat";
console.log(Words7.toUpperCase());

// String toLowerCase()
const Words8 = "Karima Abdat";
console.log(Words8.toLowerCase());

// String concat()

let text1 = "Dimas";
let text2 = "Samiaji";

console.log(text1.concat(" ", text2));

// String trim()
let text3 = "         Karima Abdat          ";
console.log(text3.trim());

// String trimStart()

let text5 = "       Haikal Zhafran";
console.log(text5.trimStart());

// String trimEnd()
let text6 = "Haikal Zhafran    ";
console.log(text6.trimEnd());

// String padStart()

// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

{
  let x = 5 + 7 + "2";
  var y = 6;
  console.log(x + y);
}

const iniNumber = 1.999999;
console.log(iniNumber);
console.log(iniNumber.toString());
console.log(iniNumber.toFixed(2));
console.log(iniNumber.toPrecision(2));

console.log(Number.parseInt(iniNumber));
console.log(Number.parseFloat(iniNumber));
console.log(iniNumber.toString().charAt(1));

//date

const date = new Date("2023-11-21");
const date0 = new Date(0);
const date1 = new Date(24 * 60 * 60 * 1000);

console.log(date);
console.log(date0);
console.log(date1);
console.log(Date.now());
console.log(new Date(Date.now()));
console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());
console.log(date.toString());
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);

const radius = 5;
const diameter = radius * 2;
const circumference = 2 * Math.PI * radius; // 2 * 3.14 * r
const area = Math.PI * radius ** 2; // 3.14 * r pangkat 2

console.log(
  `diameter = ${diameter}, circumference = ${circumference.toFixed(
    4
  )}, area =${area.toFixed(3)}`
);

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2

const Date1 = new Date("2022-01-20");
const Date2 = new Date("2022-01-22");

console.log(Date2 - Date1);
console.log((Date2 - Date1) / (1000 * 60 * 60 * 24));

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day

const days = 400;
const year = Math.floor(400 / 365);
const month = Math.floor((400 % 365) / 30);

console.log((400 % 365) % 30);

const day = ((400 % 365) % 30) % 24;

console.log(`${days} days, ${year} year, ${month} month, ${day} day`);

console.log(year);
console.log(month);
console.log(day);
