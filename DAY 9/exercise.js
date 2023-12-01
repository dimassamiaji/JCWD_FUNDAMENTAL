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
  constructor(name, health, power) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    if (item.health === 10) {
      this.health += 10;
    } else if (item.power === 10) {
      this.power += 10;
    }
  }

  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {
    return {
      health: Math.random() > 0.5 ? 10 : 0,
      power: Math.random() > 0.5 ? 10 : 0,
    };
  }

  start() {
    let player1Turn = true;
    while (this.player1.health > 0 && this.player2.health > 0) {
      this.player1.showStatus();
      this.player2.showStatus();

      const round = 0;
      console.log(`\nround ${round}`);

      const player1Item = this.getRandomItem();
      const player2Item = this.getRandomItem();

      this.player1.useItem(player1Item);
      this.player2.useItem(player2Item);

      this.player1.showStatus();
      this.player2.showStatus();

      if (player1Turn) {
        this.player2.hit(this.player1.power);
      } else {
        this.player1.hit(this.player2.power);
      }

      player1Turn = !player1Turn;
    }

    if (this.player1.health > 0) {
      console.log(`Winner is Player ${this.player1.name}`);
    } else {
      console.log(`Winner is Player ${this.player2.name}`);
    }
  }
}

const player1 = new Player("Asta");
const player2 = new Player("Yuno");
const game = new ShootingGame(player1, player2);
game.start();

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
