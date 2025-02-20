// Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function Combine(age: string, value: number): string | number {
  return `${age} : ${value}`;
}

console.log(Combine("Age", 30));
