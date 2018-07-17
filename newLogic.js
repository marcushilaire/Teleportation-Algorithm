let tables = {
  a: 8,
  b: 8,
  c: 7,
  d: 7
};

function Guest(size, name, dislikes) {
  this.name = name;
  this.size = size;
  this.dislikes = dislikes;
}

const bookGuest = function(size, partyName) {
  return new Guest(7, partyName, [thornton]);
};
let thornton = new Guest(3, "Thronton");
let garcia = new Guest(2, "Garcia");
let owens = new Guest(6, "Owens", [thornton, taylor]);
let smith = new Guest(1, "smith", [garcia]);

console.log(bookGuest("taylor"));
console.log(smith);
