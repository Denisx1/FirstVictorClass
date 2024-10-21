// promise способ оьработки асинхронности пришел частично на замену колбеков и это обект который имеет 2 состояния resolve и reject

// function orderTour(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money > 500) {
//         resolve({
//           country: "Egypt",
//         });
//       } else {
//         reject("not money");
//       }
//     }, 1000);
//   });
// }

// function prepareTour() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("я собрался");
//     }, 2000);
//   });
// }

// function goTOKyiv(data) {
//   return new Promise((resolve, reject) => {
//     console.log(`я купив квитки на ${data}`);
//     setTimeout(() => {
//       resolve("going");
//     }, 3000);
//   });
// }

function getUp(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 9) {
        resolve({
          info: `today i am going to work early`,
          newTime: time + 0.2,
        });
      }
      if (time < 11) {
        resolve({
          info: `today is holliday`,
          newTime: time + 2,
        });
      }
      reject({ info: `i dont get up at the ${time}` });
    }, Math.random() * 2000);
  });
}

const lunchDishes = [
  {
    name: "Grilled Chicken Salad",
    type: "Main Course",
    calories: 350,
    ingredients: [
      "Chicken breast",
      "Lettuce",
      "Tomatoes",
      "Cucumbers",
      "Olive oil",
    ],
    vegetarian: false,
    price: 8.99,
  },
  {
    name: "Tomato Soup",
    type: "Soup",
    calories: 150,
    ingredients: ["Tomatoes", "Onion", "Garlic", "Basil"],
    vegetarian: true,
    price: 4.5,
  },
  {
    name: "Pasta Carbonara",
    type: "Main Course",
    calories: 700,
    ingredients: ["Pasta", "Eggs", "Bacon", "Parmesan", "Cream"],
    vegetarian: false,
    price: 12.5,
  },
  {
    name: "Caesar Salad",
    type: "Salad",
    calories: 250,
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing"],
    vegetarian: true,
    price: 6.75,
  },
  {
    name: "Apple Pie",
    type: "Dessert",
    calories: 400,
    ingredients: ["Apples", "Flour", "Sugar", "Cinnamon"],
    vegetarian: true,
    price: 5.0,
  },
  {
    name: "Iced Tea",
    type: "Drink",
    calories: 80,
    ingredients: ["Tea", "Sugar", "Lemon"],
    vegetarian: true,
    price: 2.5,
  },
];
const dishTypes = [
  "Appetizer",
  "Main Course",
  "Dessert",
  "Soup",
  "Salad",
  "Side Dish",
  "Drink",
];

function washTheTeeth(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 10) {
        resolve({
          info: `today after got up i went brush my teeth`,
          newTime: time + 0.4,
        });
      }
      reject({
        info: `today i am brushing my teeth at ${time}`,
        newTime: time + 0.8,
      });
    }, Math.random() * 2000);
  });
}

function brackfast(time, dishTypes = [], whatIwantToEat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 10.3 && dishTypes.includes(whatIwantToEat)) {
        resolve({
          info: `today i am eating ${dishTypes.find(
            (value) => value === whatIwantToEat
          )}`,
          newTime: time + 0.5,
        });
      }
      reject({ info: `i dont have time to eat today `, time });
    }, Math.random() * 2000);
  });
}
const numberBusses = [
  2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78,
  82, 86, 90, 94, 98,
];

function goToTheBussStation(time, numberBuss = [], myNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 8.45) {
        reject({ info: `i am late on the buss` });
      }
      if (numberBuss.includes(myNumber)) {
        resolve({
          info: `today to work i am going on ${myNumber}'s buss`,
          newTime: time + 0.9,
        });
      }
      reject({ info: `this ${myNumber} is not included in today busses list` });
    }, Math.random() * 2000);
  });
}
function getOnWork(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 9) {
        reject({ info: `i am late to work today` });
      }
      resolve({
        info: `i am not late today and get at ${time}`,
        newTime: time + 4,
      });
    }, Math.random() * 2000);
  });
}

function haveLunch(time, dishes = [], ingradient) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filterdisheWithingradient = dishes
        .filter((value) => value.ingredients.includes(ingradient))
        .map((value) => value.name)
        .join(" and ");
      if (time >= 12) {
        resolve({
          info: `today i want on lunch all dishes with ${ingradient}:`,
          dishes: filterdisheWithingradient,
          newTime: time + 2,
        });
        reject({ info: `i dont have time to eat because i have been late` });
      }
    }, Math.random() * 2000);
  });
}

function finishTheWork(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 16) {
        resolve({ info: `go to home at `, newTime: time + 1 });
      }
    }, Math.random() * 2000);
  });
}

function goToTheGym(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time) {
        resolve({ info: `i get the gym at `, newTime: time + 2 });
      }
      reject("today i dont have time to go to the gym ");
    }, Math.random() * 2000);
  });
}

function getHomeAfterGym(time) {
  return new Promise((resolve, reject) => [
    setTimeout(() => {
      if (time) {
        resolve({ info: `after gym i get at home `, newTime: time + 2 });
      }
      reject("");
    }, Math.random() * 2000),
  ]);
}
function haveDinerAfterGym(time, dishes = [], ingradient) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filterdisheWithingradient = dishes
        .filter((value) => value.ingredients.includes(ingradient))
        .map((value) => value.name)
        .join(" and ");
      if (time) {
        resolve({
          info: `this dish will be with ${ingradient}:`,
          dish: filterdisheWithingradient,
          newTime: time + 1,
        });
      }
    }, Math.random() * 2000);
  });
}



const reduce = lunchDishes.reduce((acc, value) => {
  if(value.ingredients.includes('Sugar')){
    acc.ingradient.push('Sugar')
    acc.dishWithIngradient.push(value.name)
  }
  return acc
}, {ingradient: [], dishWithIngradient: []});

console.log(reduce);

// .filter((value) => value.ingredients.includes(ingradient))
// .map((value) => value.name)
// .join(" and ");

// getUp(6)
//   .then((value) => {
//     console.log(value.info);
//     return washTheTeeth(value.newTime);
//   })
//   .then((value) => {
//     console.log(value.info, value.newTime);
//     return brackfast(value.newTime, dishTypes, "Salad");
//   });
//   .then((value) => {
//     console.log(value.info);
//     return goToTheBussStation(value.newTime, numberBusses, 6);
//   })
//   .then((value) => {
//     console.log(value.info);
//     return getOnWork(value.newTime);
//   })
//   .then((value) => {
//     console.log(value.info);
//     return haveLunch(value.newTime, lunchDishes, "Lettuce");
//   })
//   .then((value) => {
//     console.log(value.info, value.dishes, value.newTime);
//     return finishTheWork(value.newTime);
//   })
//   .then((value) => {
//     console.log(value.info, value.newTime);
//     return goToTheGym(value.newTime);
//   })
//   .then((value) => {
//     console.log(value.info, value.newTime);
//     return getHomeAfterGym(value.newTime);
//   })
//   .then((value) => {
//     console.log(value.info, value.newTime);
//     return haveDinerAfterGym(value.newTime, lunchDishes, "Eggs");
//   })
//   .then((value) => {
//     console.log(value.info, value.dish, value.newTime);
//   });

// Rromise Chain
// orderTour(600)
//   .then((country) => {
//     console.log(country);
//     return prepareTour();
//   })
//   .then((value) => {
//     console.log(value);
//     return goTOKyiv(14.02);
//   })
//   .then((value) => {
//     console.log(value);
//   });

// const sendEmail1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("send1");
//   }, 2000);
// });
// const sendEmail2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("send2");
//   }, 1000);
// });

// const sendEmail3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("send3");
//   }, 1000);
// });
// // если в промис all не выполняется зотя бы один промис то вся цепочка ломается
// Promise.all([sendEmail1, sendEmail2, sendEmail3]).then((value) => {
//   console.log(value);
// }).catch(reason=>{
//     console.log(reason)
// });
// Promise.allSettled([sendEmail1, sendEmail2, sendEmail3]).then(value=>{
//     console.log(value)
// })
// Promise.race([sendEmail1, sendEmail2, sendEmail3]).then(value=>{
//     console.log(value)
// })
// finally always write in the end of the chain
// resolve = not stopped do function

// setTimeout(() => {
//   console.log("1");
// }, 1000);

// console.log(2);

// setTimeout(() => {
//   console.log("3");
// }, 500);

// async await синтаксичесский сахар над промисами
// написание асинхронного кода в сигхронном стиле
// async function goChain() {
//   const { info, newTime } = await getUp(6);
//   console.log(info, newTime);
//   const value = await washTheTeeth(newTime);
//   console.log(value);
//   const third = await brackfast(value.newTime, dishTypes, "Salad");
//   console.log(third);
//   const fourth = await goToTheBussStation(third.newTime, numberBusses, 6);
//   console.log(fourth);
//   const fifth = await getOnWork(fourth.newTime);
//   console.log(fifth);
//   const sixth = await haveLunch(fifth.newTime, lunchDishes, "Garlic");
//   console.log(sixth)
//   const seventh = await finishTheWork(sixth.newTime)
//   console.log(seventh)
//   const eighth = await goToTheGym(seventh.newTime)
//   console.log(eighth)
//   const nineth = await getHomeAfterGym(eighth.newTime)
//   console.log(nineth)
//   const tenth = await haveDinerAfterGym(nineth.newTime, lunchDishes, 'Garlic')
// }
// goChain();
// async function letsVacation() {
//   const { country } = await orderTour(600);
//   console.log(country);
//   const malaDone = await prepareTour();
//   console.log(malaDone);
//   let newVar = await goTOKyiv(16.03);
//   console.log(newVar);
// }

// letsVacation();
