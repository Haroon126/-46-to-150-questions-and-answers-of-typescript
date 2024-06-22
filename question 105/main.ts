// : Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function dice_Roll() {
  let random_Intiger = Math.floor(Math.random() * 6 + 1);
  return random_Intiger;
}

console.log(dice_Roll());
