// : Iterate over a Map of student IDs and names, and log each pair to the console.
let student = new Map();
student.set("studentId", 232);
student.set("studentName", "Haroon");
for (let [key, values] of student.entries()) {
    console.log(`${key} : ${values}`);
}
export {};
