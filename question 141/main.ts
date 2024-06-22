// : Discuss the significance of the await reserved word in asynchronous JavaScript.

console.log("Code Start");

async function fetchData() {
  let data = await fatchsomething();
  console.log("code pause until promise would not bhe resolve");
  console.log(data);

  console.log(
    '  "The await keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.'
  );
}

// fetchData();

console.log("code end");
