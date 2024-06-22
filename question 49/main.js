// - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobbies(...hobbies) {
    return hobbies.forEach((hobby) => {
        console.log(` I Enjoy ${hobby}`);
    });
}
hobbies("eating", "Driving", "Eating", "Coding");
export {};
