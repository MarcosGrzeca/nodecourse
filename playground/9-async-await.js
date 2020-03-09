const add = async (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Number must be non-negative");
            }
            resolve(a + b);
        }, 2000);
    });
}


const doWork = async () => {
    const sum = await add(8,6);
    const sum2 = await add(sum, 10);
    return await add(sum2, -7);
}

doWork().then((result) => {
    console.log("result", result)
}).catch((error) => {
    console.error("e", error);
})

// add(8, 6).then((sum) => {
//     console.log(sum);
//     return add(sum, 5);
// }).then((sum2) => {
//     console.log("Second " + sum2);
// }).catch((e) => {
//     console.error(e);
// }).finally(() => {
//     console.info("Finally")
// });