// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateRactangle(width, height) {
    return width * height;
}
console.log(`  Area of Rectangle is ${calculateRactangle(14, 7)}cm`);
// Refactoring into arrow function
const calculateRactangleArrow = (width, height) => {
    return width * height;
};
console.log(`  Area of Rectangle is ${calculateRactangleArrow(4, 2)}cm`);
export {};
