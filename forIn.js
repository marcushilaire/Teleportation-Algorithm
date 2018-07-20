const namesAge = {
  marcus: 23,
  charlie: 24,
  david: 25
};
let network = {
  washington: ["atlanta", "baltimore"],
  baltimore: ["philadelphia", "seattle", "washington"],
  philadelphia: ["newyork", "baltimore"],
  losangeles: ["sanfrancisco", "oakland"],
  sanfrancisco: ["oakland", "losangeles"],
  oakland: ["losangeles", "sanfrancisco"],
  seattle: ["newyork", "baltimore"],
  atlanta: ["washington"],
  newyork: ["philadelphia", "seattle"]
};
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const testfunction = () => {
  return numbersArr;
};
// numbersArr.forEach((element, index) => {
//   if (index === 3) {
//     console.log("this is your time");
//     return;
//   }
//   console.log(index);
// });
// console.log(...numbersArr, [9000]);
// let string = "this is a string";
// string.replace("string", "");
// console.log(string.replace("string", ""));

if (!Object.values(namesAge).includes(285)) {
  console.log("hello");
}
// for (let x in namesAge) {
//   console.log(namesAge[x]);
// }
// for (let i = 0; i < numbersArr.length; i++) {
// console.log(i)
// numbersArr.forEach(element => {
//   numbersArr.push(1);
//   console.log(numbersArr.length);
// });

// }
