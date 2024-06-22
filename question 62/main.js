// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
class student {
    name;
    age;
    classes = [];
    constructor(name, age, classes) {
        this.name = name;
        this.age = age;
        this.classes = classes;
    }
}
let student1 = new student("Haroon", 23, ["maths", "physcis"]);
console.log(student1);
export {};
