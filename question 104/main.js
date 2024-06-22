// : Create a function that generates a random hexadecimal color code.
function generates_Color() {
    let random_Color = Math.floor(Math.random() * 16777215);
    let generates = "#" + random_Color.toString(16).padStart(6, "0");
    return generates;
}
console.log(generates_Color());
export {};
