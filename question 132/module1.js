export class student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// this is export key word in this we can just export specific thing
function sum(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
export default { sum, multiply };
// In this case export default is use for export multiple function , variable , class etc
// but it will be treat like an object
