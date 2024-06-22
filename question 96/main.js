// : Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
let calculate_Numbers = [2, 4, 6, 10];
let sum = calculate_Numbers.reduce((inital, total) => {
    return inital + total;
}, 0);
console.log(sum);
export {};
