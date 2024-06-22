//: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
let fruitsbasket = ["apple", "mango", "Grapes", "banana"];
function Making_Fruit_Chat() {
    return new Promise((resolve, reject) => {
        if (fruitsbasket.includes("banana")) {
            resolve("Fruit chat is ready");
        }
        else {
            reject(() => {
                throw new Error("Banana is not in basket");
            });
        }
    })
        .then((resolve) => {
        console.log("Fruit chat is ready");
    })
        .catch((reject) => {
        console.log("Banana is not in basket");
    });
}
Making_Fruit_Chat();
export {};
