// The spread operator (...) is an ES6 feature that expands (spreads) the elements of
//  an array, object, or string into individual values.

// Example on array.

let arr = [1, 3, 3, 4, 5];

let newArr = [...arr];

console.log(newArr);

// Example on strings.

let name = [...'Faizan'];
console.log(name);

// Example of spread on object literals.

const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};
const dataCopy = {...data, id: 123};
