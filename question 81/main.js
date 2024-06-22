// : Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
const car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2019,
    color: "Black",
    mileage: 10000,
};
function Iterating(object) {
    for (let key in object) {
        console.log(`${key} : ${object[key]}`);
    }
}
Iterating(car1);
export {};
