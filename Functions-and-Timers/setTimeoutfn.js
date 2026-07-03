//SETTIMEOUT ⬇️
// used in api calling, request respnose.
// It takes time input in ms.


// console.log("Hi there!");
// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);
// console.log("Welcome to");

// SETINTERVAL ⬇️

// setInterval exectues the function in the given time and continues the executio again and again in the given time.
// clearinterval is used to stop the function.

let id = setInterval( () => {
    console.log("Apna College");
}, 2000);

clearInterval(id);