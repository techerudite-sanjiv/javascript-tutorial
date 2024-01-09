
// let name = "sanjeev";
// let textCapt = name.charAt(0).toUpperCase() + name.slice(1)
// console.log(textCapt)


// let data = "reverse the respective sentence"
// let finalSentence = data.split('').reverse().join('')

// console.log(finalSentence)



// const arrayData = [25, 36, 565, 45, 52]
// let totalSum = 0
// for (let i = 0; i < arrayData.length; i++) {
//     totalSum = totalSum + arrayData[i]
// }

// let totalSum1 = arrayData.reduce((acc, ele) => {
//     return acc + ele
// }, 0)

// console.log(totalSum, ">>>", totalSum1)

// sayHello("Sam");

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

//JavaScript runs code sequentially from the top-down. However, sometimes, we need code to run after something has 
// happened (i.e. asynchronous operations). Callback functions are a way to make sure a function runs only after the 
// set of operations is completed. A candidate should be able to explain both how callback functions work and how it 
// relates to asynchronous programming.

// //A callback function is a function passed into another function as an argument.The callback function is then invoked 
// inside the callee to complete an action.




// Capatlize every first letter of sentence sentence 

// const name="i am sanjeev kumar. i am web deve"

// let res=name.split(' ');

// let capString=''
// for(let i=0; i<res.length;i++){
//     let cap= res[i].charAt(0).toUpperCase()+ res[i].slice(1)
//     capString = capString+ " " +cap;
// }

// console.log(capString)
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }

    // Find the shortest string in the array
    let shortest = strs[0];
    for (let str of strs) {
        if (str.length < shortest.length) {
            shortest = str;
        }
    }

    console.log(shortest)
    // Compare characters in the shortest string with the other strings
    for (let i = 0; i < shortest.length; i++) {
        console.log(shortest[i])
        for (let str of strs) {
            if (str[i] !== shortest[i]) {
                return shortest.slice(0, i); // Return the common prefix found so far
            }
        }
    }

    return shortest; // If we reach this point, the entire shortest string is the common prefix
}

// Example usage:
const strings = ["flower", "flour", "flourish"];
const commonPrefix = longestCommonPrefix(strings);
console.log("Longest Common Prefix:", commonPrefix);
