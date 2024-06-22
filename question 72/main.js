// : Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let x = 10;
    const y = 20;
    console.log(x); // Ok
    console.log(y); // Ok
}
export {};
// console.log(x);    ERROR
// console.log(y);   ERROR
// block sccpe variables are not aceesible outside the block
