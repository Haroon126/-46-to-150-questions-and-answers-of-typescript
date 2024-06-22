// : Generate a date object representing your next birthday and log it to the console.

const gernerateBirthfday = () : string  => {
  let day = new Date("12 Auguest 2025");

  return day.toDateString();
};

console.log(`${gernerateBirthfday()} That day will my birthday!`);
