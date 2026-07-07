// Destructurig is an Es6 feature in which values from arrays and properties 
// from objects are stored in a separate variable in a clean way.

// Normal way if writing
let num = [10, 20, 30, 40];

let num1 = num[0];
let num2 = num[1];
let num3 = num[2];

console.log(num1);

// Destructuring in array.

let numbers = [10, 20, 30, 40];
let [first, second, third, forth] = numbers;
console.log(second);

// in Strings 

let student = {
    name: "john",
    age: 21,
    city: "berlin",
};
let {name, age, city} = student;
console.log(name);