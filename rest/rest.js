

function myfun(a,b,c,...args){
    console.log(a,b,c,args)
}  

const arr=[1,2,3,4,5,6,7,8,9,10]

 myfun(1,2,3,...arr)


 let person={
    name:"sanjeev",
    age:24,
    company:"Tcs"
 }

 const {name,...args}=person
 console.log(name,args)

 1208870229770772