// Promise（承诺）

const myPromise = new Promise<number>((resolve, reject) => {
    // 异步操作
    setTimeout(() => {
        resolve(42); // 操作成功，返回结果
        // 或者
        // reject(new Error('Something went wrong')); // 操作失败，返回错误
    }, 2000);
});

myPromise.then((result) => {
    // console.log(result); // 输出: 42
}).catch((error) => {
    console.error(error.message); // 输出: Something went wrong
});

// async/await:
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    // console.log('calling');
    const result = await resolveAfter2Seconds();
    // console.log(result);// output: resolved
    // Expected output: "resolved"
}

asyncCall();

// Promise.all:

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((_, reject) => setTimeout(() => reject('Error'), 2000));

Promise.all([promise1, promise2, promise3])
    .then((results) => console.log(results))
    .catch((error) => console.error(error)); // 输出: Error
