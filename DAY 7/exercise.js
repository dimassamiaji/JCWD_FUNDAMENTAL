// ● Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class LHA {
  constructor(students = [], key) {
    const numbers = students.map((val) => val[key]);
    // if key = score
    // val => val ["score"] or val.score
    this.highest = Math.max(...numbers);
    this.lowest = Math.min(...numbers);
    this.average = (
      numbers.reduce((sum, curr) => sum + curr) / numbers.length
    ).toFixed(2);
  }
}

const calculate = (students = []) => {
  return {
    Score: new LHA(students, "score"),
    Age: new LHA(students, "age"),
  };
};

const students = [
  new Student("naruto", "n@gmail.com", 19, 70),
  new Student("sasuke", "s@gmail", 17, 100),
  new Student("sakura", "saku@gmail.com", 20, 100),
];

console.log(calculate(students));

// ● Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor(total, products) {
    this.total = 0;
    this.products = [];
  }

  addToCart(product, qty) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    console.log("Total: ", this.total);
  }

  checkout() {
    console.log("Transaction data: ", this.products);
    console.log("Total amount: ", this.total);
    return this.products;
  }
}

let transaction = new Transaction();
let product1 = new Product("susu", 80000);
let product2 = new Product("kopi", 10000);

transaction.addToCart(product1, 5);
transaction.addToCart(product2, 5);

transaction.showTotal(); // Output: Total: 50

let result = transaction.checkout();
console.log(result); // Output: [ { product: Product { name: 'Product 1', price: 10 }, qty: 2 }, { product: Product { name: 'Product 2', price: 20 }, qty: 1 } ]

// ● Create a function to check if two objects are equal
// ● Example
// ○ Input : { a: 2 } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: “Hello” } & { a: 1 }
// ○ Output: false
// ● Example
// ○ Input : { a: 1 } & { a: 1 }
// ○ Output: true

function objectsAreEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
console.log(objectsAreEqual({ a: 2 }, { a: 1 }));
console.log(objectsAreEqual({ a: "Hello" }, { a: 1 }));
console.log(objectsAreEqual({ a: 1 }, { a: 1 }));

// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

function objectIntersection(obj1, obj2) {
  let intersection = {};

  for (let i = 0; i < obj.length; index++) {}
}

// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }

// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
