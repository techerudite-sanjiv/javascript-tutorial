const arr = [4323, 423, 3454, 67, 44, 8];

Array.prototype.forEach = function (cb) {
    console.log(this)
    for (i = 0; i < this.length; i++) {
        cb(this[i])
    }
}

arr.forEach((item) => {
    console.log(item)
})