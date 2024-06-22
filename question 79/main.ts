//  Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

type car = {
  make: string;
  model: string;
  year: number;
};

let mycar: car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log(mycar.model);
