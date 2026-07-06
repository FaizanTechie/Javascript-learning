// Reduces the array to a single value.

// syntax
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

// Example

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((result, el) => {
    return result + el;
})
console.log(sum);