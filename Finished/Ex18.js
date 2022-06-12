// To practice passing data between functions let's create a crypto converter…
// You need to create several functions, each will be responsible for its own
// tasks and to call the next function.
// addCurrency
// findcurrency
// converter
// tellConversion
// You should exclusively call addCurrency and it will call the others
// add currency takes three arguments
// a coin, its value (amount of coins) and an array of coins (our coins database)
// the coin should be an object with the following structure:

// {
//      coin:'coin_here',
//      rate:CONVERSION_RATE_TO_USD_TYPE_NUMBER
// }

let crypt = [];
let addCurrency = (curr, amount, arr) => {
  let ifItIs = crypt.findIndex((c) => c.coin == curr.coin);
  if (ifItIs == -1) {
    arr.push(curr);
    let coin = curr.coin.charAt(0).toUpperCase() + curr.coin.slice(1);
    return `New coin ${coin} added to Database`;
  } else if (ifItIs != -1) {
    return findCurrency(arr[ifItIs], amount);
  }
};
let findCurrency = (coinobj, amount) => {
  let rate = coinobj.rate;
  let coin = coinobj.coin;
  return converter(rate, amount, coin);
};
let converter = (rate, amount, coin) => {
  let toDollars = amount * rate;
  return tellConversion(toDollars, coin, amount);
};
let tellConversion = (toDollars, coin, amount) => {
  coin = coin.charAt(0).toUpperCase() + coin.slice(1);
  return `You will receive ${toDollars} usd for your ${amount} ${coin}s`;
};
