const fs = require("fs");
let network = {
  // washington: ["atlanta", "baltimore"],
  // baltimore: ["philadelphia", "seattle", "washington"],
  // philadelphia: ["newyork", "baltimore"],
  // losangeles: ["sanfrancisco", "oakland"],
  // sanfrancisco: ["oakland", "losangeles"],
  // oakland: ["losangeles", "sanfrancisco"],
  // seattle: ["newyork", "baltimore"],
  // atlanta: ["washington"],
  // newyork: ["philadelphia", "seattle"]
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
  // console.log(network);
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

const arrTwice = (array, key) => {
  //expects an array and a key as arguments
  let arr = [];
  if (array.includes(key)) {
    // console.log("this array includes 9");
    array.forEach((element, index) => {
      if (element === key) {
        arr.push(true);
        return;
      }
    });
  }
  if (arr.length > 1) {
    return true;
  }
  return false;
}; // returns true if an array contains the key more than one time

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

const nJump = (from, n) => {
  //expects a city of origin and an iterator as arguments

  let dump = [];
  for (let i = 1; i <= n; i++) {
    dump.push(recursiveJump(network[from], i));
  }
  return stringify(dump);
}; // returns an array of possible landing points after a maximum of n jumps

const possibleTravel = (from, to) => {
  // both arguments are expected to be city names as strings

  if (nJump(from, 90).includes(to)) {
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

const printify = array => {
  let stringArr = [];
  array.forEach(element => {
    if (typeof element === "object") {
      element.forEach(element => {
        stringArr.push(element);
      });
    } else {
      stringArr.push(element);
    }
  });
  return stringArr;
};

const arrMatcher = (array, key) => {
  let dump = {};

  array.forEach((element, index) => {
    if (element.includes(key)) {
      dump[Object.keys(dump).length + 1] = conditionalReverse(element, key);
    }
  }); // prepping the array

  for (let path in dump) {
    array.forEach((element, index) => {
      if (
        element.includes(dump[path][dump[path].length - 1]) &&
        // !element.includes(key) &&
        !element.includes(dump[path][dump[path].length - 2])
      ) {
        if (!Object.values(dump).includes(printify([...dump[path], element]))) {
          dump[Object.keys(dump).length + 1] = printify([
            ...dump[path],
            element
          ]);
        }
      }
    });
  } // attaching the next part of the array
  return dump; // returning the array
};

const pathLister = from => {
  let dump = arrMatcher(jumpMapper(from), from);
  let pathArr = jumpMapper(from);
  for (let i = 0; i < 4; i++) {
    for (let path in dump) {
      pathArr.forEach(element => {
        // console.log(element);
        if (
          element.includes(dump[path][dump[path].length - 1]) &&
          !element.includes(dump[path][dump[path].length - 2])
        ) {
          if (
            element.includes(dump[path][0]) &&
            element.includes(dump[path][1])
          ) {
            return;
          }
          dump[Object.keys(dump).length + 1] = printify([
            ...dump[path],
            conditionalReverse(element, dump[path][dump[path].length - 1])
          ]);
        }
      });
    }
  }

  // console.log(dump);
  return dump;
};

const possibleLoop = city => {
  let arr = [];
  let stepList = pathLister(city);
  for (x in stepList) {
    //
    arr.push(arrTwice(stepList[x], city));
  }
  if (arr.includes(true)) {
    // check to see if the list of possible paths
    return `Yes, you can teleport in a loop from ${city}`;
  }
  return `No, you cannot teleport in a loop from ${city}`;
};

const readInput = () => {
  //reads through ./data/input.txt
  fs.readFile("./data/input.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    let splitReturn = data.split("\n");

    splitReturn.forEach((element, index) => {
      //initializing the dataset
      if (element.includes("-")) {
        let twoPartArr = element.split(" - ");
        initializePort(twoPartArr[0], twoPartArr[1]);
        return;
      }

      //can someone get from city x to city y
      if (element.includes("can I teleport from")) {
        let functionalString = element
          .replace("can I teleport from ", "")
          .split(" to ");
        console.log(possibleTravel(functionalString[0], functionalString[1]));
        return;
      }

      // what cities can i reach from x with a mxnimum of n jumps
      if (element.includes("cities from")) {
        // console.log(element);
        let functionalString = element
          .replace("cities from ", "")
          .replace("jumps", "")
          .split(" in ");

        let finalString = nJump(
          functionalString[0],
          functionalString[1]
        ).reduce((accum, currVal, index, array) => {
          if (index === array.length - 1) {
            return `${accum} and ${currVal}`;
          }
          return `${accum}, ${currVal}`;
        });

        console.log(
          `With a maxmimum of ${functionalString[1]}jump(s) from ${
            functionalString[0]
          } you can get to ${finalString}.`
        );
        return;
      }

      // can i travel in a loop from one particular city
      if (element.includes("loop")) {
        let finalString = element.replace("loop possible from ", "");
        // console.log(finalString);
        console.log(possibleLoop(finalString));
        return;
      }
    });
  });
}; // outputs all comands to the console

readInput();
