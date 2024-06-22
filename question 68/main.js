// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function Multiplying(number1, number2) {
    return Math.round((number1 * number2 * 100) / 100);
}
let result = Multiplying(3.5, 4.2);
console.log(result);
export {};
