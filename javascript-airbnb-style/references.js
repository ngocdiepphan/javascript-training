// 2.1 Use const, avoid var
const a = 1;
const b = 2;

console.log(a); // 1
console.log(b); // 2

//----

const c = 10;
const d = 20;

console.log("The value of a is:", c); //10
console.log("The value of b is:", d); //20
console.log("The value of c is:", c+d); //30
console.log("The value of d is:", d-c); //10
//2.2 Use let insteand of var
//bad
var count_bad = 2;
if (true) {
    count_bad += 2; 
}
console.log(count_bad); // 4

//good
let count = 1;
if (true) {
    count += 1; 
}
console.log(count); // 2

//2.3 2.3 Note that both let and const are block-scoped, whereas var is function-scoped.
{
    let x = 1;
    const y = 1;
    var z = 1;
  }
  console.log(x); // ReferenceError
  console.log(y); // ReferenceError
  console.log(z); // Prints 1

// ---
let f, h; // Khai báo biến x và z ở ngoài khối lệnh
const g = 1;

{
    f = 1; // x
    h = 1; // z
}

console.log("value", f); // Prints 1
console.log("value",g); // Prints 1
console.log("value",h); // Prints 1
