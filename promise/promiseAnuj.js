function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cheese = " i am cheese"
            resolve(cheese)
        }, 2000);
    })
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dough = cheese + " i am dough"
            resolve(dough)
        }, 2000);
    })
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let pizza = dough + " i am pizza"
            resolve(pizza)
        }, 2000);
    })
}

getCheese().then((cheese) => {
    console.log(cheese)
    return makeDough(cheese)
}).then((dough) => {
    console.log(dough)
    return bakePizza(dough)
}).then((pizza) => {
    console.log(pizza)
})