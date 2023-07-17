


function Pallindrome(num){

    let totalSum=0,rem

    while(num!=0){
        rem=num%10;
        totalSum=totalSum*10 +rem;
         num=num/10

        console.log(totalSum)
    }
}

Pallindrome(123)