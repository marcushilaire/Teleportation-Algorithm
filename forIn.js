const namesAge = {
  marcus: 23,
  charlie: 24,
  david: 25,
  array: [0, 1]
};
const obJIncludesArr = (arr, obj) => {
  for (let x in obj) {
    let truthArr = [];
    if (obj[x].length === arr.length) {
      arr.forEach((element, i) => {
        if (element === obj[x].i) {
          console.log(i);
          truthArr.push(true);
          return;
        }
        truthArr.push(false);
      });
    }
    console.log(truthArr);
  }

  // return false;
};
obJIncludesArr([0, 1], namesAge);

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

if (Object.values(namesAge).includes(285)) {
  console.log("hello");
}
// console.log(Object.values(namesAge).includes([0, 1]));
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
