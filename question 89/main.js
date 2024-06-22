"use strict";
// : Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
const rounding = (number) => {
    return Math.round(number * 100) / 100;
};
console.log(rounding(3.14159));
