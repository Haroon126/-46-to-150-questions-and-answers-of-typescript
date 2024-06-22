// Create an arrow function that takes multiple parameters and returns the product of all parameters.

const addAll = ([...total]) => {
  let sum = 1;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  return sum;
};

console.log(addAll([1, 4, 5, 6, 7]));
