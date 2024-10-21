const age = 10;
// константа используктся если переменна не плпнирует менятся
// age > 18 ? console.log("111") : console.log("2233");

// const isAdult = age > 18 ? "yes" : "no";
// console.log(isAdult);
// const name1 = 'Victor'
// const name2 = 'Victor'

const user1 = { name: "Victor" };

// const user2 = user1
// user2.name = 'Dima'

// console.log(user1 === user2)
// console.log(user1.name)
// console.log(user2.name)

// масив не выделяется отдельным типом данных это тот же обект только с дркгим поведением
// потому что в масиве есть ключ это индекс и под индексом хранится значение

const names = ["Victor", "Karina", "Anna", "Max"];
// console.log(names)
// console.log(names[6])
// names.push("olga", "Julia", "Lera");
// names.unshift('Nastya', 'Okssana')
// names.pop()
// names.shift()

// console.log(names);
// const foreach1 = names.forEach((i, o, array) =>
//   i.length > 3 ? i : i,"lenght is lower than 3"
// );

// const strings = ['Denis', 'Max', 'Bogdan', 'Oleg', 'Oksana']
// const allTypes = ['Denis', 2, true, false, 'Maxim']
// console.log(numbers, strings, allTypes)

// const valuesByIndex = []
// valuesByIndex[0]='Victor'
// valuesByIndex[1] = 2
// valuesByIndex[2] = true
// console.log(valuesByIndex)

// for (let index = 0; index < 10; index++) {
//   document.write('<div style="background-color: lightcoral; padding: 10px; margin: 5px;">This is div 3</div>');
// }

// for (let index = 0; index < 10; index++) {
//   document.write(`<div style="background-color: lightcoral; padding: 10px; margin: 5px;">This is div ${index} </div>`);
// }

// let index = 0
// while (index < 20) {
//   document.write(`<div><h1> hello ${index}</h1></div>`);
//   index++
// }

// const numbers = [0,1,2,3,4,5,6,7,8,9]
// for (let index = 0; index < numbers.length; index++) {
//   console.log(index)
// }

// const strings = ['Denis', 'Max', 'Bogdan', 'Oleg', 'Oksana']
// for(let i = 0; i <strings.length; i++){
//   console.log(strings[i])
// }

// const allTypes = ['Denis', 2, true, false, 'Maxim']
// for(i=0; i<allTypes.length; i++){
//   console.log(allTypes[i])
// }
// const newArrayWithOnlyBoolean = []

// const allTypes = ["Denis", 2, true, false, "Maxim"];
// for (i = 0; i < allTypes.length; i++) {
//   if (typeof allTypes[i] == 'boolean') {
//     newArrayWithOnlyBoolean.push(allTypes[i])

//   }
// }
// console.log(newArrayWithOnlyBoolean);

// const newArrayWithOnlyBoolean = []

// const allTypes = ["Denis", 2, true, false, "Maxim"];
// for (i = 0; i < allTypes.length; i++) {
//   if (typeof allTypes[i] == 'string') {
//     newArrayWithOnlyBoolean.push(allTypes[i])

//   }
// }
// console.log(newArrayWithOnlyBoolean);
// const newArrayWithOnlyBoolean = []

// const allTypes = ["Denis", 2, true, false, "Maxim"];
// for (i = 0; i < allTypes.length; i++) {
//   if (typeof allTypes[i] == 'number') {
//     newArrayWithOnlyBoolean.push(allTypes[i])

//   }
// }
// console.log(newArrayWithOnlyBoolean);

// const allTypes = [];
// allTypes[9] = "Denis";
// allTypes[12] = 2;
// allTypes[1] = "Fix";
// allTypes[8] = "Denis";
// allTypes[400] = 2;
// allTypes[2] = "Fix";
// allTypes[10] = ["Denis", "Max"];
// allTypes[18] = "Denis";
// allTypes[347] = 2;
// allTypes[89] = "Fix";

// let o = 1;
// console.log(allTypes);
// for (i = 0; i < allTypes.length; i += o) {
//   document.write(`<div>hello${allTypes[i]}</div>`);
//   console.log(o);
// }

// let allTypes2 = Array.from({ length: 100 }, (_, i) => i++);
// for(i=0; i<allTypes2.length; i+=2){
//   console.log(allTypes2[i])
// }
// for (let i = 0; i < allTypes2.length; i += 2) {
//   console.log(`Step: ${i}`);
//   document.write(`Step: ${i} <br>`);
// }

// for (let i = 0; i < allTypes2.length; i ++) {
//   console.log(`${i%2==0?`Step ${i} ${allTypes2[i]}`:''}`)
//   document.write(`${i%2==0?`Step ${i} ${allTypes2[i]}`:''} <br>`);
// }
// for (let i = 0; i < allTypes2.length; i ++) {
//   console.log(`${i%2==0?'':`Step ${i} ${allTypes2[i]}`}`)
//   document.write(`${i%2==0?'':`Step ${i} ${allTypes2[i]}`} <br>`);
// }

// const arr = ["a", "b", "c"];

// for (i = 0; i < massive.length; i++) {
//   arr.push(massive[i])
// }
// console.log(arr);

// const massive = [1,2,3]
// // massive.push(4,5,6)
// massive.unshift(4,5,6)
// console.log(massive)

const massive = [1, 2, 3, 4, 5];
// const deleteValue = massive.shift()
// const deleteValue = massive.pop()
// console.log(massive.slice(3))
// console.log(massive.slice(0, 2));
// const deleteElem = massive.splice(3,6)
// massive.push('a','b','c')
// console.log(massive.concat(deleteElem))
// const firstOneElem = massive.splice(0,1)
// const secondElems = massive.splice(0,3)
// const lastderleteElem = massive.splice(0)
// firstOneElem.push('a','b')
// secondElems.push('c')
// lastderleteElem.push('e')
// console.log(firstOneElem.concat(secondElems).concat(lastderleteElem))

// const arr = Array.from({ length: 10 }, (_, i) => i++);
// for(i=0; i<arr.length; i++){
//   console.log(arr[i]%2?'':arr[i])
// }
// const newArray = []

// for(i=0; i<arr.length; i++){
//   newArray.push(arr[i])
// }
// console.log(newArray)
// let newArray = []

// for(i=0; i<arr.length; i++){
//   newArray[i] = arr[i]
// }
// console.log(newArray)

const mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// i = 0
// while (i<mass.length){
//     console.log(i)
//     i++
// }
// for(i=0; i<mass.length; i++){
//     console.log(mass[i])
// }

// i = 0;
// while (i < mass.length) {
//   console.log(mass[i]);
//   i+=2;
// }

// for(i=0; i<mass.length; i+=2){
//     console.log(mass[i])
// }

// i = 0;
// while (i < mass.length) {
//   console.log(i%2==0?i:'');
//   i++;
// }

// for(i=0; i<mass.length; i++){
//     console.log(i==0?'':i%2==0? i: '')
// }

// for(i=0; i<mass.length; i++){
//     console.log(i%3==0? mass[i]=`${i} okten`: i==0? '':'')
// }

// console.log(mass.reverse())

// console.log(mass.reverse())

// for(i=0; i<mass.length; i++){
//     console.log(i%3==0? `${mass[i]} okten`: '')
// }
// const ret = mass.filter((val, index, arr)=>{
//     return val%3===0
// }).map((cur)=>{
//     return cur = `okten`
// })
// console.log(ret)

// const res = mass.filter((num, ind)=> num%2===0)
// console.log(res)

// const res = mass.filter((num, ind)=> ind%2===0)
// console.log(res)

// const res = mass.filter((num, ind)=> ind%2!==0)
// console.log(res)

// const arr = Array.from({length: 50}, (_, i)=>  i++)
// console.log(arr.filter((val, ind)=>val%2===0))

// const arr = Array.from({ length: 50 }, (_, i) => i++);
// console.log(arr.filter((val, ind) => val % 2 !== 0));

// const arr = Array.from({ length: 20 }, (_, i) => i++);

// const newArray = []
// const arrLenght = 20

// for(i=0; i<arrLenght; i++){
//     newArray.push(Math.random()*100)
// }
// console.log(newArray)

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArray = [];
const arrayLength = 20; // кількість елементів у масиві
const minValue = 8; // мінімальне значення
const maxValue = 732; // максимальне значення

for (let i = 0; i < arrayLength; i++) {
  randomArray.push(getRandomInRange(minValue, maxValue));
}
// console.log(randomArray)
// console.log(randomArray.filter((val, index)=> !((index+1)%3)))

// console.log(randomArray);
// console.log(
//   randomArray.filter((val, index) => (val % 2 === 0 ? !((index + 1) % 3) : ""))
// );

// for(i=0; i<randomArray.length; i++){
//     if((i+1)%3===0){
//         console.log(randomArray[i])
//     }
// }

// for(i=0; i<randomArray.length; i++){
//     if((i+1)%3===0 && randomArray[i]%2===0){
//         console.log(randomArray[i])
//     }
// }
// const newArray2 = []
// for(i=0; i<randomArray.length; i++){
//     if((i+1)%3===0 && randomArray[i]%2===0){
//         newArray2.push(randomArray[i])
//     }
// }
// console.log(newArray2)

// console.log(randomArray);

// const filterfunc = randomArray.filter((vall, index, arr) => {
//   if (arr[index + 1] % 2 === 0) return arr[index];
// });
// console.log(filterfunc);

// const arr = [100, 250, 50, 168, 120, 345, 188];
// sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i] / arr.length.toFixed(2);
// }
// console.log(sum);

// const arr = [100, 250, 50, 168, 120, 345, 188];
// const newMassive = []
// for(i=0; i<arr.length; i++){
//     newMassive.push(arr[i]*5)
// }
// console.log(newMassive)

const mixedArray = [
  42, // Число
  "Hello", // Строка
  true, // Булево значение
  null, // null
  undefined, // undefined
  { name: "Alice" }, // Объект
  [1, 2, 3], // Массив
  function () {
    return "Hi";
  }, // Функция
  NaN, // NaN (не число)
  new Date(), // Объект Date (дата)
  7.5, // Число с плавающей запятой
  false, // Булево значение
  Symbol("id"), // Символ
  BigInt(12345678901234567890n), // BigInt
  "123", // Строка
  /abc/, // Регулярное выражение
  -100, // Отрицательное число
  null, // null (повторно)
  [true, "string", 42], // Массив с разными типами
  { key: 100, val: "value" }, // Объект с ключами
];
// const filterMass = mixedArray.filter((val)=> typeof val ==='number'?val:'')
// console.log(filterMass)

const mass1 = [ 'a', 'b', 'c']
sum = ''
// for(i=0; i<mass1.length; i++){
//     sum+=mass1[i]
// }
// console.log(sum)
// let i = 0
// while(i<mass1.length){
//     sum+=mass1[i]
//     i++
// }

// for (const element of mass1) {
//     sum+=element
// }
// console.log(sum)
