// CASE 1:

// var a=10;
// function getName(){
//     console.log("hello javascript1 ")
// }
// getName()
// console.log(a)
// console.log(getName)
// output:
// hello javascript2
// undefined
// f getName (){
//     console.log("hello javascript2")
// }


// CASE 2:

// getName()
// console.log(a)
// console.log(getName)
// var a=10;
// function getName(){
//     console.log("hello javascript1")
// }
// output:
// hello javascript2
// undefined
// f getName (){
//     console.log("hello javascript2")
// }

// in this situation memory will allocated to variable and function 


// CASE 3:
// console.log(x)


//CASE 4:
// console.log(getName)
// o/p: Undefined

// getName() 
// o/p: getName is not a function
// because in the memory allocation phase of the execution context , it will allocated getName to x (means it will treat like a variable), that's why we are getting this error

// var getName = () => {
//     console.log("hey js!!!");
// }

//CASE 5:
console.log(foo);
var foo = 'foo';