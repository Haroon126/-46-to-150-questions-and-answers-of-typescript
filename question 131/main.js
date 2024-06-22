//  Create two modules; one that exports a class, and another that imports the class and creates an instance.
import { student } from "./module1.js";
let student1 = new student("Haroon", 20);
console.log(student1);
