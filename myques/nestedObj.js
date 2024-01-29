const myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "Audi",
  },
};

// Access nested object

// console.log(myObj.cars.car1);
  console.log(myObj["cars"]["car1"])

  let p1="cars"
  let p2="car2"

console.log(myObj[p1][p2])