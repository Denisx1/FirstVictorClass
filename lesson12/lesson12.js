// const worker1 = {
//     name: 1,
//     title: 'junior',
//     payment: 10000
// }

// const worker2 = {
//     name: 'ihor',
//     title: 'middle',
//     payment: 9999
// }

// function changePayment(newTitle ,newPayment){
//     console.log(this.payment)
//     this.payment = newPayment
//     this.title = newTitle
// }
// // визиваем функцибю changePayment в контексте worker1
// changePayment('middle', 8888888)

// // changePayment.call(worker1, 'Middle', 9999999)
// // changePayment.apply(worker2, ['Middle', 99])
// // bind -возвращает копию функции с привязаным контекстом
// const changePayment1 = changePayment.bind(worker2, 'Middle', 99)
// changePayment1()
// console.log(worker1)
// console.log(worker2)

// const body = {
//     message1: '',
//     pic: null,
//     message2: 'hello We are here',
//     pic2: 'http/example.com/image.png'
// }

// const body_case = Object.keys(body)

const media = [
  {
    mediaContentType: "image/png",
    mediaUrl: "http//image/png",
  },
  {
    mediaContentType: "application/pdf",
    mediaUrl: "http//image/pdf",
  },
  {
    mediaContentType: "image/mixed",
    mediaUrl: "http//image/mixed",
  },
  {
    mediaContentType: "application/webm",
    mediaUrl: "http//image/webm",
  },
  {
    mediaContentType: "image/png",
    mediaUrl: "http//image/png",
  },
  {
    mediaContentType: "application/pdf",
    mediaUrl: "http//image/pdf",
  },
  {
    mediaContentType: "image/mixed",
    mediaUrl: "http//image/mixed",
  },
  {
    mediaContentType: "application/webm",
    mediaUrl: "http//image/webm",
  },
  {
    mediaContentType: "image/png",
    mediaUrl: "http//image/png",
  },
  {
    mediaContentType: "application/pdf",
    mediaUrl: "http//image/pdf",
  },
  {
    mediaContentType: "image/mixed",
    mediaUrl: "http//image/mixed",
  },
  {
    mediaContentType: "application/webm",
    mediaUrl: "http//image/webm",
  },
];
// console.time("reduce start");
// const reduce = media.reduce((acc, media) => {
//   if (media.mediaContentType.includes("png")) {
//     acc.push({
//       type: "png",
//       payload: { url: media.mediaUrl },
//     });
//   } else if (media.mediaContentType.includes("pdf")) {
//     acc.push({
//       type: "pdf",
//       payload: { url: media.mediaUrl },
//     });
//   }
//   return acc;
// }, []);

// console.log(reduce);
// // console.timeEnd("reduce start");

// // console.time("map start");
// const map = media
//   .map((mediaData) => {
//     if (mediaData.mediaContentType.includes("png")) {
//       return {
//         type: "png",
//         payload: { url: media.mediaUrl },
//       };
//     }
//     if (mediaData.mediaContentType.includes("application")) {
//       return {
//         type: "application",
//         payload: { url: media.mediaUrl },
//       };
//     }
//   })
//   .filter((value) => value !== undefined);

// console.log(map);
// // console.timeEnd("map start");

// const multiArr = [
//   10,
//   [111, [222, [333]], 444],
//   5555,
//   [6666, 7777, [[8888], 9999], 10000],
// ];
// const flatedArr = [];
// function flatter(arrToFlat = [], i = 0) {
//   if (typeof arrToFlat[i] === "number") {
//     flatedArr.push(arrToFlat[i]);
//     return flatter(arrToFlat, ++i);
//   }
//   if (Array.isArray(arrToFlat[i])) {
//     flatter(arrToFlat[i], 0);
//   }
//   if (arrToFlat.length < i) {
//     return;
//   }
//   flatter(arrToFlat, ++i);
// }
// flatter(multiArr)
// console.log(flatedArr)

const workingDays = {
  monday: {
    isOpen: true,
    from: 10,
    to: 22,
  },
  tuesday: {
    isOpen: true,
    from: 11,
    to: 22,
  },
  wednesday: {
    isOpen: false,
    from: 9,
    to: 22,
  },
  thursday: {
    isOpen: false,
    from: 12,
    to: 16,
  },
  friday: {
    isOpen: false,
    from: 12,
    to: 16,
  },
  saturday: {
    isOpen: false,
    from: 12,
    to: 16,
  },
  sunday: {
    isOpen: true,
    from: 12,
    to: 16,
  },
};

// function findIndexWorkingDay(workingDays, currentDay) {
//   const dayNames = Object.keys(workingDays);
//   const curentIndex = dayNames.indexOf(currentDay);
//   const hasIsOpen = dayNames.some((day) => workingDays[day].isOpen);
//   if (!hasIsOpen) {
//     return {
//       nextDay: null,
//       from: null,
//       to: null,
//     };
//   }
//   function search(index = 0, initialIndex) {
//     const nextIndex = (index + 1) % dayNames.length;
//     const nextDay = dayNames[nextIndex];
//     const { isOpen, from, to } = workingDays[nextDay];
//     if (nextIndex === initialIndex) {
//       return {
//         nextDay: null,
//         from: null,
//         to: null,
//       };
//     }
//     if (isOpen) {
//       return { nextDay, from, to };
//     }
//     return search(nextIndex, initialIndex);
//   }
//   return search(curentIndex, curentIndex);
// }
// const { nextDay, from, to } = findIndexWorkingDay(workingDays, "saturday");
// console.log(nextDay, from, to);

// function findNextWorkingDay(workingDays, currentDay) {
//   // сгрупировал ключи с дняит в масив
//   const dayNames = Object.keys(workingDays);
//   // нашел индекс текущего дня
//   let currentIndex = dayNames.indexOf(currentDay);
//   // находим тру или фолс у дня который мы ищем
//   const hasOpen = dayNames.some((day) => workingDays[day].isOpen);
//   // проверяем если ли у жтого дня тру если нет то возрвщаем такой обект
//   if (!hasOpen) {
//     return {
//       nextDay: null,
//       from: null,
//       to: null,
//     };
//   }

//   function search(index = 0, initialIndex) {
//     // если дойшли до конца масива то начинаем сначала
//     const nextIndex = (index + 1) % dayNames.length;
//     // находим день индекс следующего дня
//     const nexdDay = dayNames[nextIndex];
//     // вытаскиваем с него поля которые нам нужны
//     const { isOpen, from, to } = workingDays[nexdDay];
//     // тут проверяем на то не совпадает ли день с тккущим
//     if (nextIndex === initialIndex) {
//       return {
//         nextDay: null,
//         from: null,
//         to: null,
//       };
//     }
//     // а тут проверяем если жтот день открыт то формиркум обекст и выдаем
//     if (isOpen) {
//       return { nexdDay, from, to };
//     }
//     return search(nextIndex, initialIndex);
//   }
//   return search(currentIndex, currentIndex);
// }

// const today = "sunday";

// const {
//   nexdDay: nextWorkingDay,
//   from: openFrom,
//   to: openTo,
// } = findNextWorkingDay(workingDays, today);

// const message = nextWorkingDay
//   ? `Привіт. Нажаль ми в ${today} не працюємо. Завітайте до нас в ${nextWorkingDay} з ${openFrom} до ${openTo}`
//   : "Привіт. Нажаль ми цього тижня не працюємо.";
// console.log(message);

let superDeepObj = {
  one: {
    two: {
      three: {
        four: {
          five: {
            hello: "world",
            arr: [],
          },
        },
      },
    },
  },
};
let superDeepObj1 = {
  one: {
    two: {
      three: {
        four: 10,
      },
    },
  },
  one2: {
    two: {
      three: {
        four: {
          user: "111",
        },
      },
    },
  },
};

let deepIndex = -Infinity;
const deepCouner = (object, deeCount = 0) => {
  if (typeof object !== "object" && object !== null) {
    if (deepIndex < deeCount) {
      deepIndex = deeCount;
    }
    return;
  }

  for (const singleObject of Object.values(object)) {
    deepCouner(singleObject, ++deeCount);
  }
};
const ress = deepCouner(superDeepObj);
console.log(deepIndex);

// const arr = [1, 2, 3, 4, 5];
// function recursator(arrIterator = [], i = 0) {
//   console.log("hello");
//   if (i >= arrIterator.length) {
//     return;
//   }
//   console.log(arrIterator[i]);
//   recursator(arrIterator, ++i);
// }
// recursator(arr);

// let a = 0;
// let b = a++ сначала присваивает потом увеличивает

// function recursator(str) {
//   const firstvalue = str.toString().split("");
//   if (firstvalue.length === 0) {
//     return "";
//   }
//   const pop = firstvalue.pop();
//   return pop + recursator(firstvalue.join(""));
// }

// const result = recursator(123);
// console.log(result);

// function factorial(number) {
//   if (number === 1 || number === 0) {
//     return 1;
//   }

//   return number * factorial(number - 1);
// }
// console.log(factorial(6));

// function recursion(str){
//   const toArray = str.split('')
//   if(!toArray.length){
//     return ''
//   }
//   const pop = toArray.pop()
//   return pop + recursion(toArray.join(''))
// }

// const result = recursion('hello')
// console.log(result)

// function summator (arr=[]){
//   if (!arr.length){
//     return 0
//   }
//   const firsValue = arr.shift()
//   return firsValue + summator(arr)
// }
// const res = summator([10, 20, 30])
// console.log(res)

// function fibanachi(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else if (n >= 2) {
//     return fibanachi(n - 1) + fibanachi(n - 2);
//   }
// }
// const res = fibanachi();
// console.log(res);

// function recursion(arr = []) {
//   if (!arr.length) {
//     return "";
//   }
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   return arr[0] + ','+ recursion(arr.slice(1));
// }
// const res = recursion(["apple", "banana", "cherry"]);
// console.log(res);

// function quantity(num{
//   if(num===0){
//     return 1
//   }
//   if(num<10){
//     return 1
//   }
//   return 1 + quantity(Math.floor(num/10))

// }

// const res = quantity(12345)
// console.log(res)

// function recursator(arr=[]){
//   if(arr.length === 1){
//     return arr[0]
//   }
//   const minValue = recursator(arr.slice(1))
//   return Math.min(arr[0], minValue)
// }
// const res = recursator([10, 20, 5, 15])
// console.log(res)
