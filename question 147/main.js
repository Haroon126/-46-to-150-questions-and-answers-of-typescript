"use strict";
// : Explain how to handle errors in a callback pattern.
Object.defineProperty(exports, "__esModule", { value: true });
function asynTask(callback) {
    setTimeout(() => {
        callback(null, 'Error');
    }, 10000);
}
asynTask((errors, data) => {
    if (errors) {
        throw errors;
    }
    else {
        console.log(data);
    }
});
