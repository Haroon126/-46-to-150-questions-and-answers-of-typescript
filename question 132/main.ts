//: Discuss the difference between default and named exports in JavaScript modules.

import maths from "./module1.js";
import { student } from "./module1.js";
const student1 = new student("Haroon", 23);
console.log(student1);

console.log(maths.sum(2, 3));

console.log(maths.multiply(3, 3));

// console.log(multiply(3,3));
