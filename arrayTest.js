const a = [9, 1];

const b = [1, 9];
console.log(a.reverse());

const arrCompare = (a, b) => {
  if (a === b || a === b.reverse()) {
    console.log("these are the same");
  }
};
