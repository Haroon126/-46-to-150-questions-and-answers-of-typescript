// : Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replacesAll(sentence) {
    return sentence.replace(/Javascript/g, "Typescipt");
}
let orinalSentence = "I Love Javascript , Javascript is very powerful language";
console.log(orinalSentence);
let modifingSecntence = replacesAll(orinalSentence);
console.log(modifingSecntence);
export {};
