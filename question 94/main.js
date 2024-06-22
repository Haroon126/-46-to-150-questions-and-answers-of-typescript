//  Use the .map() method to create a new array that contains the length of each word from an array of words.
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];
let length_of_Words = words.map((eachword) => {
    return eachword.length;
});
console.log(words); // words
console.log(length_of_Words); // length of each word
export {};
