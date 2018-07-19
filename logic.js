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

let testArr = [[1, 2], [2, 3, 4, 5], [6]];
let placeboArr = [1, 2, 3, 4];

const initializePort = (a, b) => {
  // both arguments are expected to be city names as strings
  // both conditionals do the same thing -
  // if cityA already has a  key in the network object: cityB is pushed to its array
  // if cityA does not have a key in the network object: a key is created with [cityB] as its value

  //first conditional
  if (network[a]) {
    network[a].push(b);
  } else {
    network[a] = [b];
  }

  //second conditional
  if (network[b]) {
    network[b].push(a);
  } else {
    network[b] = [a];
  }
  console.log(network);
};

const stringify = array => {
  // expects to take in an array ([[1], [2, 3], [4]])
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
}; // and returns  [1, 2, 3, 4]

const recursiveJump = (Arr, n) => {
  // expects an array and an iterator as arguments
  if (n === 1) {
    return Arr;
  }
  let arrN = [];
  Arr.forEach(element => {
    arrN.push(network[element]);
  });

  return recursiveJump(stringify(arrN), n - 1);
}; // returns an array of possible landing points in exactly n jumps

const possibleTwo = (from, n) => {
  //expects a city of origin and an iterator as arguments

  let dump = [];
  for (let i = 1; i <= n; i++) {
    dump.push(recursiveJump(network[from], i));
  }
  return stringify(dump);
}; // returns an array of possible landing points after a maximum of n jumps

const possibleTravel = (from, to) => {
  // both arguments are expected to be city names as strings

  if (possibleTwo(from, 90).includes(to)) {
    return `Yes you can teleport from ${from} to ${to}`;
  }
  return `No, you cannot teleport from ${from} to ${to}`;
}; // returns a string that indicates whether or not you can teleport between both cities
// expand on this later to include which specific path you can take

const loopPath = city => {
  network[city].forEach;
  return true;
}; // start by making this function retrn true for oakland because a loop is possible
