const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//it will give the function definitions
console.log(person.fullName);

//it will give the function data
console.log(person.fullName());


