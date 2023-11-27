const str = "JavaScript";
if (str === "JavaScript") console.log("javascript");
else console.log("not javascript");

//ternary operator
console.log(str === "JavaScript" ? "javascript" : "not javascript");
str === "JavaScript"
  ? console.log("javascript")
  : console.log("not javascript");
//ternary operator biasa digunakan untuk single statement condition dengan if dan else

str === "JavaScript"
  ? console.log("javascript")
  : str === "fundamental" //else if dalam ternary
  ? console.log("fundamental")
  : console.log("bukan javascript atau fundamental");

const provinsi = "banten";
const kota = provinsi == "banten" ? "tangerang selatan" : "bukan banten";
console.log(provinsi, kota);

provinsi == "banten" ? console.log("ini banten") : null;
const number = 8;
console.log(!(number % 2) ? "bilangan genap" : "ganjil");
console.log(number % 2 == 0 ? "bilangan genap" : "ganjil");
