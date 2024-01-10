//1. Write a JavaScript function to calculate the sum of two numbers.

function myfun(a, b) {
     return a + b
}
const res = myfun(32, 132);
console.log(res);


//2. Write a JavaScript program to find the maximum number in an array. 
// function maxNum(arr){
//      return Math.max(...arr); 
// }
// const maxRes=maxNum([22,52,1456,236,])
// console.log(max);


//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
function pallindrome(str) {
     return str === str.split('').reverse().join('') ? "number is pallindrome" : "number is not pallindrome"
}
const data = pallindrome("12121")
console.log(data);


//4.  Write a JavaScript program to reverse a given string. 
function revStr(str) {
     return str.split('').reverse().join('')
}
console.log(revStr("this is a string data"))


//5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
function even(arr) {
     return arr.filter(item => item % 2 == 0)
}
console.log(even([25, 22, 56, 28, 33]));



//6. Write a JavaScript program to calculate the factorial of a given number.
function fact(num) {
     if (num === 0 || num === 1) {
          return 1;
     }
     else {
          return num * fact(num - 1)
     }
}
console.log(fact(232))




//7.  Implement a debounce function in JavaScript that limits the frequency of a
//  function’s execution when it’s called repeatedly within a specified time frame. 

function debounce(fn, delay) {
     let timer;
     return function (...args) {
          clearTimeout(timer)
          timer= setTimeout(() => {
               fn.apply(this,args)
          }, delay);
     }
}


function search(e) {
     console.log(e.target.value);
}

const handleChange = debounce(search, 1000)