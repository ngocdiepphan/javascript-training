class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2002);
const carAge = myCar.age();
console.log("My car is " + carAge + " years old.");
//My car is 22 years old.