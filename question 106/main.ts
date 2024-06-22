// : Determine if a given year is a leap year using comparison operators.

function leap_Years(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leap_Years(2020));
console.log(leap_Years(2024));
// In this case any extra days to be added in any 4 years the simple calculation is
// if year divide by 4 its a leap year thar means some extra days in this year
// if year divide by 100 its not a leap year its mean the year doesn't contain some extea days
// // if year divide by 400 its a leap year thar means some extra days in this year
//
