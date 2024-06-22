// : Write an if statement that logs "Good Morning" if the current time is before 12 PM.
function goodMOrning() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;
    if (time < "12") {
        console.log("Good Morning");
    }
    else {
        console.log("Good AfterNoon");
    }
    return time;
}
console.log(goodMOrning());
export {};
