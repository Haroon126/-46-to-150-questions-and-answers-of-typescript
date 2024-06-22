// : Modify a method in an object to use the this keyword to access another property in the same object.
let person = {
    name: "Haroon",
    age: 23,
    function() {
        console.log(`${this.name} is ${this.age} years old`);
    },
};
person.function();
export {};
