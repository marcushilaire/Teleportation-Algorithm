const a = [9, 1];
const b = [1, 9];

console.log(a.reverse());

const arrCompare = (x, y) => {
  if (y.includes(x[0]) && y.includes(x[1])) {
    console.log("essentially equal");
  }
};

arrCompare(a, b);
