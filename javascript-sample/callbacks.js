function myDisplayer(some) {
  console.log(some);
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond(); //Goodbye
myFirst(); //Hello

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result); // 10
// --
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 8); //13

//-----
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }

//   myCalculator(5, 6, myDisplayer); //11

// *********
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

console.log(posNumbers);

// Remove negative numbers
function removeNeg(numbers, Callback) {
  const myArray = [];
  for (const x of numbers) {
    if (Callback(x)) {
      myArray.push(x);
    }
    return myArray;
  }
}
