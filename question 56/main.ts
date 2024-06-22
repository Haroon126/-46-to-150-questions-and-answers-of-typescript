//  - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let typesOfItems: (string | number)[] = [
  "String",
  "AnotherWords",
  5,
  4,
  "Mango",
  2,
];

function onlyWords(typesOfItems: (string | number)[]): string[] {
  let newList: string[] = [];
  for (let item of typesOfItems) {
    if (typeof item === "string") {
      newList.push(item);
    }
  }
  return newList;
}

console.log(typesOfItems); // Mix items

let wordsOnly: string[] = onlyWords(typesOfItems); // only words
console.log(wordsOnly);
