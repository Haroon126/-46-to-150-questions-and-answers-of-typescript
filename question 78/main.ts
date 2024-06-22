// : Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// function Decleration
function squaring(num1: number, num2: number): number {
  return num1 ** num2;
}

console.log(squaring(3, 2));

// function Expression

const squaring2 = function (num1: number, num2: number) {
  return num1 ** num2;
};

console.log(squaring2(3, 2));
