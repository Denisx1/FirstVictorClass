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
// names.sort((a,b)=>{
//     return a[0].localeCompare(b[0])
// })
// console.log(names)

// callBacks - функция обратного вызова

// function orderTour(money, callBack) {
//   setTimeout(() => {
//     if (money > 500) {
//       return callBack(null, { country: "egypt", chamge: money - 50 });
//     }
//     callBack("no maoney");
//   }, 1000);
// }

// function prepareTour(cb) {
//   setTimeout(() => {
//     cb(null, "gooooooo");
//   }, 500);
// }
// // в колбеках первым всегда идет ошибка а потом дпнные
// orderTour(600, (err, result) => {
//   if (err) {
//     console.error("error12");
//   } else {
//     prepareTour((err, data) => {
//       if (err) {
//         console.error("233");
//       } else {
//         goToKyiv();
//       }
//     });
//   }
// });

// function getUp(time, callBack) {
//   setTimeout(() => {
//     if (time < 9) {
//       return callBack(null, { time });
//     }
//     return callBack(null, { info: `today is holliday` });
//   }, Math.random() * 2000);
// }

// function brackfast(time, callback) {
//   setTimeout(() => {
//     if (time) {
//       return callback(null, {
//         info: `you are having 15 minutes to eat`,
//         newTime: time + 0.2,
//       });
//     }
//     return;
//   }, Math.random() * 2000);
// }

// function goToShower(time, callback) {
//   setTimeout(() => {
//     if (time) {
//       return callback(null, {
//         info: `I am having Shower and after will try to caught the buss`,
//         newTime: time + 0.5,
//       });
//     }
//     return;
//   }, Math.random() * 2000);
// }

// function caughtBus(time, callback) {
//   setTimeout(() => {
//     if (time < 9) {
//       return callback(null, {
//         info: `I am sittig in a bus`,
//         exactTimeWhenIcoughtABus: time + 0.2,
//       });
//     }
//     return callback(`today i will be late`, null);
//   }, Math.random() * 2000);
// }

// function gotTheJob(time, callback) {
//   setTimeout(() => {
//     if (time) {
//       return callback(null, {
//         info: `today i get the job at `,
//         newTime: time + 0.9,
//       });
//     }
//   }, Math.random() * 2000);
// }

// function haveLunch(time, callback) {
//   setTimeout(() => {
//     if (time) {
//       return callback(null, { info: `i have lunch at`, newTime: time + 3.5 });
//     }
//   }, Math.random() * 2000);
// }

// function goOnThejobAfterLunch(time, callBack) {
//   setTimeout(() => {
//     return callBack(null, {
//       info: `after Lunch i am going continue work at`,
//       newTime: time + 0.8,
//     });
//   }, Math.random() * 2000);
// }

// function inTheEndTheWorkDay(time, callback) {
//   setTimeout(() => {
//     return callback(null, {
//       info: `today i finish the wotk at`,
//       newTime: time + 3.5,
//     });
//   }, Math.random() * 2000);
// }

// function goToGymAfterWork(time, callback) {
//   setTimeout(() => {
//     return callback(null, {
//       info: `in the gym i am going on `,
//       newTime: time + 1,
//     });
//   }, Math.random() * 2000);
// }

// function getHome(time, callback) {
//   setTimeout(() => {
//     return callback(null, {
//       info: `today i get home at `,
//       newTime: time + 2.5,
//     });
//   }, Math.random() * 2000);
// }

// getUp(8.0, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`i got up today at ${result.time}`);
//   brackfast(result.time, (err, ress) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(`after got up i went to shower at ${ress.newTime}`);
//     goToShower(ress.newTime, (err, resoult) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(`after Shower i am going to bussStopp at ${resoult.newTime}`);
//       caughtBus(resoult.newTime, (err, ress) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log(`i cought a buss at ${ress.exactTimeWhenIcoughtABus}`);
//         gotTheJob(ress.exactTimeWhenIcoughtABus, (err, data) => {
//           if (err) {
//             console.log(err);
//           }
//           console.log(data.info, data.newTime);
//           haveLunch(data.newTime, (err, data) => {
//             if (err) {
//               console.log(err);
//             }
//             console.log(data.info, data.newTime);
//             goOnThejobAfterLunch(data.newTime, (err, data) => {
//               if (err) {
//                 console.log(err);
//               }
//               console.log(data.info, data.newTime);
//               inTheEndTheWorkDay(data.newTime, (err, data) => {
//                 if (err) {
//                   console.log(err);
//                 }
//                 console.log(data.info, data.newTime);
//                 goToGymAfterWork(data.newTime, (err, data) => {
//                   if (err) {
//                     console.log(err);
//                   }
//                   console.log(data.info, data.newTime);
//                   getHome(data.newTime, (err, data) => {
//                     if (err) {
//                       console.log(err);
//                     }
//                     console.log(data.info, data.newTime);
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// function goToKyiv() {
//   setTimeout(() => {
//     console.log("Go Kyiv");
//   }, 2000);
// }

// prepareTour((err, data)=>{
//     console.log('qweqweqw')
// })
// prepareTour((err, data)=>{
//     console.log('qweqwrqerqr')
// })
// const someSet = new Set(names)

// console.log(someSet)

// структура данных
// const someSet = new Set(names);
// console.log(someSet);
// const num = 3.14;
// console.log(+num.toFixed(2));

// const map = new Map();

// map.set("name,", "value");
// map.set({ age: 29 }, ["Denis", "Ivan"]);
// let find = map.get({ age: 29 });
// console.log(find);
// console.log(map);
// const obj = { age: 29 };
// const newObj = { age: 29 };
// console.log(obj === newObj);
