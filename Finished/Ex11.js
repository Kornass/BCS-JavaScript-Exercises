// write a function called getIndex which finds the index of an element in an array of objects,
// the objects have multiple key/value pairs so your function need to be flexible enough to find by any of them.
// please don't google "how to find index of an object in javascript" or similar
// You cannot use the ES6 method findIndex for this exercise!
// it should return the index of the found element or -1 if is not there.

// to pass the test your function should take 3 arguments: array of objects, name of the key and content of the value to search for,
// so if they match it returns the index of the object containing this matching key:value pair

let getIndex = (arr, key, val) => {
  let keys = [];
  let names = [];
  arr.forEach((element) => {
    keys.push(Object.keys(element));
    names.push(Object.values(element));
  });
  names = names.flat();
  keys = keys.flat();
  if (!keys.includes(key) || !names.includes(val)) {
    return -1;
  } else if (keys.includes(key)) {
    for (let i = 0; i < names.length; i++) {
      if (names[i] == val) return i;
    }
  }

  console.log(names, keys);
};

getIndex(
  [{ name: "Antonello" }, { name: "George" }, { name: "Golda" }],
  "name",
  "Antonello"
);
getIndex(
  [{ name: "Antonello" }, { name: "George" }, { name: "Golda" }],
  "name",
  "George"
);
module.exports = {
  getIndex,
};
