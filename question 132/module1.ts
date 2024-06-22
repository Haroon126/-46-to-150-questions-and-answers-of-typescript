export class student {
  constructor(public name: string, public age: number) {}
}
// this is export key word in this we can just export specific thing

function sum(num1: number, num2: number) {
  return num1 + num2;
}

function multiply(num1: number, num2: number) {
  return num1 * num2;
}

export default { sum, multiply };

// In this case export default is use for export multiple function , variable , class etc
// but it will be treat like an object
