// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((number) => {
    return number * 2;
});
console.log(numbers); // orignial numbers
console.log(double); // double numbers
export {};
