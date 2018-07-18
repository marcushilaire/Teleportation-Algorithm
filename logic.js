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

let testArr = [[1], [2, 3], [4], [5, [6, 7]]];
let placeboArr = [1, [2, 3], 4];

const initializePort = (a, b) => {
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
}; // I do not need this function anymore

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

const possibleTravel = (from, to) => {
  if (recursiveJump(network[from], 90).includes(to)) {
    return `Yes you can teleport from ${from} to ${to}`;
  }
  return `No, you cannot teleport from ${from} to ${to}`;
}; // expand on this later to include which specific path you can take

let secondJump = jumpOptions(network.seattle);
// console.log("seattle");
// console.log(1, network.seattle);
// console.log(2, secondJump);
// console.log(3, jumpOptions(secondJump));
// console.log(4, jumpOptions(jumpOptions(secondJump)));
// console.log("===");
// console.log("recursive");
// console.log(recursiveJump(network.oakland, 90));
// console.log(possibleTravel("oakland", "atlanta"));
initializePort("newyork", "washington");
