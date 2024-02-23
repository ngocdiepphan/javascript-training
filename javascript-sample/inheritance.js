// The super() method refers to the parent class.
class Person {
  hello() {
    return "Hello, I am DiepPhan";
  }
}

class Programmer extends Person {
  hello() {
    return super.hello() + ", I readly banana.";
  }
}
const flavio = new Programmer();
console.log(flavio.hello());
// Hello, I am DiepPhan, I readly banana.

// -----------
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
//I have a Ford, it is a Mustang

// ---------
class Color {
  constructor(brand) {
    this.colorname = brand;
  }
  get cnam() {
    return this.colorname;
  }
  set cnam(x) {
    this.colorname = x;
  }
}

const myColor = new Color("Red");
console.log(myColor.cnam);
// Red
myColor.cnam = "Blue";
console.log(myColor.cnam);
// Blue
