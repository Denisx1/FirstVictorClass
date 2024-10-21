// const students = [
//   { name: "John", course: "Math" },
//   { name: "Alice", course: "Science" },
//   { name: "Bob", course: "History" },
//   { name: "Mary", course: "English" },
//   { name: "Tom", course: "Art" },
//   { name: "Emma", course: "Physics" },
//   { name: "Liam", course: "Chemistry" },
//   { name: "Olivia", course: "Biology" },
//   { name: "Noah", course: "Geography" },
//   { name: "Sophia", course: "Philosophy" },
//   { name: "Mason", course: "Computer Science" },
//   { name: "Isabella", course: "Music" },
//   { name: "Lucas", course: "Literature" },
//   { name: "Mia", course: "Economics" },
//   { name: "Ethan", course: "Political Science" },
//   { name: "Amelia", course: "Sociology" },
//   { name: "James", course: "Psychology" },
//   { name: "Charlotte", course: "Business" },
//   { name: "Benjamin", course: "Engineering" },
//   { name: "Harper", course: "Architecture" },
//   { name: "John", course: "Math" },
//   { name: "Alice", course: "Science" },
//   { name: "Bob", course: "History" },
//   { name: "Mary", course: "English" },
//   { name: "Tom", course: "Art" },
//   { name: "Emma", course: "Physics" },
//   { name: "Liam", course: "Chemistry" },
//   { name: "Olivia", course: "Biology" },
//   { name: "Noah", course: "Geography" },
//   { name: "Sophia", course: "Philosophy" },
//   { name: "Mason", course: "Computer Science" },
//   { name: "Isabella", course: "Music" },
//   { name: "Lucas", course: "Literature" },
//   { name: "Mia", course: "Economics" },
//   { name: "Ethan", course: "Political Science" },
//   { name: "Amelia", course: "Sociology" },
//   { name: "James", course: "Psychology" },
//   { name: "Charlotte", course: "Business" },
//   { name: "Benjamin", course: "Engineering" },
//   { name: "Harper", course: "Architecture" },
// ];

// frequency count

// const reduce = students.reduce((acc, student) => {
//   const { name, course } = student;
//   if (acc[course]) {
//     acc[course].push(name);
//   } else {
//     acc[course] = [name];
//   }
//   return acc;
// }, {});

// console.log(reduce)
// function checkLetters(name, name1) {
//   let count = 0;
//   for (let index = 0; index < name.length; index++) {
//     const uperCaseName = name.
//   }
// }

// Anagram
// function isAnagram(word1 = "", word2 = "") {
//   const letersObject = {};
//   word1 = word1.toLowerCase();
//   word2 = word2.toLowerCase();
//   if (word1.length !== word2.length) {
//     return false;
//   }
//   for (const letter of word1) {
//     if (letersObject[letter]) {
//       letersObject[letter]++;
//     } else {
//       letersObject[letter] = 1;
//     }
//   }

//   for (const letter2 of word2) {
//     if (!letersObject[letter2]) {
//       return false;
//     }
//     letersObject[letter2]--;
//   }
//   console.log(letersObject);
// }
// isAnagram("anadrii", "anadrii");

// const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3];

// for (let index = 0; index < arr.length; index++) {
//   const firstValue = arr[index];
//   const secondValue = arr[index + 1];
//   const thirdValue = arr[index + 2];

//   const isDublicatePresent =
//     firstValue === secondValue && secondValue === thirdValue;
//   if(isDublicatePresent){
//     const [deletedNumber] = arr.splice(index, 1)
//     arr.push(deletedNumber)
//     index--
//   }

// }
// console.log(arr)

// const usersWithAddress = [
//   {
//     id: 9,
//     name: "vasya",
//     age: 31,
//     isMarried: true,
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
//     age: 32,
//     isMarried: true,
//     address: { city: "Kyiv", street: "Peremogi", number: 12 },
//   },
// ];

// usersWithAddress.reduce((acc, user)=>{
//   if(user.isMarried && user.age>=30){
//     const randomAge = Math.random()*10
//     user.childAge = Math.round(randomAge)
//   }
// }, 0)

// console.log(usersWithAddress);

function anagramAnalog(word1 = "", word2 = "") {
  const normalized1 = word1
    .toLowerCase()
    .split("")
    .sort((a, b) => a - b)
    .join("");
  const normalized2 = word2
    .toLowerCase()
    .split("")
    .sort((a, b) => a - b)
    .join("");
  return normalized1 === normalized2;
}

console.log(anagramAnalog("anadrii", "anadrii"));
