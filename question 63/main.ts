//  - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape  = {
    kind : "circle" | "rectangle",
    radius?: number;
    area?: number;
    circumference?: number;
    diameter?: number;
    
}

let circle : Shape = {
    kind : "circle",
    area : 20
}

let rectangle : Shape = {
    kind : "rectangle",
    radius : 30,
    circumference : 120,
    diameter : 60
}

console.log(rectangle);
