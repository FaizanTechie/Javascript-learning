// Executes a function once for every array element.
// Does not return a new array.
// Mainly used for printing or performing actions.

// Example on array.

let array = [1, 2, 3, 4, 5];

function print(el){
    console.log(el);
}

array.forEach(print);

// Example on objects

let arr = [{
    name: "Faizan",
    marks: 95,
}, {
    name: "Ali",
    marks: 85,
}, {
    name: "John",
    marks: 90
}];

arr.forEach((student) => {
    console.log(student);
})
