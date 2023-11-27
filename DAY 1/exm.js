// Since you already know about pseudocode, let’s solve this exercise through pseudocode first, and then convert it into a programming code!
// Write a code to find area of rectangle.
// Example : length = 5, width = 3 → 15
// Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3 → 16
const length = 5,
  width = 3;
const rec_area = length * width;
const perimeter = 2 * (length + width);
const per = length * 2 + width * 2;
console.log(rec_area);
console.log(perimeter);

// Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539

const radius = 5;
const diameter = radius * 2;
const circumference = 2 * Math.PI * radius; // 2 * 3.14 * r
const area = Math.PI * radius ** 2; // 3.14 * r pangkat 2
console.log(
  `diameter = ${diameter}, circumference = ${circumference.toFixed(
    4
  )}, area = ${area.toFixed(3)}`
);

// Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65 → 35
const a = 80;
const b = 65;
console.log(180 - a - b);

// Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-02-22");
console.log(date2 - date1); // ms
console.log((date2 - date1) / (1000 * 3600 * 24));

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day
const days = 400;
const year = Math.floor(400 / 365); // 1 year
const month = Math.floor((400 % 365) / 30); //1 month
console.log((400 % 365) % 30);

const day = ((400 % 365) % 30) % 24;

console.log(`${days} days → ${year} year, ${month} month, ${day} days`);

// tipe data
// conditional
// looping
// props and built in methods
