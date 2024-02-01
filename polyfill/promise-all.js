let promise1 = new Promise((resolve) => {
    resolve("promise11")
})
let promise2 = new Promise((resolve) => {
    resolve("promise22")
})
let promise3 = new Promise((resolve) => {
    resolve("promise33")
})

Promise.myall = function (promises) {
    let res = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            item.then((data) => {
                count++;
                res[index] = data;
                if(count === promises.length){
                    resolve(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
}
Promise.myall([promise1, promise2, promise3]).then((res) => {
    console.log(res)
})
