function pattern(nums) {
    let string = ''
    for (i = 0; i < nums; i++) {
        for (let j = 0; j < nums; j++) {
            string = string + '*'
        }
        string = string + '\n'
    }
    return string
}

result = pattern(5);
console.log(result);