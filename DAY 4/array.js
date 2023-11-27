const arr1 = ["A", "B", "C", "D", "E"];
const arr2 = new Array("A", "B", "C", "D", "E"); // array of string
const scores = [10, 20, 30, 40, 50]; // array of objects
const student = [
  {
    name: "naruto",
    email: "naruto@gmail.com",
  },
  {
    name: "sasuke",
    email: "sasuke@gmail.com",
  },
]; // array of objects

console.log("ABCDE".split("")); // split merupakan method dari string to array
console.log("ayam gorerng".split(" "));

console.log(arr1[1]); // accesing value dalam array lewat indexnya
console.log(1, 2, "assfasdndsad", {}); // tidak disarankan menyimpan data yang berbeda beda dalam sebuah array

//method dalam array
const fruits = ["apel", "duren", "mangga", "semangka", "jambu", "nanas"];
console.log(fruits.toString(), fruits); //merubah array menjadi string
const fruits2 = ["melon", "pepaya"];
console.log(fruits.join(" ")); //merubah array jadi string dan replace "," dengan arg dalam join
console.log(fruits.pop()); // method untuk menghapus last index dari array => nanas dihapus dan length berkurang
console.log(fruits.push("manggis")); // method untuk menambahkan element baru di index terakhir => tambah manggis dan length bertambah
console.log(fruits.shift()); //method untuk menghapus index pertama dari array => apel dihapus dan length berkurang
console.log(fruits.unshift("jeruk")); // method untuk menambhkan element ke index pertama => jeruk ditambah di index pertama
console.log(fruits.length); //sebuah props untuk menampilkan panjang array
console.log(fruits.concat(fruits2)); //menggabungkan array fruits2 ke array fruits
console.log(fruits.splice(4, 1));
//splice untuk menghapus element dalam array
//arg1 = start index => mau dihapus start index berapa? contoh index 4
//arg2 = delete count => berapa byk element yg mau dihapus based on arg 1
console.log(fruits);
fruits.splice(3, 0, "pisang");
//arg3 = menambahkan value ke dalam array berdasarkan arg 1(index)
console.log(fruits);
fruits.splice(3, 2, "pepaya", "rambutan");
console.log(fruits);
console.log(fruits.slice(0, 3));
fruits.push("mangga");
console.log(fruits);
console.log(fruits.indexOf("mangga")); // mencari index dari sebuah array yang muncul pertama kali
console.log(fruits.lastIndexOf("mangga")); // mencari index dari sebuah array yang muncul paling terakhir

//looping
for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);
for (let fruit of fruits) console.log(fruit, "cara 2");
const classes = ["JCWD", "JCDM", "JCUIUX", "JCDS"];
console.log(classes[0]);
console.log(classes[1]);
console.log(classes[2]);
console.log(classes[3]);
for (let i = 0; i < classes.length; i++) console.log(i, classes[i]);
for (let kelas of classes) console.log(kelas, "ini cara 2");
for (let i = classes.length - 1; i >= 0; i--) console.log(classes[i]);

let arr3 = [1, 2, 3];
console.log(arr3.push(4), "ini hasil returnnya");
console.log(arr3.push(5));
console.log(arr3);

// forEach, map, filter, find, reduce

arr3.forEach((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});

const wargakonohas = ["naruto", "sakura", "sasuke", "tsunade", "kakashi"];

console.log(
  wargakonohas.forEach((warga, i) => {
    console.log(warga, "adalah index ke", i);
    return warga + i;
  })
);

console.log(
  wargakonohas.map((warga, i) => {
    console.log(warga);
    // return "hehehe";
  })
);

console.log(
  wargakonohas.filter((warga) => {
    if (warga == "naruto" || warga == "sasuke") return warga;
  })
);
console.log(
  wargakonohas.map((warga) => {
    if (warga == "naruto" || warga == "sasuke") return warga;
  })
);

console.log(
  wargakonohas.find((warga, i) => {
    // console.log(warga);
    // if (warga == "naruto") return "hello";
    if (warga == "sasuke") return i;
  })
);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((sum, current) => sum + current));
const numbers2 = [1, 2, 4];
console.log(numbers2.reduce((sum, current) => sum + current));
