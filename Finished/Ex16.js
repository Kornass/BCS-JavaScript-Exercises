//Write a function called sort that sorts the values of an object, which should all be numbers, 
//You should sort the object numerically in ascending order.


let sort = (obj) => {
  let objToArr = Object.entries(obj);
  let results = [];
  objToArr.sort((a, b) => a[1] - b[1]);
  return Object.fromEntries(objToArr);
};
sort({ age: 22, year: 1999, a: 99, b: 3 });
sort({ a: 1, b: 20, c: 3, d: 4, e: 1, f: 4 });

module.exports = {
  sort,
};
