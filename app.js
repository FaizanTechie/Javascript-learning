const parent = document.querySelector("#parent");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
    console.log("Button clicked");
    event.stopPropagation();
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
}); 