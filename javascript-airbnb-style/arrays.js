// bad
const items1 = new Array();

// good
const items2 = [];

console.log(items1); // []
console.log(items2); // []

//4.2 Use Array#push instead of direct assignment to add items to an array.

const someStack = [];

// bad
// someStack[someStack.length] = 'abracadabra-lenght';

// good
someStack.push('abracadabra-push');

console.log(someStack); // ['abracadabra']

//4.3 Use array spreads ... to copy arrays.
const items = ['apple', 'banana', 'orange'];

// // bad
// const len = items.length;
// const itemsCopy = [];
// let i;

// for (i = 0; i < len; i += 1) {
//   itemsCopy[i] = items[i];
// }

// console.log(itemsCopy); // ['apple', 'banana', 'orange']

// good
const itemsCopy2 = [...items];

console.log(itemsCopy2); // ['apple', 'banana', 'orange']

//4.4 To convert an iterable object to an array, use spreads ... instead of Array.from

/*const foo = document.querySelectorAll('.foo');

const nodes1 = Array.from(foo);
console.log(nodes1); =>sample*/ 

//4.5 Use Array.from for converting an array-like object to an array.

const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 5 };

const arr = Array.from(arrLike);

console.log(arr); // 3=> ['foo', 'bar', 'baz']
// 5 =>[ 'foo', 'bar', 'baz', undefined, undefined ]
