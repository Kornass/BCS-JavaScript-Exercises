// Write a function called check_types it takes an array as argument, it loops through it and checks the typeof each element
// it needs to find out how many different data types there are.
// it should at the end return the number of data types.

const check_types = function (arr) {
  let count = 0;
  let dataTypes = [];
  arr.forEach((element) => {
    if (!dataTypes.includes(typeof element)) dataTypes.push(typeof element);
  });
  // SOLUTION WITH SET
  // let uniqueData = [...new Set(dataTypes)]
  // count = uniqueData.length;
  // END SOLUTION WITH SET

  // console.log(dataTypes.find(type => type == 'string'))

  return dataTypes.length;
};

check_types([{}, "hello", 55, 22, 333, "66"]);

module.exports = {
  check_types,
};
