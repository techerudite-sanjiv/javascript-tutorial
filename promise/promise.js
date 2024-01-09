
//handle through normal 
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve('promise1 has been resolved!!')
//     }, 2000);
// })

// function getData(){
//     p.then((res)=>{
//         console.log(res)
//     })
//     console.log("first")
// }
// getData();



// handle through async and await

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve('promise1 has been resolved!!')
//     }, 10000);

// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('promise2 has been resolved!!')
//     }, 20000);

// })

// async function getData() {
//     console.log("hello js")

//     const val1 = await p1;
//     console.log(val1)

//     const val2 = await p2;
//     console.log(val2)
// }

// getData()


// let url="https://jsonplaceholder.typicode.com/posts"
// async function handlePromise(){
//     const data=await fetch("https://jsonplaceholder.typicode.com/posts");
//      const res=await data.json()
//     console.log(data, )
// }
// async function handlePromise(){
//    try{
//     const data=await fetch("https://jsonplaceholder.typicode.com/posts");
//     const res=await data.json()
//     console.log(res, )
//    }
//    catch(err){
//     console.log(err,"Something is wrong")
//    }
// }
// handlePromise();


// let myPromise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve("Promise is resolved");
//    }, 3000);
// })

// function handlePromise() {

//    myPromise.then((res) => console.log(res))
//    console.log("hello js");
// }

// handlePromise()

let myPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("Promise is resolved");
   }, 2000);
})
let myPromise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("Promise is resolved");
   }, 5000);
})

async function handlePromise() {

   let p = await myPromise;
   console.log(p);
   console.log("hello js 1");
   
   let p1 = await myPromise1;
   console.log(p1);
   console.log("hello js 2");
   
}

handlePromise()