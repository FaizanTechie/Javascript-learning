// Async function by default returns a Promise.
// Async is a keyword written before a function.

// async function greet() {
//     throw "poor connection";
//     return "Hello world!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was: ", result)
// })
// .catch((err) => {
//     console.log("promise was rejected with ", err)
// });

// Await keyword 
// await can only be used in async functions

function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            if (num > 5) {
                reject("Promise rejected");
            } else {
                console.log(num);
                resolve();
            }
            
        }, 1000)
    });
}

async function demo() {
    try {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }
}