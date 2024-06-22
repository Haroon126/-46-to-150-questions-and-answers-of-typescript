// : Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.

const Converting = (str: string): number => {
  return Number(str);
};

let res = Converting("123"); // taking string

console.log(res); // giving number

console.log(typeof res); // check typeof
