// Question 1
// let btn = document.querySelector("#button");

// btn.addEventListener("click", function () {
//     console.log("Button clicked");
//     btn.classList.toggle("green");
// });

// Question 2
let input = document.querySelector("#name");
let display = document.querySelector("#display");

input.addEventListener("input", function () {
    // Remove everything except letters and spaces
    input.value = input.value.replace(/[^a-zA-Z ]/g, "");

    // Show the cleaned value in the heading
    display.textContent = input.value;
});