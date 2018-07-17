// let network = {
//   washington: ["seattle", "austin", "anaheim"],
//   seattle: ["washington", "anaheim"],
//   austin: ["washington", "anaheim"],
//   anaheim: ["washington", "seattle", "austin"],
//   test: this
// };
// // city a connects to b, c and d
// // city b connects to a and d
// // city c connects to a and d
// // city d connects to a, b and c

// const oneJump = city => {
//   city.forEach((element, index) => {
//     console.log(element);
//   });
// };
// console.log(network.test.bind(network));
function City(name, portals) {
  this.name = name;
  this.portals = portals;
}
let washington = new City("washington", ["seattle", "austin", "anaheim"]);
console.log(washington);
