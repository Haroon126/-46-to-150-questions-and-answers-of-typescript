//- Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [80, 55, 77, 53, 66, 64];

let averageGrade: number = grades.reduce((inital, total): number => {
  return inital + total / grades.length;
}, 0);

console.log(averageGrade);
