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
  // 3: ["anaheim", "washington", "seattle"],
  // 4: ["austin", "seattle", "washington", "anaheim"],
  anaheim: ["austin", "seattle", "washington"]
  // 2: ["anaheim", "washington", "seattle"]
  // 3: ["austin", "seattle", "washington", "anaheim"]
};
let testArr = [[1], [2, 3], [4], [5, [6, 7]]];
let placeboArr = [1, [2, 3], 4];

let stringify = array => {
  let stringArr = [];
  array.forEach(element => {
    if (typeof element === "object") {
      element.forEach(element => {
        if (!stringArr.includes(element)) {
          stringArr.push(element);
        }
      });
    } else {
      stringArr.push(element);
    }
  });
  return stringArr;
};

const jumpOptions = Arr => {
  // takes in an array
  let arrN = [];
  Arr.forEach(element => {
    arrN.push(network[element]);
  });
  return stringify(arrN);
};

const recursiveJump = (Arr, n) => {
  if (n === 1) {
    return Arr;
  }
  let arrN = [];
  Arr.forEach(element => {
    arrN.push(network[element]);
  });

  return recursiveJump(stringify(arrN), n - 1);
};

let secondJump = jumpOptions(network.washington);
console.log("washington");
console.log(1, network.washington);
console.log(2, secondJump); //[ 'anaheim', 'washington', 'seattle' ]
console.log(3, jumpOptions(secondJump));
console.log(4, jumpOptions(jumpOptions(secondJump)));
console.log("===");
console.log("recursive");
console.log(recursiveJump(network.washington, 5));
