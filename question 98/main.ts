// : Create a JavaScript snippet that calculates and logs how many days are left until New Year.

const calculatesDays = () => {
  let today = new Date();
  let nextYear = today.getFullYear() + 1;
  let newYear = new Date(nextYear, 0, 1);

  let timeDiff = newYear.getTime() - today.getTime();
  let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysLeft;
};

console.log(calculatesDays());
