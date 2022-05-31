// write a function called booleanChecker, it takes two arguments, one array
// and one maxCapacity which is a number
// create an empty array called bool inside your function
// loop through the provided array and every time you find a boolean push it
// to our bool array until you reach the maxCapacity:
// if the maxCapacity argument is missing it should default to unlimited

const booleanChecker = function (arr, maxcap = Infinity) {
  let bool = [];
  bool = arr.filter((el) => typeof el == "boolean");
  let limitedarr = [];
  if (maxcap == Infinity) maxcap = bool.length + 1; // checking maxcap to not crush the loop
  for (let i = 0; i <= maxcap - 1; i++) {
    // push so many booleans as maxcap indicates
    if (bool[i] != undefined) limitedarr.push(bool[i]);
  }
  return `${limitedarr.length} booleans were found ${limitedarr.join(",")}`;
};

// SOLUTION 2
/*
const booleanChecker = (arr, max = Infinity) =>{
  let bools= []
  arr.forEach(ele =>{
    typeof ele === 'boolean' && bools.length < max && bools.push(ele)
  })
  return `${bools.length} booleans were found ${bools}`
} */

booleanChecker(["12", "55", "hello"], 3);
booleanChecker(["12", "55", true, false, true, true, true], 3);
booleanChecker(["12", "55", true, false, true, true, true]);

module.exports = {
  booleanChecker,
};
