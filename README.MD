## Assumptions

- Input is expected in exactly the format seen in [input.txt](./data/input.txt).
- Only city names should be capitalized.
- There should be no trailing or extra spaces included in any query or teleportation route.
- input.txt should have LF line endings.

Teleportation routes are initialized in the following format:

```
Washington - Baltimore
Washington - Atlanta
Baltimore - Philadelphia
Philadelphia - New York
Los Angeles - San Francisco
San Francisco - Oakland
Los Angeles - Oakland
Seattle - New York
Seattle - Baltimore
```

Queries are initialized in the following format:

```
cities from Seattle in 1 jumps
cities from Seattle in 2 jumps
can I teleport from New York to Atlanta
can I teleport from Oakland to Atlanta
loop possible from Oakland
loop possible from Washington
```

## Design

Data structure generated from input.txt:

```js
let network = {
  losangeles: ["sanfrancisco", "oakland"],
  sanfrancisco: ["oakland", "losangeles"],
  oakland: ["losangeles", "sanfrancisco"]
};
```

Queries are answered using mainly the following recursive function and its helper:

```js
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
```
