// Mouse Pointer Events 
// 1. onclick 
// 2. onmouseenter

// let btns = document.querySelectorAll("button");
// console.dir(btns);

// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.dir("You entered a mouse range");
//     };
// };

// function sayHello () {
//     alert("HellO!");
// };


// Event Listners

let btns = document.querySelectorAll("button");

for (btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("You double clicked me!");
    })
}

function sayHello () {
    alert("HellO!");
};

function sayName () {
    alert("Apna College");
};



