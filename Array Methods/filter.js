// Returns a new array containing only the elements that satisfy a condition.

let num = [1, 23, 5, 3, 87, 34, 6, 10, 43, 2];

let even = num.filter((el) => {
    return el % 2 == 0;
})

console.log(even);