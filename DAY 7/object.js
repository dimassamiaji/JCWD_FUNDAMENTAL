//literal
const user = {};

//constructor class
const user2 = new Object();

//contoh object
const car = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};
console.log(car);

const david = {
  name: "david",
  greet() {
    console.log("Hello!");
  },
};
//name = property
//greet = method
//name dan greet adalah keys
console.log(david);

//add & delete keys dalam object

//add key
david.age = 100;

//update value dalam key
david.age = 20;

//delete key
delete david.age;

//read key
console.log(david.name);
console.log(david["name"]);

//CRUD = create read update delete
const newUser = {
  name: "udin",
  email: "udin@mail.com",
  password: "123456",
};
delete newUser.password;
console.log(newUser);

console.log(david);
console.log(newUser.age, "ini age user");

const student = {
  name: "naruto",
  age: 100,
  address: {
    provinsi: "negara api",
    kota: "bekasi",
    kodepos: 11111,
  },
  test() {
    return {
      test2: "hello",
      //   baru: undefined,
    };
  },
};

console.log(student.address.provinsi);
console.log(student.test().test2);
console.log(student.test().baru);
console.log(student.id?.address);
// console.log(student.undefined);

Object.keys(student).forEach((val) => console.log(val)); //console log setiap key dalam object student
console.log(Object.entries(student));

const entries = [
  ["name", "udin"],
  ["alamat", "jakarta"],
  ["nomor rumah", 100],
];
const fromEntries = Object.fromEntries(entries);

console.log(fromEntries["nomor rumah"]); //key dengan "spasi" hanya dapat diaccess dengan kurung siku
let userrr = {};
// user akan diisi dari data di database
// process => waktu
// userrr.name?.address tapi process diatas belum selesai

// const bukanObj = undefined;
// bukanObj.iniapa;

const arr = [1, 2, 3, 4];

for (let number of arr) {
  console.log(number);
}

for (let key in student) {
  console.log(key); // loop key dalam object
  console.log(student[key]); // loop value dalam object
}

const { name, age } = student;

console.log(name, age);

//spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; //[1,2,3,4,5,6]

const obj1 = {
  name: "david",
};
const obj2 = {
  email: "david@mail.com",
};
const obj3 = {
  ...obj1,
  ...obj2,
}; // {name:"david", email: "david@mail.com"}

const obj4 = {
  ...arr1,
};

// arr4 = [...obj1]; errorr!!

//array bisa dispread ke object
//object tidak bisa dispread ke array
// console.log(arr4);
console.log(obj4);

const obj5 = {
  addresses: [
    {
      provinsi: "banten",
      kota: "tangerang",
    },
    {
      provinsi: "dki jakarta",
      kota: "jakarta barat",
    },
  ],
};

obj5.addresses.map((val) => console.log(val.provinsi)); // map array of object di dalam object

const person = {
  fName: "udin",
  lName: "ujang",
  greet() {
    console.log(`hello ${person.fName} ${this.lName}`); //access key fName dalam object melalui method
  }, // selain menggunakan this bisa juga menggunakan nama variable dr object itu sendiri
  fullname() {
    return this.fName + " " + this.lName;
  },
  displayFullname() {
    console.log(this.fullname());
  },
  test: () => {
    return this.fName; // tidak bisa access
  },
  test2: function () {
    return this.fName; //bisa access
  },
};
person.greet();
console.log(person.fullname());
person.displayFullname();
console.log(person.test());
