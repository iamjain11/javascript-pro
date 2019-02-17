const random = () => {
    return Promise.resolve(Math.random());
};

// Bad Promise code, will takes time to execute each block

const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;
    return random()
        .then((v) => {
            first = v;
            return random();
        })
        .then((v) => {
            second = v;
            return random();
        })
        .then((v) => {
            third = v;
            return first + second + third;
        }).then((v) => {
            console.log(`Result ${v}`)
        })
}

console.log(sumRandomAsyncNums())


// Good async Code

const sumRandomAsyncNums1 = async () => {
    let first = await random();
    let second = await random();
    let third = await random();
    console.log(`Resutl : ${first + second + third}`)
};
console.log(sumRandomAsyncNums1())
