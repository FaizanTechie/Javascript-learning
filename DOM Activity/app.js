let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let randomColor = getRandomColor();

    let h3 = document.querySelector("h3");
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

// keyboard Events

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log(event);
    console.log("Key was pressed");
})

// Form Events

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
})