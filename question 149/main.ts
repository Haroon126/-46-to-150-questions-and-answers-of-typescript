//: Explain the concept of the event loop in JavaScript with an example.

console.log("script starts");

setTimeout(() => {
  console.log("SetTimeout");
}, 2000);

console.log("script end");

// Event loop allow javascript to handle asyncrounusly opetations ,  event loop

// check the call stack and event queue once call stack is empty it take tasks from
// event queue and push it into call stack
