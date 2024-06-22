// - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function rename(Key, value) {
    let newkey = {};
    newkey[Key] = value;
    return newkey;
}
let section2 = rename("title", "New Title");
let section3 = rename("section", "new section");
console.log(section2);
console.log(section3);
export {};
