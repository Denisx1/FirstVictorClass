// let name = "212";
// let age = 26;
// let hasWife = false;
// без иднгтификатора переменная оглашается глобально

// console.log(name);

// console.log(age);
// alert(name)
// console.log(hasWife);

// console.log(10%2)

// console.log(2>3)
// console.log(2<3)

//  строгая и нестрогая равность или неравность отличается
// нестрогое равно то есть == смотрит именно на значение
// а строгое учитывает тип данных
// console.log(2=='2');
// console.log(2==='2');

// NAN - not a number

// console.log('2 '+2)
// console.log('2'* 2)
// console.log('2a'* 2)
// console.log(true)
// console.log(typeof NaN)
// 8 типов данных

// простые и ссылочные
// 1 простые

// 1. 'hello' - string
// 2. 2 = number
// BigInt
// true = boolean
// undefined - не существует
// null - млжно поместить туда что то
// Symbol - уникальность некоторого идентификатора

// простой тип данных - это что то простое одна буква слово и так далее
// ссылочный тип данных

// Object - ссылочный тип данных

// let s = Symbol('ip')
// console.log(s)
// прототипы в js это служебные данные
user = {
  name: "admn",
  age: 14,
  hasWife: true,
  bogdan: false,
  job: {
    title: "Senior",
    payment: 9999999,
  },
};

// // console.log(user['hasWife'])
// user.age = 19;
// user.car = true;
// user.job.team = {
//   name: "Vova",
// };
// delete user.hasWife;
// console.log(user);

// if (user.age > 18) {
//   let test = 17;
//   console.log("welcome");
// } else {
//   if (user.name == "admin") {
//     console.log("welcome");
//   } else {
//     console.log("иди учись тип");
//   }
// }

// if (user.age > 18) {
//   console.log("welcome");
// } else if (user.name == "admin") {
//   console.log("welcome");
// } else {
//   console.log("too young");
// }

if (user.age > 18 && user.name == "admin") {
  console.log("welcome");
} else {
  console.log("too young");
}

// const name = "Karina";
// switch (name) {
//   case "Karina":
//     console.log("hello darling");
//     break;
//   case "Bogdan":
//     console.log("yo man");
//     break;
//   case "Anna":
//     console.log("Ann");
//     break;
// }
