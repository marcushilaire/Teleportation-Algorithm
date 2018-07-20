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
// take out the path from atl to philly
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

const arrCompare = (x, y) => {
  // x should be visited and y should be the new visit attempt
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes(y[0]) && x[i].includes(y[1])) {
      return true;
    }
  }
  // return false; // i might need to take out or move this line
}; // returns true if the arrays contain essentially same values

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

const portTo = (from, to) => {
  return [from, to];
};

const conditionalPush = (city, visited) => {
  //takes in city name and array from jumpMapper(from, visited)
  // if(city!==)
  for (let i = 0; i < network[city].length; i++) {
    if (!arrCompare(visited, portTo(city, network[city][i]))) {
      visited.push(portTo(city, network[city][i]));
    }
  }
}; // pushes to the visited array if the path has not been taken

const jumpMapper = from => {
  // takes in a city of origin
  let visited = [];
  for (let i = 1; i <= 90; i++) {
    recursiveJump(network[from], i).forEach(element => {
      conditionalPush(element, visited);
    });
  }
  return visited;
}; // returns an array of all possible jumps to take

const conditionalReverse = (array, key) => {
  if (array[0] === key) {
    return array;
  }
  return array.reverse();
}; // conditionally reverses and returns an array

const arrMatcher = (array, key) => {
  let dump = {};

  array.forEach((element, index) => {
    if (element.includes(key)) {
      dump[Object.keys(dump).length + 1] = conditionalReverse(element, key);
    }
  }); // prepping the array

  // console.log(array);
  for (let path in dump) {
    let splitsArr = [];

    array.forEach((element, index) => {
      // console.log(element);

      // console.log(dump[path][dump[path].length - 1]);
      if (
        element.includes(dump[path][dump[path].length - 1]) &&
        !element.includes(key)
      ) {
        splitsArr.push(
          conditionalReverse(element, dump[path][dump[path].length - 1])
        );
        //if splits array has a length greater than one
        if (splitsArr.length > 1) {
          splitsArr.forEach((element, index) => {
            if (index !== 0) {
              console.log("does not equal zero", index);

              // dump[Object.keys(dump).length + 1] = dump[path];

              // dump[iterativeLength].push(element);
              return;
            }
            console.log("equals zero", index);
            dump[path].push(element);
          });
          //create a new numbered path string in the dump object
          return;
          //
        }
        dump[path].push(element);
        //e
      }
    });
    console.log("path and array", path, splitsArr);
  } // First attach, prepping for loop
  //****** */
  // console.log(array);
  // filter out the array based on what is in bum
  // console.log(splitsArr);
  return dump;
}; // will return dump

const pathLister = from => {
  // let list = {};
  // arrMatcher(jumpMapper(from), from); //

  console.log("dump", arrMatcher(jumpMapper(from), from));
};
pathLister("baltimore");
// console.log(jumpMapper("oakland"));
