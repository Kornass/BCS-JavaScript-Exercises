// Let's make a currency converter!
// it should be a flexible function which reacts differently to different inputs.
// Outside the function declare an array called currenciesDB which will hold your currencies.
// write a function called dinamicConverter which takes three arguments.
//if the first argument is "add" then the second is:
// an array which contains a currency and an exchange rate (to the dollar)
// if the item is successfully added it should return the number of added items.

//if the first argument is "convert" then the second is:
// an array which contains the currency and the amount that you wish to convert.
// the third argument will be the currency that you want to convert your money to.
// if the currency is not present or any of the arguments is missing it should return
// an error message:  "invalid data provided!"

// Please make sure that currency is added only once not to overload your DB!
// If the currency is already present you should return "invalid data provided!"
// It should return the result of the conversion.

let currenciesDB = [];
let dinamicConverter = (x, y, z) => {
  // if add
  if (x == "add" && currenciesDB.findIndex((x) => x[0] == y[0]) !== -1) {
    return "invalid data provided!";
  } else if (x == "add" && currenciesDB.findIndex((x) => x[0] == y[0]) == -1) {
    currenciesDB.push(y);
    return 1;
  }
  console.log(currenciesDB);
  // if convert
  if (x == "convert" && currenciesDB.findIndex((x) => x[0] == z) !== -1) {
    let indexOfRateToDollar = currenciesDB.findIndex((x) => x[0] == y[0]);
    let rateToDollar = currenciesDB[indexOfRateToDollar][1];
    let indexOfRateToCurrency = currenciesDB.findIndex((x) => x[0] == z);
    let rateToCurrency = currenciesDB[indexOfRateToCurrency][1];
    return (y[1] * rateToDollar) / rateToCurrency;
  } else if (currenciesDB.findIndex((x) => x[0] == z) == -1) {
    return "invalid data provided!";
  }
};
// SOLUTION 2
// let currenciesDB = [];
// let exchangeRates = [];
// let toDollar;
// let dinamicConverter = (x, y, z) => {
//   //add
//   if (x == "add" && currenciesDB.includes(y[0])) {
//     return "invalid data provided!";
//   } else if (x == "add" && !currenciesDB.includes(y[0])) {
//     currenciesDB.push(y[0]);
//     exchangeRates.push(y[1]);
//     return 1;
//   }
//   // convert
//   if (x == "convert" && currenciesDB.includes(z)) {
//     toDollar = y[1] * exchangeRates[currenciesDB.indexOf(y[0])];
//     return toDollar / exchangeRates[currenciesDB.indexOf(z)];
//   } else if (!currenciesDB.includes(z)) {
//     return "invalid data provided!";
//   }
// };

module.exports = {
  dinamicConverter,
  currenciesDB,
};
