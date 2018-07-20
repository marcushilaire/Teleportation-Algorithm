const fs = require("fs");
let network = {
  //information from input.txt will populate this object in the following format
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

const initializePort = (a, b) => {
  // both arguments are expected to be city names as strings
  // both conditionals do the same thing -
  // if cityA already has a  key in the network object: cityB is pushed to its array
  // if cityA does not have a key in the network object: a key is created with [cityB] as its value

  if (network[a]) {
    network[a].push(b);
  } else {
    network[a] = [b];
  }

  if (network[b]) {
    network[b].push(a);
  } else {
    network[b] = [a];
  }
};

const stringify = array => {
  // expects to take in an array in a format similar to: ([[1], [1, 2, 3], [4]])
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
}; // and returns  [1, 2, 3, 4] (removing duplicates)

const printify = array => {
  // expects to take in an array in a format similar to: ([[1], [1, 2, 3], [4]])
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
}; // and returns  [1, 1, 2, 3, 4] (leaving in duplicates)

const arrCompare = (x, y) => {
  //  expects two arrays, each of length two such as: [9,1], [1,9]
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes(y[0]) && x[i].includes(y[1])) {
      return true;
    }
  }
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
  // expects an array from the network object (washington: ["atlanta", "baltimore"]) and an iterator as arguments
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

const portTo = (from, to) => {
  //expects any two values
  return [from, to];
}; // returns an array with those two values

const conditionalPush = (city, visited) => {
  //takes in city name and array from jumpMapper(from, visited)
  // not entirely functional, only meant to be used in jumpMapper
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
}; // returns an array of all possible jumps to take from that city

const conditionalReverse = (array, key) => {
  // takes in an array and a key
  if (array[0] === key) {
    return array;
  }
  return array.reverse();
}; // returns a reversed array based on whether or no its first item is the key

const arrMatcher = (array, key) => {
  // essentially step one of possibleLoop
  let dump = {};

  array.forEach(element => {
    if (element.includes(key)) {
      dump[Object.keys(dump).length + 1] = conditionalReverse(element, key);
    }
  }); // prepping the array

  for (let path in dump) {
    array.forEach(element => {
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
  return dump;
}; //sets up the array for pathLister

const pathLister = from => {
  // essentially part two of possibleLoop
  let dump = arrMatcher(jumpMapper(from), from);
  let pathArr = jumpMapper(from);
  for (let i = 0; i < 4; i++) {
    for (let path in dump) {
      pathArr.forEach(element => {
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
  return dump;
}; // returns an object with several arrays that contain possible teleportation trips

const possibleLoop = city => {
  // takes in a city as a string
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
}; // returns an string that indicates whether or not it is possible to teleport in a loop from the city

const readInput = () => {
  //reads through ./data/input.txt
  fs.readFile("./data/input.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    let splitReturn = data.split("\n");

    splitReturn.forEach((element, index) => {
      //initializing the dataset into the network object above
      if (element.includes("-")) {
        let twoPartArr = element.split(" - ");
        initializePort(twoPartArr[0], twoPartArr[1]);
        return;
      }

      //can someone teleport from city x to city y
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
        console.log(possibleLoop(finalString));
        return;
      }
    });
  });
}; // outputs all comands to the console

readInput();
