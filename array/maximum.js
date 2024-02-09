const arr = [33, 4, 223, 45]

// 1st approach 
let res = arr.sort((a, b) => a - b).reverse()[0]

// 2nd approach  
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}


console.log(max);    