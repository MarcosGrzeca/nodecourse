// const doWorkCallback = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject("This is my error")
//         resolve("Hi, it's work")
//         // resolve("Hi, it's work")
//     }, 2000)
// });

// doWorkCallback.then((result) => {
//     console.log(result);
// }).catch((errorCatch) => {
//     console.error("JI")
//     console.error(errorCatch)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

// add(8, 6).then((sum) => {
//     console.log(sum);
//     add(sum, 5).then((sum2) => {
//         console.log("Second " + sum2)
//     }).catch((error) => {
//         console.error(error);
//     });
// }).catch((error) => {
//     console.error(error);
// }).finally(() => {
//     console.info("Finally")
// });

add(8, 6).then((sum) => {
    console.log(sum);
    return add(sum, 5);
}).then((sum2) => {
    console.log("Second " + sum2);
}).catch((e) => {
    console.error(e);
}).finally(() => {
    console.info("Finally")
});