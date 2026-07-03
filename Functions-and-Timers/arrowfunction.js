// Used in higher order functions as parameters.
// Generally assigned to variables or used as CallBacks ( A function that is passed to another function as a parameter).
// Arrow function are nameless functions.

const sum = (a, b) => {
    console.log(a + b);
};

const pow = (a, b) => {
    return a ** b;
};

const hello = () => {
    console.log("hello world");
};

sum(5, 15);         
console.log(pow(2, 3)); 
hello();            