const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hello1")
        resolve("promise1 has been resolved!!")
    }, 1000);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hello2")
        resolve("promise2 has been resolved!!")
    }, 1000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Hello3")
        resolve("promise3 has been resolved!!")
    }, 1000);
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
})