const a = [[9, 1], [8, 2], [4, 5]];
const b = [1, 9];
const c = [9, 1];
const d = [5, 4];

const arrCompare = (x, y) => {
  // x should be visited and y should be the new visit attempt
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes(y[0]) && x[i].includes(y[1])) {
      return true;
    }
  }
}; // returns true if the arrays contain essentially same values

// console.log(arrCompare(a, d));

// [1, 2, 3, 4, 5].forEach(element => {
//   if ((element = 4)) {
//     return;
//   }
//   console.log(element);
// });

const numbersArr = [9, 1, 1, 4, 5, 6, 7, 8, 9];
const arrTwice = (array, key) => {
  //expects an array and a key as arguments
  let arr = [];
  if (array.includes(key)) {
    // console.log("this array includes 9");
    array.forEach((element, index) => {
      if (element === key) {
        arr.push(true);
        return;
      }
    });
  }
  if (arr.length > 1) {
    return true;
  }
  return false;
}; // returns true if an array contains the key more than one time
// console.log(numbersArr.indexOf(9));
console.log(arrTwice(numbersArr, 1));
