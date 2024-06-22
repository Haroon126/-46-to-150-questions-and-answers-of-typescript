// - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function dividing(num1: number, num2: number): {} {
  return {
    quotient: num1 / num2,
    remainder: num1 % num2,
  };
}

console.log(dividing(5, 2));
