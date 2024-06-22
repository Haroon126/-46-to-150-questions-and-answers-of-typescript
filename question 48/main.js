// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let prices1 = [10000, 15000, 5000];
let prices2 = [9000, 14000, 17000];
let combinePrices = [...prices1, ...prices2];
let result = combinePrices.sort((prices1, prices2) => {
    return prices1 - prices2;
});
console.log(result);
export {};
