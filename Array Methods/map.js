// Creates a new array by transforming every element.
// new array is same size as original array.

// Example on arrays.

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((el) => {
    return el * 2;
})

// Gpa calculation on nested arrays.

let students = [{
    name: "Faizan",
    marks: 95,
}, {
    name: "John",
    marks: 86,
}, {
    name: "Andrew",
    marks: 76,
}];

let gpa = students.map((el) => {
    return marks / 10;
})
console.log(gpa);