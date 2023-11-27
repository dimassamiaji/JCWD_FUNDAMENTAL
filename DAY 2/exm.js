// Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit

const celcius = 60;
const fahrenheit = (9 / 5) * celcius + 32;
console.log(`${celcius} celcius = ${fahrenheit} fahernheit`);

// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number
let number = 25;
console.log(number % 2 ? "odd number" : "even number");

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
number = 6;
let isPrime = true;
if (number == 1) isPrime = false;
for (let i = 2; i < number; i++) {
  if (!(number % 2)) {
    isPrime = false;
    break;
  }
}
console.log(number, isPrime ? "is" : "is not", "a prime number");

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6
number = 5;
let result = 0;
for (let i = 1; i <= number; i++) result += i;
console.log(result);

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
number = 4;
result = 1;
for (let i = 1; i <= number; i++) result *= i;
console.log(result);

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
number = 15;
let first = 1; //1,2, 3 , 5
let second = 1; // 2, 3, 5 , 8
// 1,1, 2, 3, 5
for (let i = 2; i < number; i++) {
  let tmp = second; // tmp = 5
  second = first + second; // 8
  first = tmp; // 2 3,
}
console.log(second);
