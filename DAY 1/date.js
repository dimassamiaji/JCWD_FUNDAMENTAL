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
