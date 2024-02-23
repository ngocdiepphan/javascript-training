// setTimeout()

// setTimeout(() => {
//     console.log('inside the functions')
// }, 5000)

setTimeout(myFunction, 3000);
function myFunction() {
  console.log("Waiting for a Timeout");
}

// ---

setTimeout(function () {
  myFunction("Wait wait !!");
}, 3000);
function myFunction(value) {
  console.log(value);
}

// ****

// setInterval()
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
} //14:24:11
