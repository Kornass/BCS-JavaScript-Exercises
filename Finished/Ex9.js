// Write a function called strCut that takes 3 arguments, the string and 2 indexes,
// it will then return a string after removing
// the letters of the 2 given indexes.

let strCut = (str, i1, i2) => {
  if (i1 == undefined && i2 == undefined) return str;
  let strToArr = str.split("");
  strToArr.splice(i1, 1);
  strToArr.splice(i2 - 1, 1);
  return strToArr.join("");
};

strCut("BarcelonaCodeSchool", 0, 5);

module.exports = {
  strCut,
};
