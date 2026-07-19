// let jsonRes = '{"fact":"A cat\u2019s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.","length":88}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);


////////////////////////////////////////////////////
// Cat fact API

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log("data 1", data);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data 2: ", data2);
// })
// .catch((err) => {
//     console.log("ERR -", err);
// })

/////////////////////////////////////////////////////////////
// Dog API

// let url1 = "https://dog.ceo/api/breeds/image/random";

// fetch(url1)
// .then((res) =>{
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log("Data 1: ", data);
//     return fetch(url1);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data 2:", data2);
// })
// .catch((err) => {
//     console.log("ERR -", err);
    
// })

///////////////////////////////////////////
// using awiat function.

let url = "https://catfact.ninja/fact";

// async function getFact() {
//   try {  
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// } catch (err) {
//     console.log("ERR -", err)
// }
// }

// getFact();

async function getFact() {
  try {  
    let res = await axios.get(url);
    // let data = await res.json();
    console.log(res.data.fact);
} catch (err) {
    console.log("ERR -", err)
}
}

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let fact = getFact();
})

