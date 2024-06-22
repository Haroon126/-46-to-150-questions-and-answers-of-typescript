// : Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replacesAll(sentence: string): string {
  return sentence.replace(/Javascript/g, "Typescipt");
}

let orinalSentence: string =
  "I Love Javascript , Javascript is very powerful language";
console.log(orinalSentence);

let modifingSecntence: string = replacesAll(orinalSentence);
console.log(modifingSecntence);
