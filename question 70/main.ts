//  Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function loops() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

loops();

// Using let for loop variables ensures that each iteration gets a fresh, block-scoped variable. This prevents common issues, where the variable might otherwise capture the same value across iterations.
