// Promises in js are objects that eventually return success (or failure) of an asynvhronous operation.
// 3 states ( pending, fulfilled(success), reject)


let examResult = new Promise((resolve, reject) => {
    let passed = false;

    if(passed){
        resolve("congratulations you passed!");
    } else {
        reject("Sorry you failed");
    }
})

examResult
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });