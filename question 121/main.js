// : Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
let i = 0;
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
export {};
