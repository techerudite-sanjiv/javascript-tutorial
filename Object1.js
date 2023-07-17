const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};

//   Access Object
console.log(person.firstname);
console.log(person["firstname"]);

//Access each object
  console.log(Object.values(person))

// convert object to json format
console.log(JSON.stringify(person));
