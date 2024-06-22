"use strict";
//: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
Object.defineProperty(exports, "__esModule", { value: true });
function checks(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checks(2));
console.log(checks(3));
console.log(checks(6));
console.log(checks(12));
