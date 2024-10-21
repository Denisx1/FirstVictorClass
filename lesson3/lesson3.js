// console.log('111')

// const user = {
//     name: 'Victor',
//     age: 26,
//     car: true
// }

// for (const key in user) {
//    console.log(key)
//    console.log(user[key])
// }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// const name = 'Vasil'
// for (const element of name) {
//     console.log(element)
// }

// if(Object.values(user).length){
//     console.log('Not Empty')
// }

// let obj = {
//     name: 'Volodya',
//     age: 20,
//     payment: NaN,
//     girl: undefined,
//     job: null
// }

// console.log(obj)
// const jsonObj = JSON.stringify(obj)
// console.log(jsonObj)
// const resObjParse = JSON.parse(jsonObj)
// console.log(resObjParse)

// functions - поведение

// const user = {
//     name: 'Victor',
//     age: 26,
//     car: true
// }

// function sayHello(phone) {
//   const userName = "Test";
//   console.log("hello", userName + phone);
// }
// sayHello('0979959522');
// console.log(typeof sayHello);

// function list (defValue){
//   console.log(defValue)
// }
// list([
//   42, // Число
//   "Hello", // Строка
//   true, // Булево значение
//   null, // null
//   undefined, // undefined
//   { name: "Alice" }, // Объект
//   [1, 2, 3], // Массив
//   function () {
//     return "Hi";
//   }, // Функция
//   NaN, // NaN (не число)
//   new Date(), // Объект Date (дата)
//   7.5, // Число с плавающей запятой
//   false, // Булево значение
//   Symbol("id"), // Символ
//   BigInt(12345678901234567890n), // BigInt
//   "123", // Строка
//   /abc/, // Регулярное выражение
//   -100, // Отрицательное число
//   null, // null (повторно)
//   [true, "string", 42], // Массив с разными типами
//   { key: 100, val: "value" }, // Объект с ключами
// ])

// function randomValue(leght){
//   const value = []
//   for (i=0; i<leght; i++){
//     value.push(Math.floor(Math.random()*20))
//   }
//   return value
// }
// console.log(randomValue(10))

// function less(first, second, third) {
//   let max = first;
//   if (second > max) {
//     max = second;
//   }
//   if (third > max) {
//     max = third;
//   }
//   console.log(max)
// }
// less(10,12,13);

// function less(first, second, third) {
//   let min = first;
//   if (second < min) {
//     min = second;
//   }
//   if (third < min) {
//     min = third;
//   }
//   console.log(min)
// }
// less(10,12,13);

// function maxReturnValue(valueList = []) {
//   let max = 0;
//   for (i = 0; i < valueList.length; i++) {
//     if (valueList[i] > max) {
//       max = valueList[i];
//     }
//   }
//   console.log(max);
// }

// maxReturnValue([2, 17, 13, 6, 22, 31, 45, 66, 100, -18]);

// function maxReturnValue(valueList = []) {
//   let min = 0;
//   for (i = 0; i < valueList.length; i++) {
//     if (valueList[i] < min) {
//       min = valueList[i];
//     }
//   }
//   console.log(min);
// }

// maxReturnValue([2, 17, 13, 6, 22, 31, 45, 66, 100, -18]);

// function sumValues (list=[]){
//   let sum = 0
//   for(i=0; i<list.length; i++){
//     sum+=list[i]
//   }
//   console.log(sum)
// }

// sumValues([2, 17, 13, 6, 22, 31, 45, 66, 100, -18])

// function sumValues (list=[]){
//   let sum = 0
//   for(i=0; i<list.length; i++){
//     sum+=list[i]
//   }
//   console.log(sum/list.length)
// }

// sumValues([2, 17, 13, 6, 22, 31, 45, 66, 100, -18])

// function createList() {
//   let randomObject = [];
//   for (i = 0; i < 7; i++) {
//     randomObject.push({
//       id: i + 1,
//       name: `Item ${i + 1}`,
//       value: Math.floor(Math.random() * 100),
//       isActive: Math.random() > 0.5,
//     });
//   }
//   console.log(randomObject);
// }

// function returnValues (list = []){
//   let listValue = []
//   for (const element of list) {
//     for (const key in element) {
//       listValue.push(element[key])
//     }
//   }
//   console.log(Array.from(new Set(listValue)))
// }

// function returnKay(list = []) {
//   let listKay = [];
//   for (const element of list) {
//     for (const elem in element) {
//       listKay.push(elem)
//     }
//   }
//   console.log(Array.from(new Set(listKay)))

// }
// createList();

// function sumWithIndex(firstList = [], secondList) {
//   let newList = [];
//   for (i = 0; i < firstList.length; i++) {
//     newList[i] = firstList[i] + secondList[i];
//   }
//   console.log(newList);
// }
// sumWithIndex([1, 2, 3, 4], [2, 3, 4, 5]);

// function byuCar (carPrice){
//     if(carPrice <money){
//         money -=carPrice
//         console.log(money)
//     }else{
//         console.log('tes')
//         console.log(carPrice - money, 'not enought')
//     }
// }

// function byCarWithReturn(carPrice) {
//   let money = 5000;
//   if (carPrice < money) {
//     console.log("hello");
//     money -= carPrice;
//     return {
//         money,
//         car: true
//     }
//   }
// }
// console.log(byCarWithReturn(4450));

// // lexical enviroment (среда дкйствия переменных)
// // hoisting - функции которым могут вызывать до создания
// // var игнорирует lexical enviroment. так же поддерживает всплытие но пишет undefined
// dollerChanger(29, 5000)
// /**
//  *
//  * @param {*} kurs
//  * @param {*} uah
//  */
// function dollerChanger(kurs, uah){
//     console.log('welcome to emarket')
//     console.log('вы принесли,', uah)
//     const dollars = uah/kurs
//     return dollars
// }

// function declaration() {
//   console.log("declaration");
// }

// const expression = () => {
//   console.log("expression");
//   console.log("function expression не имеет hoisting она не всплывает");
//   console.log("this reference ссылается на отца");
//   console.log(" no arguments");
//   console.log("short return");
// };

// function summator(a, b) {
//   return a + b;
// }
// const summ = summator(2, 2);
// console.log(summ);

// const sumWithExp = (x, y) => x + y;
// console.log(sumWithExp(5, 5));

// function x(a, b ) {
//   return function () {
//     return a + b;
//   };
// }

// function argLogger(){
//     console.log(arguments)
//     console.log('test')
//     let from = Array.from(arguments)
//     console.log(from)
//     for (let index = 0; index < arguments.length; index++) {
//         console.log(typeof arguments[index] === 'object'? '':arguments[index])
//     }
// }
// argLogger(2,3,4,5,6,'fsdgsdfg', [], {name: 'Vitya'})

// const names = ["Victor", "Karina", "Anna", "Max"];

// for (let first of names) {
//   if (first.length >= 5) {
//     continue;
//   }
//   console.log(first)
// }

// function returnMinButConsoleMax() {
//   const listFromIn = Array.from(arguments);
//   let maxValue = listFromIn[0];
//   let minValue = listFromIn[0];
//   for (const element of listFromIn) {
//     if (element > maxValue) {
//       maxValue = element;
//     } else if (element < minValue) {
//       minValue = element;
//     }
//   }
//   console.log(maxValue);
//   return minValue;
// }
// console.log(returnMinButConsoleMax(0, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7));

// function returnKay(list = [], curentWant) {
//   let listKay = [];
//   for (const element of list) {
//     for (const elem in element) {
//       if (curentWant === "Kay") {
//         listKay.push(elem);
//       } else if (curentWant === "Value") {
//         listKay.push(element[elem]);
//       }
//     }
//   }
//   console.log(Array.from(new Set(listKay)));
// }

// returnKay([{ name: "Dima", age: 13 }, { model: "Camry" }], "Value");

// function switchValuesOnPlusOne(list = [], value) {
//   if(value >=0 && value<list.length - 1){
//     let temp = list[value]
//     list[value] = list[value+1]
//     list[value+1] = temp
//   }
//   console.log(list)
//   return list
// }

// switchValuesOnPlusOne([9, 8, 0, 4], 0);

// function transportZeroToEnd(list = []) {
//   let zeros = [];
//   let numbers = [];
//   for (let index = 0; index < list.length; index++) {
//     if (!list[index]) {
//       zeros.push(list[index]);
//     } else {
//       numbers.push(list[index]);
//     }
//   }
//   return numbers.concat(zeros);
// }
// console.log(transportZeroToEnd([1, 0, 6, 0, 3]));

// function deleteGapsBetweenWord(str = ''){
//   return str.trim().split(/\s+/).join(' ')
// }
// console.log(deleteGapsBetweenWord('    Harry       Potter      '))
