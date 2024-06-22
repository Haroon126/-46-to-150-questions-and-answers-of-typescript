// : Take a JSON string and parse it into a JavaScript object.

const data: any = '{ "name": "haroon", "age": 23 }';
console.log(data);

// here is jason format string

const convert = JSON.parse(data);
// the function jason.parse() convert it into javascript object

console.log(convert);
