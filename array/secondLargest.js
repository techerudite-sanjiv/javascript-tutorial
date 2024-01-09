
function secondLargest(arr){

    let uniqueArr=Array.from(new Set(arr))
    uniqueArr.sort((a,b)=>{
        return b-a
    })

    if(uniqueArr.length>2){
        return uniqueArr[1]
    }else{
        return -1
    }

}

console.log(secondLargest([22,45,223,5,78,34,4,3,22]))
let largest = Number.NEGATIVE_INFINITY;
console.log(largest)
