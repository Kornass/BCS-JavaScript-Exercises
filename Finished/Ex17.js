// Extend the functionality of the previous function Sort to include the possibility of having different 
// types of sorting according to the arguments we pass. 
// we need to be able to decide if sorting by keys or by value and if in ascending or descending order.
// please also note that the keys are letters and the values are numbers so should the sorting be by 
// key it needs to sort alphabetically.



var obj = { a: 1, c: 5, b: 3, d: 4, e: 1, f: 4 };
let sort = (obj, ele, ord) => {
  let objToArr = Object.entries(obj);
  let results = [];
  if (ele == undefined || ord == undefined) {
    return "Missing argument here!";
  } else if (ele == "values" && ord == "ascending") {
    objToArr.sort((a, b) => a[1] - b[1]);
  } else if (ele == "values" && ord == "descending") {
    objToArr.sort((a, b) => b[1] - a[1]);
  } else if (ele == "keys" && ord == "ascending") {
    objToArr.sort();
  } else if (ele == "keys" && ord == "descending") {
    objToArr.sort().reverse();
  }

  return Object.fromEntries(objToArr);
};
sort(obj, "values", "ascending");
sort(obj, "keys", "ascending");
sort(obj, "values", "descending");
module.exports = {
  sort,
};
