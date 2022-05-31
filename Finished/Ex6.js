// Write a function called  checkAge that checks how many days there are between now and the next birthday.
// this function will take 2 arguments month and day
// if the date of birth is today it should return
// Happy birthday!
// if the date of birth is passed it should return
// Sorry your birthday is passed for this year
// if the day provided is out of range (31) or the month is out of the 12 it should return:
// "Error invalid data provided"
// otherwise it should return how many months and days there are between now and the next birthday.
// in case there is less than 1 month between now and the next birthday it should ignore the month.
// for the sake of simplicity let's assume that all months have 30 days.

let checkAge = (m, d) => {
  let today = new Date();
  let year = today.getFullYear();
  let birthday = new Date(year, m - 1, d);
  let daysLeft = Math.floor((birthday - today) / 1000 / 60 / 60 / 24) + 1;
  console.log(daysLeft);
  let months = Math.floor(daysLeft / 30);
  if (m > 12 || d > 31 || d == undefined || m < 1 || d < 1) {
    return "Error invalid data provided";
  }
  if (daysLeft < 0) {
    return "Sorry your birthday is passed for this year";
  } else if (daysLeft == 0) {
    return "Happy birthday!";
  } else if (daysLeft > 30) {
    return `There are ${months} months and ${
      daysLeft - 30 * months - 1
    } days until your next birthday`;
  } else if (daysLeft < 31) {
    return `There are ${daysLeft} days until your next birthday`;
  }
};

checkAge(6, 5);
module.exports = {
  checkAge,
};

