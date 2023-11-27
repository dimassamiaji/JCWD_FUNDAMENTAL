// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

const createPyramid = (Height) => {
  let counter = 1;
  for (let i = 1; i <= Height; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += counter > 9 ? `${counter++} ` : `0${counter++} `;
    }
    console.log(result);
  }
};
createPyramid(4);

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const FizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
};

let n = 15;
let result = FizzBuzz(n);
console.log(result.join(" "));

// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return console.log("less weight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return console.log("ideal");
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return console.log("overweight");
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return console.log("very overweight");
  } else {
    return console.log("obesity");
  }
};
calculateBMI(68, 1.75);

// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const removeOddNumbers = (arr) => {
  const eventNumber = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      eventNumber.push(arr[i]);
    }
  }
  return eventNumber;
};
console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

const splitword = (str) => {
  return str.split(" ");
};
console.log(splitword("Hello World"));
