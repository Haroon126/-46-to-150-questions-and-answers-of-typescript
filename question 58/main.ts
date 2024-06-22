//  - Write a simple program that can take lots of scores and find their average.

function scores(...scores: number[]): number {
  let average: number = scores.reduce((inital, total) => {
    return inital + total / scores.length;
  }, 0);
  return average;
}

let finded: number = scores(50, 60, 33.6, 79, 65, 99);

console.log(finded);
