// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
class laptop {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    describe() {
        return `This Laptop make by ${this.make} and its model ${this.model} and its introduce in ${this.year} `;
    }
}
let myLaptop = new laptop("Apple", 2019, 2019);
console.log(myLaptop);
console.log(myLaptop.describe());
export {};
