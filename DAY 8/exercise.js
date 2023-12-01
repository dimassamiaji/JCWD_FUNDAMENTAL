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
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      intersection[key] = obj1[key];
    }
  }
  return intersection;
}

console.log(objectIntersection({ a: 1, b: 2 }, { a: 1, c: 3 }));

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

function mergeAndRemoveDuplicates(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  let uniqueArray = [];

  mergedArray.forEach(function (item) {
    if (!this[item.email]) {
      this[item.email] = true;
      uniqueArray.push(item);
    }
  }, {});
  return uniqueArray;
}

let arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

let arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

let mergedArray = mergeAndRemoveDuplicates(arr1, arr2);
console.log(mergedArray);

// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

function switchProperties(array) {
  return array.map((obj) => {
    let switchedObj = {};

    for (let key in obj) {
      switchedObj[obj[key]] = key;
    }
    return switchedObj;
  });
}

let inputArray = [{ name: "David", age: 20 }];
let outputArray = switchProperties(inputArray);
console.log(outputArray);

// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// 1. Buat sebuah array of products
// a. Setiap product memiliki property name,price
// b. Product sepatu memiliki category,size,color,brand
// c. Product Komputer memiliki category,brand,ram, storage,processor
// d. Product Sepeda memiliki category,brand,color,type
// 2. Buat sebuah function untuk filtering product by category atau product by name
// 3. Buat sebuah function untuk mengurutkan product dari termurah-termahal, termahal-termurah

class IsProduct {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
class Sepatu extends IsProduct {
  constructor(name, price, category, size, color, brand) {
    super(name, price, category);
    this.size = size;
    this.color = color;
    this.brand = brand;
  }
}
class Komputer extends IsProduct {
  constructor(name, price, category, brand, ram, storage, processor) {
    super(name, price, category);
    this.brand = brand;
    this.ram = ram;
    this.storage = storage;
    this.processor = processor;
  }
}

class Sepeda extends IsProduct {
  constructor(name, price, category, brand, color, type) {
    super(name, price, category);
    this.brand = brand;
    this.color = color;
    this.type = type;
  }
}

const product = [
  new Sepatu("Adidas 90 Continental", 1500000, "Sepatu", 43, "Black", "Adidas"),
  new Komputer(
    "Zenbook Pro 14",
    25000000,
    "Komputer",
    "Asus",
    "16 Mb",
    "1 Tb",
    "Intel Core i7"
  ),
  new Sepeda("Trifold", 5000000, "Sepeda", "Polygon", "Merah", "Fold Bike"),
];

function findProductsByCategory(category) {
  return product.filter((item) => item.category === category);
}
console.log(findProductsByCategory("Komputer"));

function findProductByName(name) {
  return product.find((item) => item.name === name);
}
console.log(findProductByName("Trifold"));

function sortProductFromLowToHigh() {
  return product.sort((a, b) => a.price - b.price);
}
console.log(sortProductFromLowToHigh());

function sortProductFromHighToLow() {
  return product.sort((a, b) => b.price - a.price);
}
console.log(sortProductFromHighToLow());

// 4. Buatlah sebuah class untuk menampung user
// a. Setiap user memiliki email,name,password
// b. Untuk menambah user baru wajib lewat register
// c. Email tidak boleh ada yang sama
// d. Input email wajib ada validasi symbol “@”
// e. Input password wajib menggunakan huruf besar 1, huruf kecil 1, symbol @ atau !
// f. Tampilkan user yg sudah terdaftar lewat sebuah getter
// g. User yang tampil hanya boleh email dan namenya saja

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
