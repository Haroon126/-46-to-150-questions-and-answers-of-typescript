//  Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greet(user_name) {
    if (typeof user_name === "undefined") {
        return "Hello Anonymous User";
    }
    else {
        return `Hello ${user_name}`;
    }
}
console.log(greet("Haroon"));
console.log(greet());
export {};
