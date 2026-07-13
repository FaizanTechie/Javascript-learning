let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);
para1.classList.add('red');

let h3 = document.createElement('h3');
h3.innerHTML = "I am blue h3";
document.querySelector('body').append(h3);
h3.classList.add('blue');


let input = document.createElement('input');
let button = document.createElement('button');
button.innerHTML = "Click Me!";

document.querySelector('body').append(input);
document.querySelector('body').append(button);

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

document.querySelector('#btn');
btn.classList.add('btnStyle');

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);
h1.setAttribute("class", "heading");

let p = document.createElement("p");
p.innerHTML = "<b>Apna College Delta Practie</b>";
document.querySelector("body").append(p);