const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
  fullDetails () {
    console.log("my name is " + this.firstname + " i have " + car.brand + " " + car.model);
  },
};
//   Access Object
// console.log(person.firstname);
// console.log(person["firstname"]);

//Add property in object
// person.address = "Kathmandu";
// console.log(person);

//Delete property in object
// delete person.address;

//Iterate the object values
// for (let i in person) {
//   console.log(person[i]);
// }

//Access each object
// console.log(Object.values(person))

// convert object to json format
// console.log(JSON.stringify(person));

// how can we modify object propert value 
// person.firstname = "Rahul";


//method in object
// person.sayHello = function () {
//   console.log("Hello");
// }
// person.sayHello();


//we can access other object property in other object
// const car = {
//   brand:"tata",
//   model:"nexon"
// }
// person.fullDetails();

// console.log(Math.floor(Math.random()*1000000))