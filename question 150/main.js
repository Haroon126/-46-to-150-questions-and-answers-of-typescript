//: Describe how asynchronous callbacks differ from synchronous code execution.
// synchronous code execution
console.log("Script starts");
// let result = somesynchronousfunction() This might take some time
console.log("Script ends");
// synchronous code execution will not be executed until previous task could not finished
// asynchronous code execution block scope nature
// asynchronous callbacks
console.log("Script starts");
setTimeout(() => {
    console.log("Take some time");
}, 1000);
console.log("Script ends");
export {};
// This will not stop code execution
