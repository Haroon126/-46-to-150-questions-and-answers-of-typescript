//  - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

const customAdder = (number: number): ((number: number) => number) => {
  return function (newnumber: number) {
    return number + newnumber;
  };
};

const maker_9 = customAdder(21);
console.log(maker_9(9));
