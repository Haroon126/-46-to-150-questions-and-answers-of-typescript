// : Write a function that uses the .filter() method to return an array of numbers greater than 10.

let numbers: number[] = [12, 2, 11, 14, 15, 3, 6, 7, 16];

let filterd_Numbers: number[] = numbers.filter(
  (numbers: number): boolean | number => {
    return numbers > 10;
  }
);

console.log(filterd_Numbers);
