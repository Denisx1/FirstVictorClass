// // 3 столпа на которой стоит ООП 1 наследование 2 инкапсуояция 3 полиморфизм
// // принцип kiss keep is simple stupid

// // const user = {
// //   name: "Victor",
// //   age: 26,
// //   seyHello: () => {
// //     console.log("hello my name", user.name);
// //   },
// // };
// // const user1 = {
// //   name: "anna",
// //   age: 26,
// //   seyHello: () => {
// //     console.log("hello my name", user1.name);
// //   },
// // };
// // const user2 = {
// //   name: "Dima",
// //   age: 26,
// //   seyHello: () => {
// //     console.log("hello my name", user2.name);
// //   },
// // };
// // const user3 = {
// //   name: "Nastya",
// //   age: 26,
// //   seyHello: () => {
// //     console.log("hello my name", user3.name);
// //   },
// // };

// // class User {
// //   // конструктор это функция занимается построением наших обектов
// //   //   this указывает на то что сейчас будет построенно указывает название ключа
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   sayHello() {
// //     console.log(this.name, "say hello to you");
// //   }
// //   study(title){
// //     console.log(this.name, 'studing' , title)
// //   }
// // }

// // const user = new User("Victor", 26);
// // const user2 = new User("dima", 18);
// // const user3 = new User("nastya", 15);
// // console.log(user);
// // console.log(user2);
// // user3.sayHello();
// // user3.study('js');

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//   }
//   greeting() {
//     console.log(`hello my name is ${this.name} I am ${this.age}`);
//   }

// }

// class Developer extends Human {
//   // super означает что мы что то будем принимать от родительского класса
//   constructor(name, age, skill) {
//     super(name, age);
//     this.skill = skill;
//   }
//   codding(hours) {
//     console.log(`i am codding on${this.skill} ${hours} hours per day`);
//     console.log(`per today i have earned ${hours * 3} dollars`);
//   }
// }
// class TeamLead extends Developer {
//   constructor(name, age, skill) {
//     super(name, age, skill);
//   }

//   codding(hours) {
//     console.log(`я вжк свое выдкодив`);
//   }
// }

// // полиморфизм это когда один и тот же метот исполняет одну и ту же работу
// // как на примере тим лид и девелопер
// const ihor = new Human("Ihor", 25);
// const Veronika = new Developer("Veronika", 19, "React");
// const valera = new TeamLead("valera", 30, ["Noed", "Nest"]);
// valera.codding(10);
// console.log(ihor);
// console.log(Veronika);
// Veronika.greeting();
// Veronika.codding(8);

// class BasicPc {
//   constructor(ram, power, name) {
//     this.ram = ram;
//     this.power = power;
//     this.name = name;
//   }
//   powerOn() {
//     console.log("i am processing power");
//   }

//   upgadePower() {
//     this.power = this.power * 1.1;
//     console.log(`your pc improves to 10 percent and it is ${this.power}`);
//     return;
//   }
//   upgadeRam() {
//     this.ram = this.ram * 2;
//     console.log(`you RAM has improved to ${this.ram}`);
//     return;
//   }
//   powerGame() {
//     if (this.power < 500 && this.ram < 8) {
//       console.log(`на цьому відрі ігри не запускаються.`);
//     } else {
//       console.log(`your FPS = ${this.power / this.ram / 2}`);
//     }
//     return;
//   }
// }

// class Laptop extends BasicPc {
//   constructor(ram, power, name, diagonal, batary) {
//     super(ram, power, name);
//     this.diagonal = diagonal;
//     this.batary = power / (diagonal * ram);
//   }
//   // get bataryLife(){
//   //   return this.power/(this.diagonal*this.ram)
//   // }
// }

// class Ultrabook extends Laptop {
//   constructor(ram, power, name, diagonal, weight, batary) {
//     super(ram, power, name, diagonal, batary);
//     this.weight = weight;
//   }
//   powerOn() {
//     console.log(this.weight, this.batary);
//     if (this.weight > 2 && this.batary < 4) {
//       console.log(
//         `your batary = ${this.batary} and your weigh = ${this.weight} but to powerOn has to have batary min 4 and weigh 2`
//       );
//       return;
//     }
//   }
// }

// class GamePc extends BasicPc {
//   constructor(ram, power, name) {
//     super(ram, power, name);
//   }

//   powerGame() {
//     if (this.power < 500 && this.ram < 8) {
//       console.log(`на цьому відрі ігри не запускаються.`);
//     } else {
//       console.log(`your FPS = ${(this.power / this.ram) * 2}`);
//       console.log(
//         `when you had started the game your power reduced ${
//           this.power * 0.9
//         } but was ${this.power}`
//       );
//     }

//     return;
//   }
// }

// const computer = new BasicPc(12, 455, "Asus");
// const laptop = new Laptop(16, 600, "asus", 17);
// const ultrabook = new Ultrabook(8, 200, "zephyrus", 12, 3);
// const newUltrabook = new Ultrabook(1, 2, "dsaD", 12, 4, 5);
// const gameComputer = new GamePc(32, 700, "razer");
// // computer.powerGame();
// gameComputer.powerGame();
// // console.log(gameComputer);

// class Car {
//   constructor(manufacture, yearRealized, maxSpeed, volume) {
//     this.manufacture = manufacture;
//     this.yearRealized = yearRealized;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;

//   }
//   drive() {
//     console.log(`we are driving with ${this.maxSpeed} KWH`);
//     return;
//   }
//   info() {
//     console.log({
//       manufacture: this.manufacture,
//       yearRealized: this.yearRealized,
//       maxSpeed: this.maxSpeed,
//       volume: this.volume,
//     });
//     return;
//   }
//   increaseSpeed(newSpeed) {
//     if (newSpeed) {
//       this.maxSpeed = newSpeed;
//       console.log(`new speed is ${newSpeed}`);
//     } else {
//       console.log(`Enter new Speed`);
//     }
//     return
//   }
//   changeYear(newYear){
//     if(newYear){
//       this.yearRealized = newYear
//       console.log(`new Realized Year is ${newYear}`)
//     }else{
//       console.log(`Enter new Year`);
//     }
//   }
//   addDriver(driver){
//     this.driver = driver
//   }
// }
// let driver = {
//   name: 'John Doe',
//   age: 30,
//   license: 'B123456'
// };

// const wolksvagen = new Car("German", 2012, 220, 2.5);
// wolksvagen.addDriver(driver)
// wolksvagen.changeYear(2014)
// wolksvagen.increaseSpeed(240);
// console.log(wolksvagen);

class Cinderella {
  constructor(name, age, legSize) {
    this.name = name;
    this.age = age;
    this.legSize = legSize;
  }
}

class Prince {
  constructor(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
  }
  findCindarellasWithLeg(cindarellas = []) {
    for (const element of cindarellas) {
      if (this.shoeSize === element.legSize) {
        console.log(`${prince.name} will be married on ${element.name}`);
        break;
      }
    }
  }
}

const prince = new Prince("Den", 23, 37);

let cinderellas = [
  new Cinderella("Оля", 19, 36),
  new Cinderella("Марина", 21, 37),
  new Cinderella("Ірина", 22, 38),
  new Cinderella("Аня", 18, 35),
  new Cinderella("Катя", 20, 36),
  new Cinderella("Таня", 23, 39),
  new Cinderella("Софія", 19, 36),
  new Cinderella("Ліза", 21, 38),
  new Cinderella("Юлія", 20, 37),
  new Cinderella("Вікторія", 22, 39),
];
prince.findCindarellasWithLeg(cinderellas);

// for (const element of cinderellas) {
//   if (prince.shoeSize === element.legSize) {
//     console.log(`${prince.name} will be married on ${element.name}`);
//     break;
//   }
// }
