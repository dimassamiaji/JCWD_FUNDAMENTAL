// 1. buat function dengan rest param tipe data number. lalu sum seluruh paramnya (gunakan reduce)
// ex: myFunc(1,2,3,4) => 10

const myFunc = (...args) => {
  return args.reduce((_sum, _curr) => _sum + _curr);
};
console.log(myFunc(1, 2, 3, 4)); // Output: 10

// 2. buat function dengan parameter array of Strings. return value string yg memiliki huruf "a"
// ex: ["udin","naruto","sakura"] => ["naruto","sakura"]

function removeNamesWithoutA(arr) {
  return arr.reduce((_val, _curr) => {
    if (_curr.includes("a")) {
      _val.push(_curr);
    }
    return _val;
  }, []);
}

console.log(removeNamesWithoutA(["udin", "naruto", "sakura"]));

// 3. buat function dengan parameter array of numbers. return arraynya dan tambahkan angka 5 disetiap elementnya
// ex: [2,3,4,5] => [7,8,9,10]

function tambahAngkaArray(arr) {
  return arr.map(function (angka) {
    return angka + 5;
  });
}

console.log(tambahAngkaArray([2, 3, 4, 5]));

// 4. buat sebuah function dengan 2 parameter.
//    parameter pertama adalah sorting dengan value "ascending" atau "Descending".charAt
//    parameter kedua adalah array yang akan disorting
// ex: myFunc("ascending", [5,3,4,1,2]) => [1,2,3,4,5]
// ex: myFunc("descending", [5,3,4,1,2]) => [5,4,3,2,1]

function Func(sorting, arr) {
  if (sorting === "ascending") {
    return arr.sort((a, b) => a - b);
  } else if (sorting === "descending") {
    return arr.sort((a, b) => b - a);
  }
}
console.log(Func("ascending", [5, 3, 4, 1, 2]));
console.log(Func("descending", [5, 3, 4, 1, 2]));

// 5. buat funciton untuk menambahkan sebuah element ke dalam arraynya.
//    tipe data dalam seluruh array harus sama, jika tidak sama tidak bisa ditambahkan
//    ada 2 parameter, parameter pertama array itu sendiri, parameter 2 kedua element yang ditambahkan

// ex: myFunc([1,2,3], "4") => "tipe data tidak sesuai"
// ex: myFunc([1,2,3], 6) => [1,2,3,6]

// 6. buat function dengan 2 parameter array of numbers. return hasil penjumlahan dari kedua array
// ex: myFunc([1,2],[3,4]) => 10

// 7. terdapat sebuah variable array [1,2,3,[4,5,[6,7,8]]] gunakan looping untuk print seluruh elementnya
// ex :
// 1
// 2
// 3
// 4
// 5
// 6
// dst..

// 8.  buat function untuk menjumlahkan seluruh ascii code pada karakter dalam string
//    parameter str merupakan sebuah string
//    gunakan method charCodeAt()
//    return hasil penjumlahannya ascii codenya

// ex: myFunc("aa") => 194
//    karena ascii code dari a adalah 97
//    maka returnnya adalah 97+97 = 194

// 9. buat function untuk melakukan penjumlahan dari 1 hingga parameter n dengan recursive

// ex : myFunc(5) => 1+2+3+4+5 = 15

// 10. buat function untuk mencari setiap index dari element yang dicari .
//    2 parameter
//    parameter 1 adalah array itu sendiri
//    parameter 2 adalah value yang dicari

// ex: myFunc([1,2,3,4,2,3,2],2) => [1,4,6]
//    dari array => [1,2,3,4,2,3,2]
//    angka 2 terdapat di index 1,4,6

// 11. buat function dengan rest param numbers.
//    return sebuah array yang menentukan angka tersebut odd/even
// ex: myFunc(1,2,3,4) => ["ganjil","genap","ganjil","genap"] wajib pakai map

// 12. buat function untuk generate random array of numbers
//    1 parameter untuk menentukan panjang array yang akan dibuat
//    random number dari angka 1-100

// ex: myFunc(5) => [90,4,3,2,20]

// 13. buat function untuk menentukan kelulusan student
//    nilai kkm adalah 70
//    student dapat remedial apabila nilai < 70 dan nilai > 60
//    parameternya adalah sebuah nested array
//    console.log kumpulan student yg tidak lulus
//                kumpulan student yg harus remedial
//                kumpulan student yang lulus

// Ex: myFunc([["naruto",50],["sasuke",100],["sakura",60],["joni",60],['ucok',50],["tsunade",100]])
//    lulus ["sasuke","tsunade"]
//    remedial ["joni","sakura"]
//    tidak lulus ["naruto","ucok"]
