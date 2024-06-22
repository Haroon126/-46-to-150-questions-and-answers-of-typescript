// : Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
let myMap = new Map();
myMap.set("Canada", "Ottawa");
const checks = (check) => {
    if (myMap.has("Canada")) {
        console.log(myMap.get("Canada"));
    }
    else {
        console.log("Canada does not exist");
    }
};
checks(myMap);
export {};
