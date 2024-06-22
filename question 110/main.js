// : Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
const student_score = (number) => {
    let score = number;
    if (score >= 70) {
        console.log("A grade");
    }
    else if (score >= 60) {
        console.log("B grade");
    }
    else if (score >= 50) {
        console.log("C grade");
    }
    else if (score >= 40) {
        console.log("D grade");
    }
    else {
        console.log("F grade");
    }
    return ` Student Marks ${score}`;
};
let stud1 = student_score(45);
console.log(stud1);
let stud2 = student_score(75);
console.log(stud2);
let stud3 = student_score(68);
console.log(stud3);
export {};
