// : Write a function that returns the current date in the format "DD-MM-YYYY".

function formateDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}-${month}-${year}`;
}
const today = new Date();
const formatedDate = formateDate(today);
console.log(formatedDate);
