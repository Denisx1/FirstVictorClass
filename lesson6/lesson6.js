
// const flat = nestedArray.flat(7);
// console.log(flat);


// names.splice(2, 0, "nastry");
// console.log(names)


// const nestedArray = [
//   [1, 2, [3, 4]],
//   [5, 6, [7, [8, 9]]],
//   [[10, 11], 12],
// ];
// // void - function don`t have return 
// // const newArray = nestedArray.flat(7)

// // const reduce = newArray.reduce((acc, value)=>{
 
// //     return acc + value
// // })
// console.log(reduce)

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

// const reduce = usersWithAddress.reduce((acc, value)=>{
//     return acc+value.age
// },0)

// console.log(reduce)

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
// const reduce = names.reduce((acc, value)=>{
//     const age = Math.random()*30
//     if(age<18){
//         return acc
//     }
//     const girls = {
//         name: value,
//         age,
//         car: age>25?true:false
//     }
//     acc.push(girls)
    
//     return acc
// }, [])
// console.log(reduce)

// const purchases = [
//     { item: 'Laptop', price: 900 },
//     { item: 'Mouse', price: 25 },
//     { item: 'Keyboard', price: 45 },
//     { item: 'Monitor', price: 150 },
//     { item: 'Phone', price: 600 },
//     { item: 'Headphones', price: 120 },
//     { item: 'Webcam', price: 75 },
//   ];
// const reduce = purchases.reduce((acc, value)=>{
//     acc.totalPrice += value.price
//     if(value.price>100){
//         acc.countExpansiveItem ++
//     }
//     return acc
// }, {totalPrice: 0, countExpansiveItem: 0})  
// console.log(reduce)

// event LOOP

// setTimeout(()=>{
//     console.log('1')
// }, 1000)

// console.log(2)

// setTimeout(()=>{
//     console.log('3')
// }, 500)

const elementById = document.getElementById('btn')
elementById.onclick = ()=>{
    console.log('CLICK')
}
let i = 0
while(i<999999999){
    i++
}
