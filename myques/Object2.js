const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};

//Add new property in object
person.address = "Delhi";

//Delete property from object
//   delete person.age
//   or
delete person["eyecolor"];
console.log(person);
