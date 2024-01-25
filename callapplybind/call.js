const person1 = {
    name: 'John',
    age: 30,
    job: 'Software Engineer',
    getDetails: function () {
        console.log(this.name, this.age,)
    }
}

person1.getDetails()

const person2 = {
    name: 'Breaden',
    age: 33,
}
person1.getDetails.call(person2)

// what is call method in javascript?
// call method is used to call a function with a given this value and arguments provided individually.

// WHAT IS BIND METHOD
// bind works similar to call method but the only difference is that it returns a function instead of calling it.