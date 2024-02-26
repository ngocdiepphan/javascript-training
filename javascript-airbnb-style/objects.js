//3.1 Use the literal syntax for object creation
function CustomObject(name) {
    this.name = name;
    this.sayHello = function() {
        console.log("Hello, I'm " + this.name);
    }
}
var myObject = new CustomObject("John");
myObject.sayHello();


// ---
function FirstColor(color) {
    this.color = color;
    this.favoriteCollor = function() {
        console.log("Hello, my favorite color is "+ this.color);
    }
}
var myColor = new FirstColor("Red");
myColor.favoriteCollor();

// Create an empty object
var person = {}

person.name = "Alice"
person.age = 10;
person.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.")
}
person.sayHello();

//Creating an object and adding properties
var object = function object() {};

var obj = new Object();

obj.name = "Ana";
obj.age = 15;

console.log(obj);

//Use Object() without using new keyword
var myString = Object("foo");

console.log(typeof myString); //string
console.log(myString); //foo

//3.2 Use computed property names when creating objects with dynamic property names
function getKey(k) {
    return `a key named ${k}`;
  }
  const obj1 = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
  console.log(obj1);//{ id: 5, name: 'San Francisco', 'a key named enabled': true }

//3.3  Use object method shorthand
const atom = {
    value : 1,
    addValue(value) {
        return this.value + value;
    }
};

console.log("Initial value:", atom.value); //Initial value: 1

const newValue = 5;
const result = atom.addValue(newValue);
console.log(`After adding ${newValue}, new value is:`, result);//After adding 5, new value is: 6

// properties
var x = 10;
var y = 20;
var z = 30;

var foo = {
    x: x,
    y: y,
    z: z,
};

console.log(foo.x); // 10
console.log(foo.y); // 20
console.log(foo.z); // 30

// methods
var foo = {
    a: function() {
        console.log("Method a");
    },
    b: function() {
        console.log("Method b");
    }
};

foo.a(); // "Method a"
foo.b(); // "Method b"

