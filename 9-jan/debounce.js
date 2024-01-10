
function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        setTimeout((args) => {
            fn.apply(this,args)
        }, delay);
    }

}

function search(e) {
    console.log(e);
}


const mydebounce = debounce(search, 2000)