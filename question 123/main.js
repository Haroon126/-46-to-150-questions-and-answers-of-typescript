// Create a loop that iterates through a string and stops when it finds the first vowel.
let vowel = "aeiou";
for (let i = 0; i < vowel.length; i++) {
    if (vowel[i] === "a" ||
        vowel[i] === "e" ||
        vowel[i] === "i" ||
        vowel[i] === "o" ||
        vowel[i] === "u") {
        console.log(vowel[i]);
        break;
    }
}
export {};
