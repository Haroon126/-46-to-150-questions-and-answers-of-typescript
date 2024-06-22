//: Create a function that accepts a callback and invokes it with some arguments.

function Execution(
  callback: (arg1: number, arg2: number) => number,
  arg1: number,
  arg2: number
): number {
  return callback(arg1, arg2);
}
function multiply(num1: number, num2: number) {
  return num1 * num2;
}

console.log(Execution(multiply, 2, 4));
