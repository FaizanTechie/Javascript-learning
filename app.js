// const parent = document.querySelector("#parent");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function (event) {
//     console.log("Button clicked");
//     event.stopPropagation();
// });

// parent.addEventListener("click", () => {
//     console.log("Parent clicked");
// }); 

// const fruits = document.querySelector("#fruits");

// fruits.addEventListener("click", function () {
//     console.log(event.target.innerText);
// })

function one () {
    return 1;
}
function two () {
    return one() + one();
}
function three (){
    let ans = two() + one();
    console.log(ans);
}

three();