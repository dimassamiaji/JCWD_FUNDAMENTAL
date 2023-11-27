// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10
const n = 9;
for (let i = 1; i <= n; i++) console.log(i, "x", n, "=", i * n);

// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
let word = "madam";
let newWord = "";
for (let i = word.length - 1; i >= 0; i--) newWord += word[i];
// "m"
//newword = newword + word[i]
// newword = "mada" + "m"
// newword = "madam"

console.log(word == newWord ? "palindrome" : "not palindrome");

// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”
let cm = 100000;
console.log(cm, "cm ->", cm / 10 ** 5, "km");

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
const val = 1000;
console.log("Rp.", val.toLocaleString("id-ID") + ",00");

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
let str = "Hello world";
const search = "ell";
console.log(str.replace(search, ""));

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
str = "hello world";
let capitalize = "";
for (let i = 0; i < str.length; i++) {
  if (!i || str[i - 1] == " ") capitalize += str[i].toUpperCase(); // "H"
  else capitalize += str[i].toLowerCase(); // cap = "H" + "e"
  // console.log("current char", str[i], "prev char", str[i - 1]);
}
console.log(str, capitalize);
// Write a code to reverse a string.
// Example : “hello” → “olleh”
word = "hello";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
console.log(word, "->", reversed);

// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
word = "The QuiCk BrOwN Fox";
newWord = "";
for (let i = 0; i < word.length; i++)
  newWord +=
    word[i] == word[i].toUpperCase() // Q == Q
      ? word[i].toLowerCase() //tHe q
      : word[i].toUpperCase(); //tHe

console.log(newWord);

// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42
let num1 = 42,
  num2 = 27;

console.log(num1, num2, "->", num1 > num2 ? num1 : num2);

// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num3 = 18;
if (num1 > num2) [num1, num2] = [num2, num1];
if (num1 > num3) [num1, num3] = [num3, num1];
if (num2 > num3) [num2, num3] = [num2, num3];

if (num1 > num2) {
  const temp = num1;
  num1 = num2;
  num2 = temp;
}

if (num1 > num3) {
  const temp = num1;
  num1 = num3;
  num3 = temp;
}
if (num2 > num3) {
  const temp = num2;
  num2 = num3;
  num3 = temp;
}

console.log([num1, num2, num3].sort((a, b) => a - b).join(" "));

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1
let input = "hello";
console.log(typeof input == "string" ? 1 : typeof input == "number" ? 2 : 3);

// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
word = "An apple a day keeps the doctor away";
console.log(word.replace(/a/gi, "*"));
