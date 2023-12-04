// Exercise - Shooting Game

// ● Specifications :
// ○ Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name

class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health === 0 ? 100 : health;
    this.power = power === 0 ? 10 : power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.currentPlayer = this.players[Math.floor(Math.random() * 2)];
    this.otherPlayer = this.players.find(
      (player) => player !== this.currentPlayer
    );
  }
  getRandomItem() {
    return {
      health: Math.random() > 0.5 ? 10 : 0,
      power: 0,
    };
  }

  start() {
    let round = 1;
    while (this.players[0].health > 0 && this.players[1].health > 0) {
      console.log(`Round ${round}`);
      console.log("Player Status before shooting");
      this.players[0].showStatus();
      this.players[1].showStatus();

      const itemPlayer1 = this.getRandomItem();
      const itemPlayer2 = this.getRandomItem();

      this.players[0].useItem(itemPlayer1);
      this.players[1].useItem(itemPlayer2);

      this.otherPlayer.hit(this.currentPlayer.power);
      this.currentPlayer.hit(this.otherPlayer.power);

      console.log("Player Status after shooting");
      this.players[0].showStatus();
      this.players[1].showStatus();

      [this.currentPlayer, this.otherPlayer] = [
        this.otherPlayer,
        this.currentPlayer,
      ];
      round++;
    }
    if (this.players[0].health <= 0 && this.players[1].health <= 0) {
      console.log("it's a draw!");
    } else {
      const winner =
        this.players[0].health > 0 ? this.players[0] : this.players[1];
      console.log(`The winner is ${winner.name}`);
    }
  }
}

const player1 = new Player("Player A");
const player2 = new Player("Player B");

const shootingGame = new ShootingGame(player1, player2);
shootingGame.start();

// Exercise - Employee Salary

// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept

class Employee {
  constructor(id, name, employeeType) {
    this.id = id;
    this.name = name;
    this.employeeType = employeeType;
  }

  displayEmployeeDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Employee Type: ${this.employeeType}`);
    console.log(`Total Salary: ${this.calculateSalary()}`);
  }
}

class FulltimeEmployee extends Employee {
  constructor(id, name, workingHour) {
    super(id, name, "Full-time");
    this.workingHour = workingHour;
  }

  calculateSalary() {
    const hourlyRate = this.workingHour > 6 ? 75000 : 100000;
    return this.workingHour * hourlyRate;
  }
}

class ParttimeEmployee extends Employee {
  constructor(id, name, workingHour) {
    super(id, name, "Part-time");
    this.workingHour = workingHour;
  }

  calculateSalary() {
    const hourlyRate = this.workingHour > 6 ? 30000 : 50000;
    return this.workingHour * hourlyRate;
  }
}

const fulltimeEmployee = new FulltimeEmployee(1, "Dimas", 7);
const parttimeEmployee = new ParttimeEmployee(2, "Aji", 5);

fulltimeEmployee.displayEmployeeDetails();
parttimeEmployee.displayEmployeeDetails();

// Buatlah sebuah program untuk sebuah restaurant
// Menu resto ada cah kangkung, ayam mayo, fuyunghai , (bisa ditambah)
// Per masing2 menu akan memotong stock bahan makanan
// Untuk resep yang memotong bahan makanan bebas bisa dibuat sendiri

// Customer bisa memesan makanan
// Customer memiliki key nama,total,list pesanan, tgl pesan

// Resto bisa cek bahan makanan mereka
// Resto bisa cek makanan yang paling sering dipesan
// Resto bisa cek list pesanan makanan berdasarkan tanggal
// Resto bisa menambah stock bahan makanan
// Resto bisa cek customer mana yang menghabiskan uang paling banyak (sum dari seluruh order dari nama yang sama)

// // daftar bahan makanan
// class Restaurant {
//   constructor(menu) {
//     this.menu = {
//       "cah kangkung": {
//         ingredients: {
//           kangkung: 5,
//           garlic: 3,
//         },
//         harga: 20000,
//       },
//       "ayam mayo": {
//         ingredients: {
//           ayam: 7,
//           mayonaise: 3,
//         },
//         harga: 30000,
//       },
//       fuyunghai: {
//         ingredients: {
//           telur: 7,
//           bakso: 5,
//           ayam: 3,
//         },
//         harga: 40000,
//       },
//     };
//     this.stockBahan = {
//       kangkung: 100,
//       garlic: 100,
//       bakso: 100,
//       ayam: 100,
//       mayonaise: 100,
//     };
//     this.pesananMakanan = [];
//   }

//   motongStock(menu) {
//     for (let bahan in this.menuResto[menu].ingredients) {
//       this.stockBahan[bahan] -= this.menuResto[menu].ingredients[bahan];
//     }
//   }

//   orderMakanan(nama, pesanan) {
//     let total = 0;
//     let listPesanan = [];

//     pesanan.forEach((item) => {
//       let menu = this.menuResto[item.menu];
//       let harga = menu.harga;
//       total += harga * item.jumlah;
//       listPesanan.push({
//         menu: item.menu,
//         jumlah: item.jumlah,
//         harga: harga,
//       });

//       this.motongStock(item.menu);
//     });

//     let tglPesan = new Date();
//     let order = {
//       nama: nama,
//       total: total,
//       listPesanan: listPesanan,
//       tglPesan: tglPesan,
//     };

//     this.pesananMakanan.push(order);
//     return order;
//   }

//   cekHargaTerendah(menu) {
//     let hargaTerendah = Infinity;
//     let bahanTerendah = "";

//     for (let bahan in this.menuResto[menu].ingredients) {
//       let harga = this.menuResto[menu].ingredients[bahan];
//       if (harga < hargaTerendah) {
//         hargaTerendah = harga;
//         bahanTerendah = bahan;
//       }
//     }

//     return bahanTerendah;
//   }

//   cekStokTerbatas(menu) {
//     let stokTerbatas = Infinity;
//     let bahanTerbatas = "";

//     for (let bahan in this.menuResto[menu].ingredients) {
//       let stok = this.stockBahan[bahan];
//       if (stok < stokTerbatas) {
//         stokTerbatas = stok;
//         bahanTerbatas = bahan;
//       }
//     }

//     return bahanTerbatas;
//   }

//   cekHargaTertinggi(menu) {
//     let hargaTertinggi = -Infinity;
//     let bahanTertinggi = "";

//     for (let bahan in this.menuResto[menu].ingredients) {
//       let harga = this.menuResto[menu].ingredients[bahan];
//       if (harga > hargaTertinggi) {
//         hargaTertinggi = harga;
//         bahanTertinggi = bahan;
//       }
//     }

//     return bahanTertinggi;
//   }
// }

// class Restaurant {
//   constructor() {
//     this.menu = {
//       kangkung: { price: 5000, stock: 100 },
//       ayam_mayo: { price: 10000, stock: 100 },
//       fuyunghai: { price: 7000, stock: 100 },
//     };
//     this.orders = [];
//     this.customers = [];
//   }

//   addStock(item, amount) {
//     this.menu[item].stock += amount;
//   }

//   checkStock(item) {
//     return this.menu[item].stock;
//   }

//   checkBestSellingItem() {
//     let bestSellingItem = null;
//     let maxOrder = 0;

//     this.orders.forEach((order) => {
//       order.list.forEach((item) => {
//         if (this.menu[item]) {
//           if (order.list.length > maxOrder) {
//             maxOrder = order.list.length;
//             bestSellingItem = item;
//           }
//         }
//       });
//     });

//     return bestSellingItem;
//   }

//   checkOrderByDate(date) {
//     let filteredOrders = this.orders.filter((order) => order.date === date);
//     return filteredOrders;
//   }

//   addOrder(customer, list) {
//     let total = 0;

//     list.forEach((item) => {
//       if (this.menu[item]) {
//         this.menu[item].stock--;
//         total += this.menu[item].price;
//       }
//     });

//     this.orders.push({ customer, total, list, date: new Date() });
//   }

//   addCustomer(name, total) {
//     this.customers.push({ name, total });
//   }

//   checkMostExpensiveCustomer() {
//     let mostExpensiveCustomer = null;
//     let maxTotal = 0;

//     this.customers.forEach((customer) => {
//       if (customer.total > maxTotal) {
//         maxTotal = customer.total;
//         mostExpensiveCustomer = customer.name;
//       }
//     });

//     return mostExpensiveCustomer;
//   }
// }

// let restaurant = new Restaurant();

// restaurant.addOrder("Customer 1", ["kangkung", "ayam_mayo"]);
// restaurant.addOrder("Customer 1", ["kangkung", "fuyunghai"]);
// restaurant.addOrder("Customer 2", ["ayam_mayo", "fuyunghai"]);

// restaurant.addCustomer("Customer 1", 25000);
// restaurant.addCustomer("Customer 2", 22000);

// console.log(restaurant.checkStock("kangkung")); // 98
// console.log(restaurant.checkBestSellingItem()); // "kangkung"
// console.log(restaurant.checkOrderByDate(new Date())); // list order by date
// console.log(restaurant.checkMostExpensiveCustomer()); // "Customer 1
