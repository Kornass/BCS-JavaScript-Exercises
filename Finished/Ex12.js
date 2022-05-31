// Write a function called runOnRange that takes one argument, an object.
// this object will contain three properties, a start, and end and a a step.
// according to these properties it should push specific numbers to an array.
// Once done return the array.

let runOnRange = (obj) => {
  let { start, end, step } = obj;
  let results = [];
  if (!step || (end - start < 0 && step > 0) || (end - start > 0 && step < 0)) {
    return results;
  } else if (end > start) {
    for (let i = start; i <= end; i += step) {
      results.push(i);
    }
  } else if (end < start) {
    for (let i = start; i >= end; i += step) {
      results.push(i);
    }
  }
  return results;
};

runOnRange({ start: 20, end: 26, step: 0 });
runOnRange({ start: 12, end: 10, step: 1 });
runOnRange({ start: 20, end: 26, step: 3 });
runOnRange({ start: 26, end: 24, step: -1 });
module.exports = {
  runOnRange,
};
