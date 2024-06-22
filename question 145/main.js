//: Create a function that accepts a callback and invokes it with some arguments.
function Execution(callback, arg1, arg2) {
    return callback(arg1, arg2);
}
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(Execution(multiply, 2, 4));
export {};
