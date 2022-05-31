// write a function called numberConverter which takes an array as an argument
// then it loops through the array and checks if each element can be converted to a number
// pay attention that empty arrays and empty strings are implicitly converted to 0, so you should
// exclude them from conversion, they should be treated as unconvertible.
// any numbers inside strings or if they are a single item of the array should be converted

// if they can be converted it converts them and keeps track of how many can't be converted
// and it returns a string which outputs the result, as shown below.
// "[...numbers] were converted while NUMBER_OF_UNCONVERTABLE couldn't be converted"
// if the argument passed is already a number then it should be ignored,
// if all arguments are numbers then the function should return instead the following message:
// no need for conversion

const numberConverter = function (arr) {
  let numbers = arr.filter(
    (num) => isNaN(Number(num)) == false && num != "" && typeof num !== "number"
  );
  let numberstr = numbers.join(",");
  let arrnums = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") arrnums++;
  }
  if (arr.every((type) => typeof type == "number")) {
    return "no need for conversion";
  } else {
    return `${numbers.length} were converted to numbers: ${numberstr}, ${
      arr.length - numbers.length - arrnums
    } couldn't be converted`;
  }
};

numberConverter([1, "12", "55", "hello", [], ""]);
// numberConverter([22, 55, 66])

module.exports = {
  numberConverter,
};
