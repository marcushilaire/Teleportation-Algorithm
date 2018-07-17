let network = {
  cityA: [network.cityB, network.cityC, network.cityD],
  cityB: ["cityA", "cityD"],
  cityC: ["cityA", "cityD"],
  cityD: ["cityA", "cityB", "cityC"]
};
// city a connects to b, c and d
// city b connects to a and d
// city c connects to a and d
// city d connects to a, b and c

const oneJump = city => {
  city.forEach((element, index) => {
    console.log(element);
  });
};
// console.log(network.cityA);
// oneJump(network.cityA);
