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
    return `Yes, you can travel ${from} ${to}`;
  }
  return `No, you cannot travel ${from} ${to}`;
};

let secondJump = jumpOptions(network.seattle);
console.log("seattle");
console.log(1, network.seattle);
console.log(2, secondJump);
console.log(3, jumpOptions(secondJump));
console.log(4, jumpOptions(jumpOptions(secondJump)));
console.log("===");
console.log("recursive");
console.log(recursiveJump(network.oakland, 90));
console.log(possibleTravel("oakland", "atlanta"));
