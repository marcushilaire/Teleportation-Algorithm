const a = [[9, 1], [8, 2], [4, 5]];
const b = [1, 9];
const c = [9, 1];
const d = [5, 4];

const arrCompare = (x, y) => {
  // x should be visited and y should be the new visit attempt
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes(y[0]) && x[i].includes(y[1])) {
      console.log("truthy");
      return true;
    }
    console.log("falsy");
  }
}; // returns true if the arrays contain essentially same values

console.log(arrCompare(a, d));

[1, 2, 3, 4, 5].forEach(element => {
  if ((element = 4)) {
    return;
  }
  console.log(element);
});
