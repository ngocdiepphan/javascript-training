/* 1.1 Primitives:
string
number
boolean
null
undefined
symbol
bigint */

const foo = 1;
let bar = 9;

bar = 9;
console.log(foo, bar); // =>1 9

/* 1.2 Complex
object
array
functio */

const car = [1, 2];
const cat = car;

cat[0] = 9;
console.log(car[0],cat[0]); //=>9 9

