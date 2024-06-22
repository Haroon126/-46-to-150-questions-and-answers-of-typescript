//: Use console.log() to debug and track the value of a variable inside a loop.
// Initialize variables
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log(`Iteration:${i}`);
    console.log(`i = ${i}`);
    console.log(`sum = ${sum}`);
}
console.log(`Final sum : ${sum}`);
export {};
