const arr = [4323, 423, 3454, 67, 44, 8];

Array.prototype.myMap = function (cb) {

    let res = [];
    for (i = 0; i < this.length; i++) {
        res.push(cb(this[i],i,this))
    }
    return res;
};

let res = arr.myMap((item,index) => item * 3)
console.log(res)
