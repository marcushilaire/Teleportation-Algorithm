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
  let arrN = [];
  // set up an empty array to dump each part of the forEach
  network[`${city}`].forEach(element => {
    arrN.push(network[`${element}`]);
  });
  console.log(arrN);
};
secondJump("anaheim"); // [ [ 'seattle' ], [ 'austin', 'seattle', 'washington' ] ]
// this is currently returning a an array of arrays
// fix this with a reduce function that turns an array into one string
