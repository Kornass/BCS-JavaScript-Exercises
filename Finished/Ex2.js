// Create a function called checker that loops through a string and checks how
// many occurrences of commas and question marks there are in it.
// it then returns a string with the numbers of commas and question marks
// please make sure to use the appropriate form, so if for instance there are
// more than one commas / question marks you should use plural
// like commas / question marks, otherwise singular: comma / question mark.

const checker = function (str) {
  let comas = 0;
  let que = 0;
  let comastr = "";
  let questr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ",") {
      comas++;
    } else if (str[i] == "?") {
      que++;
    }
  }
  if (comas > 1) {
    comastr = "commas";
  } else {
    comastr = "comma";
  }
  if (que > 1) {
    questr = "marks";
  } else {
    questr = "mark";
  }
  return `${comas} ${comastr}, ${que} question ${questr}`;
};

checker("Hello, how are you today? I am not bad and you?");

module.exports = {
  checker,
};
