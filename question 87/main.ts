//  Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function Extracting(sentence: string): string {
  return sentence.slice(0, 11);
}
let text : string = "The quick brown fox.";

console.log(text); // Original text

console.log(Extracting(text)); // Extracting 10 charachter including whitespace
