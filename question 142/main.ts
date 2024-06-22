// : Create a Promise that resolves with "Hello, World!" after 2 seconds.

console.log("code start");

function Hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello World!");
    }, 2000);
  });
}

Hello();
