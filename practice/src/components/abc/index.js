const p = new promise((resolve, reject) => {
    resolve("promsie resolved")
})

//How do we handle promise before 
function getData() {
    p.then((res) => console.log(res));
}
getData();


// How do we handle promise After
async function handlePromise() {
    const value = await p;
    console.log(value);
}
handlePromise() 
 