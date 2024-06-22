//  Use the .map() method to create a new array that contains the length of each word from an array of words.

const words: string[] = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let length_of_Words: number[] = words.map((eachword): number => {
  return eachword.length;
});

console.log(words); // words

console.log(length_of_Words); // length of each word
