// const arr = ["anna", "dima", "anton", "nastya", "andrii"];


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
//   console.log(acc)
//   console.log(value)
//   acc.push(value.item)
//   return acc
// }, []) 
// console.log(reduce)

// const x = arr.filter(value=> value.length >= 5)
// console.log(x)

// const z = arr.find(value=> value.length >= 5)
// console.log(z)

// const x1 = arr.some(value=>value.startsWith('n'))
// console.log(x1)

// const x2 = arr.every(value=>value.startsWith('n'))
// console.log(x2)

// arr.sort((a, b) => a.localeCompare(b));
// console.log(arr);

// arr.forEach(value=>{
//   if(value.startsWith('N')){
//     return 
//   }
//   console.log(value)
// })
// for (const element of arr) {
//   if(element.startsWith('n')){
//     break
//   }
//   console.log(element)
// }

// function createCart() {
//   let items = [];
//   let totalPrice = 0;

//   function addItem(itemName, quantity, pricePerUnit) {
//       const item = { itemName, quantity, pricePerUnit };
//       items.push(item);
//       totalPrice += quantity * pricePerUnit;
//       console.log(`${quantity} x ${itemName} добавлено в корзину. Текущая сумма: $${totalPrice}`);
//   }

//   function removeItem(itemName) {
//       for (let i = 0; i < items.length; i++) {
//           if (items[i].itemName === itemName) {
//               totalPrice -= items[i].quantity * items[i].pricePerUnit;
//               console.log(`${items[i].quantity} x ${items[i].itemName} удалено из корзины. Текущая сумма: $${totalPrice}`);
//               items.splice(i, 1);
//               return;
//           }
//       }
//       console.log(`${itemName} не найдено в корзине.`);
//   }

//   function getTotalPrice() {
//       return totalPrice;
//   }

//   function getItems() {
//       return items.slice(); // возвращаем копию массива, чтобы защитить оригинальные данные
//   }

//   // Возвращаем объект с методами для управления корзиной
//   return {
//       addItem,
//       removeItem,
//       getTotalPrice,
//       getItems,
//   };
// }

// // Использование корзины
// const myCart = createCart();

// myCart.addItem('Apple', 2, 3); // 2 x Apple добавлено в корзину. Текущая сумма: $6
// myCart.addItem('Banana', 3, 1); // 3 x Banana добавлено в корзину. Текущая сумма: $9
// myCart.removeItem('Apple');     // 2 x Apple удалено из корзины. Текущая сумма: $3

// console.log(myCart.getTotalPrice()); // Текущая сумма: $3
// console.log(myCart.getItems()); // [{ itemName: 'Banana', quantity: 3, pricePerUnit: 1 }]

// const c = arr.map((value, index) => {
//   return {
//     id: index + 1,
//     name: value,
//   };
// });

// function xx() {
//   // поддерживает hoisting
//   // arguments
//   // this так работакт
//   // синьаксис
// }
// const func = () => {};

// function clouseFc() {
//   let x = 0;
//   return () => {
//     x++;
//     console.log(x);
//   };
// }
// const number = clouseFc();
// number();

// PROMISE
// промис это инстркмент для обработки асинхронности у еоторого есть 3 состояни
// - pending - ожидание
// - resolve - успех
// - reject - провал

// const p = new Promise((resolve, reject) => {
//   resolve("test");
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve("test");
// });

// p.then(value=>{
//   console.log(value)
//   return 22
// }).then(value=>{
//   console.log(value)
// }).catch(e=>{
//   console.log(e)
// })

// async function assTest() {
//   try {
//     const resoult1 = await p;
//     const resolve2 = await p2;
//     console.log(resoult1, resolve2);
//   } catch (e) {
//     console.log(e)
//   }
// }

// assTest();
