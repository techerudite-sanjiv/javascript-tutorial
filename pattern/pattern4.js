function pattern(nums) {
    let string = ''
    for (i = 0; i < nums; i++) {
        for (let j = 0; j < nums-i; j++) {
            string = string + ' '
        }
        for(let k=0;k < i;k++){
            string = string + '*'
        }
        string = string + '\n'
    }
    return string
}

result = pattern(5);
console.log(result);