//  Explain the use of the Promise.all() method with an example.
function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(10);
        }, 1000);
    });
}
function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
}
Promise.all([fun1(), fun2()])
    .then((result) => {
    const multi = result.map((value) => {
        return value * 2;
    });
    console.log(multi);
})
    .catch((err) => {
    console.log(err);
});
export {};
// we can deal will multiple promise with the help of promise.all()
