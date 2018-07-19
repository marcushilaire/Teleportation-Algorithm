const a = [9, 1];
const b = [1, 9];

const arrCompare = (x, y) => {
  // Expects two arrays(of length two) as arguments
  if (y.includes(x[0]) && y.includes(x[1])) {
    return true;
  }
}; // returns true if the arrays contain the same values

console.log(arrCompare(a, b));
