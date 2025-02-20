//  - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(a: boolean, b: boolean): boolean {
  return a && b;
}

console.log(checkBothTrue(true, true)); // always say true
console.log(checkBothTrue(true, false)); // always say false
