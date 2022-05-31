// Write a function called swap that takes one argument, an object, and returns
// another object where the key/value pairs have been swapped.
// The original object should not be modified.

let swap = (obj) => {
  let swapped = {};
  for (element in obj) {
    swapped[obj[element]] = element;
  }
  return swapped;
};
swap({ name: "Antonello" });
module.exports = {
  swap,
};
