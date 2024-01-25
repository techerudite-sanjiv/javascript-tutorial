function hello() {
    console.log('Hello');
}

function world(a,b,callback) {
    console.log(a,b);
    callback();
}
world(10,44,hello)


// why we use callback function?
// Callback function is used to handle asynchronous operations in javascript.
// like if we are doing two task at one one time and we want to call that function after completion of first task then we use callback function.
// like if we are fetching data from database then it will take some time to fetch data from database so we use callback function to handle this type of operations.