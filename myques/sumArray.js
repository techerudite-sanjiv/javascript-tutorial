const array = [2, 3, 32, 6];

let totalSum = 0;

// for (let i = 0; i < array.length; i++) {
//   totalSum = totalSum + array[i];
// }
// console.log(totalSum);

// let result = array?.map((item) => {
//  return totalSum = totalSum + item;
// });
// console.log(result);


let result = array.reduce((accumulator, currentValue, index)=>{
   return accumulator=accumulator+currentValue;    
})
console.log(result)