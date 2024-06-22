// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
    { make: "Apple", model: "MackBook Pro", year: 2019 },
    { make: "HP", model: "Elite Book", year: 2024 },
    { make: "DELL", model: "XPS 360", year: 2020 },
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
export {};
// for laptop1
