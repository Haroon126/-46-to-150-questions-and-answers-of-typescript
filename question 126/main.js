//: Explain how the this keyword changes its value when used inside a nested function within a method.
let person = {
    name: "Haroon",
    outer: function () {
        console.log(this.name);
        const inner = () => {
            console.log(this.name);
        };
        inner();
    },
};
person.outer();
export {};
