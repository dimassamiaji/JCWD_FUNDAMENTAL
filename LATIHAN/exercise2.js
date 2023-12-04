// Soal 1: Class Basic
// Buatlah sebuah class Person yang memiliki properti name dan age, serta method greet()
// untuk menampilkan pesan sapaan.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old`
    );
  }
}

const person1 = new Person("Dimas", 29);

console.log(person1);

console.log(person1.name);
console.log(person1.age);
person1.greet();

// Soal 2: Class dengan Conditional
// Buat class TemperatureConverter yang memiliki method convert untuk mengonversi suhu
// dari Celsius ke Fahrenheit. Jika suhu yang dimasukkan kurang dari 0 derajat Celsius,
// tampilkan pesan bahwa suhu adalah "dingin", jika lebih dari 30 derajat Celsius, tampilkan
// pesan bahwa suhu adalah "panas", dan jika di antara keduanya, tampilkan pesan "suhu
// nyaman".

class TemperatureConverter {
  convert(celcius) {
    let fahrenheit = (celcius * 9) / 5 + 32;
    console.log(`Temperatur in Fahrenheit: ${fahrenheit.toFixed(2)}`);

    if (celcius < 0) console.log("Dingin");
    else if (celcius > 30) console.log("Panas");
    else console.log("Nyaman");
  }
}
const tempConverter = new TemperatureConverter();

tempConverter.convert(25);
tempConverter.convert(32);
tempConverter.convert(-5);

// Soal 3: Class dengan Looping
// Buat class Counter yang memiliki properti start dan end, serta method count() untuk
// menampilkan angka dari start hingga end menggunakan looping.

class Counter {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  count() {
    for (let i = this.start; i <= this.end; i++) {
      console.log(i);
    }
  }
}

let counter = new Counter(1, 5);
counter.count();
