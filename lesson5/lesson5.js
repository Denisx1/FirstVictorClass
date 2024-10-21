// // console.log('111')

// let str = 'Hello world'
// // console.log(str.toLowerCase())
// // console.log(str.toUpperCase())

// let dealerId = '  3pdsfasdf  '
// // trim delete the gaps in the and and in the start
// // console.log(dealerId.trim())
// // console.log(dealerId)

// // const names = 'Ira;Volodya;Dima;Karina'
// // console.log(names.split(';'))

// // join unites all string in list to 1 string
// console.log(names.join(', '))

// const user = {
//   name: "Victor",
//   age: 26,
//   car: true,
//   bike: true,
//   phone: "Samsung",
//   job: {
//     title: "Senior",
//   },
// };
// const [, Bob, Charlie] = names;
// // переименование переменной в деструктуризации
// const {
//   name: userName,
//   phone,
//   job: { title },
//   ...other
// } = user;
// console.log(userName, title, other);
// // когда мы делаем так то деструктуризация нам делает однокровневую копию
// // и оно копирует только по первому уровню вложености
// // вложености являются ссылками
// const extendedUser = {
//   ...user,
// };
// extendedUser.phone = 'readmi'
// console.log(extendedUser)
// console.log(extendedUser);

// // const dtudent1 = {
// //     name: 'Vasya',

// // }

// // const studentCopy = dtudent1
// // studentCopy.name = 'Dima'
// // console.log(dtudent1, studentCopy)

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
];
// функция которая принимает пераментром функцию нахывается callBack function
// sort смотрит на то возвращеется положитеоьное или отрицательное значение
// numbers.sort((a,b)=>a-b)
// names.sort((a,b)=>{
//     if(a>b ){
//         return -1
//     }
//     return 1
// })

// console.log(numbers)

// const girl = names.filter(name=>name.startsWith('A'))

// console.log(girl)

// const numbers = [5, 3, 8, 1, 2, 7, 6, 4];

// numbers.sort((a, b) => {
//   // Сначала сравниваем четные и нечетные
//   const isEvenA = a % 2 === 0;
//   const isEvenB = b % 2 === 0;

//   if (isEvenA && !isEvenB) {
//     return -1; // Четное число должно идти перед нечетным
//   } else if (!isEvenA && isEvenB) {
//     return 1;  // Нечетное число должно идти после четного
//   } else if (isEvenA && isEvenB) {
//     return a - b; // Оба четные, сортируем по возрастанию
//   } else {
//     return b - a; // Оба нечетные, сортируем по убыванию
//   }
// });

// console.log(numbers); // [2, 4, 6, 8, 7, 5, 3, 1]

// const numbers1 = numbers.filter(number=> number%2===0)
// console.log(numbers1)

// names.forEach((value) => {
//   if (value.startsWith("A")) {
//     return;
//   }
//   console.log(value);
// });

// find использовать только тогнда когда нужно найти только первыйелемент с условием а если все с условием то filter
// let fate = names.find(girl=>girl.startsWith('G'))
// let destany = names.findIndex(girl=>girl.startsWith('A'))
// console.log(fate)
// console.log(destany)

// some and every
// let b = names.some(girl=>girl.startsWith('A'))
// let c = names.every(girl=>girl.startsWith('A'))
// console.log(b,c)

// const map = names.map(value=>{
//     if(value.length>5){
//         return value + ' bad'
//     }
//     return value + ' good Girl'
// })

// const map = names.map((name, index) => {
//   const age = Math.random() * 25;
//   return {
//     name,
//     id: index + 1,
//     age,
//     man: age > 18,
//   };
// });

// console.log(map);

// const numbers = [
//   12, 45, 7, 23, 67, 3, 98, 34, 56, 29, 14, 6, 81, 22, 5, 11, 92, 38, 73, 50,
// ];

// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));
// console.log(numbers.filter((value) => value % 3 === 0));
// console.log(numbers.filter((value) => value > 10));
// numbers.forEach((value) => document.write(value));
// const map = numbers.map((value) => {
//   return value * 2;
// });
// console.log(map);
// const sum = numbers.reduce((acc, value) => {
//   return acc + value;
// });
// console.log(sum);

// const strings = [
//     "apple", "banana", "cherry", "date", "elderberry",
//     "fig", "grape", "honeydew", "kiwi", "lemon",
//     "mango", "nectarine", "orange", "papaya", "quince",
//     "raspberry", "strawberry", "tangerine", "ugli", "watermelon"
//   ];
// console.log(strings.sort((a,b)=>{
//     if(a<b){
//         return -1
//     }
//     return 1
// }))
// console.log(strings.sort((a,b)=>{
//     if(a>b){
//         return -1
//     }
//     return 1
// }))
// console.log(strings.filter(value => value.length>4))

// const map = strings.map(value=>{
//     return 'Sam says hello to us ' + value
// })
// console.log(map)

// const users = [
//   { name: "vasya", age: 31, isMarried: false },
//   { name: "petya", age: 30, isMarried: true },
//   { name: "kolya", age: 29, isMarried: true },
//   { name: "olya", age: 28, isMarried: false },
//   { name: "max", age: 30, isMarried: true },
//   { name: "anya", age: 31, isMarried: false },
//   { name: "oleg", age: 28, isMarried: false },
//   { name: "andrey", age: 29, isMarried: true },
//   { name: "masha", age: 30, isMarried: true },
//   { name: "olya", age: 31, isMarried: false },
//   { name: "max", age: 31, isMarried: true },
// ];
// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => b.age - a.age));

// const map = users
//   .map((value) => {
//     return {
//       ...value,
//       index: Math.random() * 100,
//     };
//   })
//   .sort((a, b) => a.index - b.index);
// console.log(map);

// const reduce = users.reduce((acc, value) => {
//   if (value.isMarried){
//     const newUser = {
//         ...value,
//         flat: true,
//     }
//     acc.push(newUser)
//   }
//   return acc
// },[]);
// console.log(reduce);

// const cars = [
//   {
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400,
//   },
//   {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250,
//   },
//   {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300,
//   },
//   {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140,
//   },
//   {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200,
//   },
//   {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165,
//   },
//   {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350,
//   },
//   {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400,
//   },
//   {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230,
//   },
// ];
// console.log(cars.filter((value) => value.volume > 3));
// console.log(cars.filter((value) => value.volume === 2));
// console.log(cars.filter((value) => value.producer === "mercedes"));
// console.log(
//   cars.filter((value) => value.producer === "mercedes" && value.volume === 3)
// );
// console.log(
//   cars.filter((value) => value.producer === "subaru" && value.volume === 3)
// );
// console.log(cars.filter((value) => value.power >= 300));
// console.log(
//   cars.filter((value) => value.producer === "subaru" && value.power >= 300)
// );
// console.log(cars.filter((value) => value.engine.includes("ej")));
// console.log(
//   cars.filter(
//     (value) =>
//       value.engine.includes("ej") &&
//       value.power >= 300 &&
//       value.producer === "subaru"
//   )
// );

// console.log(
//   cars.filter((value) => value.producer === "mercedes" && value.volume < 3)
// );
// console.log(
//   cars.filter((value) => value.producer === "bmw" && value.volume > 2)
// );
// console.log(
//   cars.filter((value) => value.producer === "bmw" && value.power > 250)
// );

// const usersWithAddress = [
//   {
//     id: 9,
//     name: "vasya",
//     age: 31,
//     isMarried: false,
//     address: { city: "Kyiv", street: "Gongadze", number: 16 },
//   },
//   {
//     id: 2,
//     name: "petya",
//     age: 30,
//     isMarried: true,
//     address: { city: "Rivne", street: "Zelena", number: 1 },
//   },
//   {
//     id: 4,
//     name: "kolya",
//     age: 29,
//     isMarried: true,
//     address: { city: "Lviv", street: "Pasichna", number: 121 },
//   },
//   {
//     id: 3,
//     name: "olya",
//     age: 28,
//     isMarried: false,
//     address: { city: "Rivne", street: "Shevchenko", number: 90 },
//   },
//   {
//     id: 8,
//     name: "max",
//     age: 30,
//     isMarried: true,
//     address: { city: "Lviv", street: "Kriva Lipa", number: 115 },
//   },
//   {
//     id: 6,
//     name: "anya",
//     age: 31,
//     isMarried: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 2 },
//   },
//   {
//     id: 10,
//     name: "oleg",
//     age: 28,
//     isMarried: false,
//     address: { city: "Kyiv", street: "Centralna", number: 22 },
//   },
//   {
//     id: 5,
//     name: "andrey",
//     age: 29,
//     isMarried: true,
//     address: { city: "Lviv", street: "Gorodotska", number: 43 },
//   },
//   {
//     id: 1,
//     name: "masha",
//     age: 30,
//     isMarried: true,
//     address: { city: "Kyiv", street: "Peremogi", number: 12 },
//   },
//   {
//     id: 7,
//     name: "olya",
//     age: 31,
//     isMarried: false,
//     address: { city: "Lviv", street: "Naukova", number: 16 },
//   },
//   {
//     id: 11,
//     name: "max",
//     age: 31,
//     isMarried: true,
//     address: { city: "Rivne", street: "Ivana Franka", number: 121 },
//   },
// ];

// console.log(usersWithAddress.sort((a, b) => a.id - b.id));
// console.log(usersWithAddress.sort((a, b) => b.id - a.id));
// console.log(usersWithAddress.sort((a, b) => a.age - b.age));
// console.log(usersWithAddress.sort((a, b) => b.age - a.age));
// console.log(
//   usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     return -1;
//   })
// );
// console.log(
//   usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//       return 1;
//     }
//     return -1;
//   })
// );
// console.log(
//   usersWithAddress.sort((a, b) => a.address.number - b.address.number)
// );

// console.log(usersWithAddress.filter((value) => value.age < 30));
// console.log(usersWithAddress.filter((value) => value.isMarried));
// console.log(
//   usersWithAddress.filter((value) => value.isMarried && value.age < 30)
// );
// console.log(usersWithAddress.filter((value) => value.address.number % 2 === 0));
// const reduce = usersWithAddress.reduce((acc, value) => {
//   return acc + value.age;
// }, 0);
// console.log(reduce);
// const reduce1 = usersWithAddress.reduce((acc, value) => {
//   if (value.isMarried && value.age > 30) {
//     const ismarriedAndOlder = {
//       ...value,
//       child: true,
//     };
//     acc.push(ismarriedAndOlder);
//   }
//   return acc;
// }, []);
// console.log(reduce1)

// const cars = [
//   {
//     brand: "Toyota",
//     enginePower: 150,
//     owner: {
//       name: "Ivan",
//       age: 30,
//       drivingExperience: 10,
//     },
//     price: 20000,
//     year: 2018,
//   },
//   {
//     brand: "Ford",
//     enginePower: 180,
//     owner: {
//       name: "Olena",
//       age: 28,
//       drivingExperience: 8,
//     },
//     price: 22000,
//     year: 2020,
//   },
//   {
//     brand: "BMW",
//     enginePower: 250,
//     owner: {
//       name: "Serhii",
//       age: 35,
//       drivingExperience: 12,
//     },
//     price: 35000,
//     year: 2019,
//   },
//   {
//     brand: "Honda",
//     enginePower: 140,
//     owner: {
//       name: "Kateryna",
//       age: 27,
//       drivingExperience: 5,
//     },
//     price: 18000,
//     year: 2021,
//   },
//   {
//     brand: "Nissan",
//     enginePower: 160,
//     owner: {
//       name: "Oleh",
//       age: 40,
//       drivingExperience: 15,
//     },
//     price: 21000,
//     year: 2017,
//   },
//   {
//     brand: "Volkswagen",
//     enginePower: 170,
//     owner: {
//       name: "Sofia",
//       age: 32,
//       drivingExperience: 9,
//     },
//     price: 23000,
//     year: 2020,
//   },
//   {
//     brand: "Hyundai",
//     enginePower: 130,
//     owner: {
//       name: "Andrii",
//       age: 26,
//       drivingExperience: 4,
//     },
//     price: 16000,
//     year: 2022,
//   },
//   {
//     brand: "Mazda",
//     enginePower: 145,
//     owner: {
//       name: "Yulia",
//       age: 29,
//       drivingExperience: 7,
//     },
//     price: 19000,
//     year: 2019,
//   },
//   {
//     brand: "Chevrolet",
//     enginePower: 155,
//     owner: {
//       name: "Mykola",
//       age: 38,
//       drivingExperience: 11,
//     },
//     price: 20000,
//     year: 2018,
//   },
//   {
//     brand: "Kia",
//     enginePower: 120,
//     owner: {
//       name: "Lilia",
//       age: 24,
//       drivingExperience: 3,
//     },
//     price: 15000,
//     year: 2023,
//   },
// ];
// const half = Math.floor(cars.length / 2);
// for (let index = 0; index < half; index++) {
//   cars[index].enginePower *= 1.1;
//   cars[index].owner = `New Ownew ${i + 1}`;
// }

// for if(minIndex === -1){
//     return -1
// } (let index = 0; index < half; index += 2) {
//   cars[index].enginePower *= 1.1;
//   cars[index].price *= 1.05;
// }
// for (const car of cars) {
//   if (car.owner.drivingExperience < 5 && car.owner.age > 25) {
//     car.owner.drivingExperience += 1;
//   }
// }
// let totalPrice = 0
// for (const car of cars) {
//     totalPrice+= car.price
// }

// function choseIndexInList(list = [], key) {
//   let minIndex = -1;
//   let maxIndex = -1;
//   for (let index = 0; index < list.length; index++) {
//     if (list[index] === key) {
//       if (minIndex === -1) {
//         minIndex = index;
//       }
//       maxIndex = index;
//     }
//   }
//   if (minIndex === -1) {
//     return -1;
//   }
//   return {
//     minIndex,
//     maxIndex,
//   };
// }
// console.log(choseIndexInList([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14], 3));

