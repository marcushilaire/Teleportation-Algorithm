let network = {
  washington: {
    1: ["seattle"]
    // 2: ["washington", "anaheim"],
    // 3: ["seattle", "austin", "washington"],
    // 4: ["washington", "anaheim", "seattle"],
    // 5: ["seattle", "austin", "washington", "anaheim"]
  },
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

// console.log(nJump(network.washington, 5));
const oneJump = city => {
  array.forEach(element => {});
};
console.log(network["washington"]);
