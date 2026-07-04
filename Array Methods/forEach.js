// Executes a function once for every array element.

// syntax

let array = [1, 2, 3, 4, 5];

function print(el){
    console.log(el);
}

array.forEach(print);

// Example

let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruits, index){
        console.log(index, fruits);
})