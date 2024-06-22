// : Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

let a: number = 5;
let b: number = 10;

console.log(a); // value of a 5

console.log(b); // value of b 10

let temp = a; // temporary hold value of a in temp variable.

a = b;
b = temp;

console.log(a);
console.log(b);
