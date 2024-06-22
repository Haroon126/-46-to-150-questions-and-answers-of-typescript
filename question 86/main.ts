//  Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function present(sentence: string): boolean {
  let convert = sentence.split(" ");
  let res = convert.some((check) => check === "JavaScript");
  return res;
}

let text: string =
  '"Learning JavaScript opens up numerous opportunities in web development.';

console.log(present(text));
