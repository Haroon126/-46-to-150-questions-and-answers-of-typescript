//  - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let typesOfItems = [
    "String",
    "AnotherWords",
    5,
    4,
    "Mango",
    2,
];
function onlyWords(typesOfItems) {
    let newList = [];
    for (let item of typesOfItems) {
        if (typeof item === "string") {
            newList.push(item);
        }
    }
    return newList;
}
console.log(typesOfItems); // Mix items
let wordsOnly = onlyWords(typesOfItems); // only words
console.log(wordsOnly);
export {};
