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
const numbersArr = [[1, 2], 3, 4, 5, 6, 7, 8, 9];

const testfunction = () => {
  return numbersArr;
};
numbersArr.forEach((element, index) => {
  if (index === 3) {
    console.log("this is your time");
    return;
  }
  console.log(index);
});

// for (let x in namesAge) {
//   console.log(namesAge[x]);
// }
