let network = {
  washington: ["seattle"],
  // 2: ["washington", "anaheim"],
  // 3: ["seattle", "austin", "washington"],
  // 4: ["washington", "anaheim", "seattle"],
  // 5: ["seattle", "austin", "washington", "anaheim"]
  seattle: ["washington", "anaheim"],
  // 2: ["seattle", "austin", "washington"],
  // 3: ["washington", "anaheim", "seattle"],
  // 4: ["seattle", "austin", "washington", "anaheim"]
  austin: ["anaheim"],
  // 2: ["austin", "seattle", "washington"],
  // 3: ["washington", "anaheim", "seattle"],
  // 4: ["seattle", "austin", "washington", "anaheim"]
  anaheim: ["austin", "seattle", "washington"]
  // 2: ["washington", "anaheim", "seattle"],
  // 3: ["seattle", "austin", "washington", "anaheim"]
};

const oneJump = city => {
  network[`${city}`].forEach(element => {
    console.log(element);
  });
};

const secondJump = city => {
  // takes in an array
  let arrN = [];
  // set up an empty array to dump each part of the forEach
  network[`${city}`].forEach(element => {
    // for each defined element in
    arrN.push(network[`${element}`]);
  });
  return arrN;
};
let testArr = [9, 8, 7, 8];
// the call back being passed to reduce, with 0 as the accumulator
stringify = (accum, currVal, index, array) => {
  if (typeof currVal === "object") {
    console.log(index, currVal, "this is an object");
    currVal.reduce(stringify, 0);
    // return;
  }
  console.log(index, currVal, "this is not an object");
  console.log("===");
  return accum + currVal;
};

// secondJump("anaheim"); // [ [ 'anaheim' ], [ 'washington', 'anaheim' ], [ 'seattle' ] ]
// this is currently returning a an array of arrays
// fix this with a reduce function that turns an array into one string
// console.log(secondJump("anaheim"));
// stringify(6, testArr);
secondJump("anaheim").reduce(stringify, "");
