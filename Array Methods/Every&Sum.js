// Returns true and false.
// Its like AND operator as it is true if all values are true else false.

let arr = [2, 4, 6];

let even = arr.every((el) => {
    return el%2 == 0;
})

console.log(even);

// some method is the sames as every method.