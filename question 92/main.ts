// : Write a function to remove the last element from an array and return the removed element.

function remove_Fruit(): void {
  const fruits: string[] = ["Apple", "Mango", "Banana"];
  const remove_Fruit: string | undefined = fruits.pop();

  console.log(fruits);
  console.log(remove_Fruit); // Returned Value banana
}

remove_Fruit();
