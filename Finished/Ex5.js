// 4. SIMPLE BOOKING SYSTEM - ADD A BOOKING AND CHECK AVAILABILITY

let bookings = [];
let bookingSystem = (y, m, d) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date();
  let booking = new Date(y, m - 1, d);
  let month = monthNames[booking.getMonth()];
  let day = booking.getDate();
  let year = booking.getFullYear();
  // debugger;
  if (today - booking > 0) {
    return "You can't make a booking for the past ;)";
  } else if (
    typeof y != "number" ||
    typeof m != "number" ||
    typeof d != "number" ||
    y == undefined ||
    m == undefined ||
    d == undefined ||
    m < 1 ||
    m > 12 ||
    // SITUATION WHEN DAY IS INCORRECT SO IT CHANGES A MONTH (IF IT'S 0 OR OVER THE DAYS IN A CERTAIN MONTH)
    month != monthNames[new Date(y, m - 1).getMonth()]
  ) {
    return "Incorrect data!";
  }
  // debugger;
  if (
    bookings.findIndex((dayele) => dayele[2] == day) !== -1 &&
    bookings.findIndex((monthele) => monthele[1] == month) !== -1 &&
    bookings.findIndex((yearele) => yearele[0] == year) !== -1
  ) {
    return "This date is not available!";
  } else {
    bookings.push([year, month, day]);
    alert(`Your booking for ${day} of ${month} ${year} is made!`);
    return bookings;
  }
};

bookingSystem(2022, 9, 19);
bookingSystem(2023, 12, 9);
bookingSystem("marta", 2022, 9, 19);




module.exports = {
    tellAge
}