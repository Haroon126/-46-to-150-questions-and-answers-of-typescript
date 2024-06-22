//  Find the index of "Banana" in an array of fruits and replace it with "Mango".

let fruits = ["Orange", "Apple", "Banana", "Grapes"];
console.log(fruits); // Oringal array

let index: number = fruits.indexOf("Banana");

fruits[index] = "Mango";
console.log(fruits); // Replace it with mango
