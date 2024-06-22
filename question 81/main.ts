// : Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

type car = {
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
};

const car1: car = {
  make: "Toyota",
  model: "Camry",
  year: 2019,
  color: "Black",
  mileage: 10000,
};

function Iterating(object: car): void {
  for (let key in object) {
    console.log(`${key} : ${object[key]}`);
  }
}

Iterating(car1);
