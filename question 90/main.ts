// : Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.

const random_Number = (): number => {
  return Math.floor(Math.random() * 10 + 1);
};

console.log(random_Number());
