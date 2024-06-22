// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function Arithmetic(a: number, b: string): number | string {
  return a + parseInt(b);
}

console.log(Arithmetic(5, "5"));
