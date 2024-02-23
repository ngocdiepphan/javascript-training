function myDisplayer(some) {
  console.log(some);
}

let myPromises = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromises.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
); // let x = 0 ;=> ok
// let x = 2 ; =>error

// Waiting for a Timeout
// Example Using Callback
setTimeout(function () {
  myFunction("Waiting waiting !!!");
}, 3000);

function myFunction(value) {
  console.log(value);
}

//Example Using Promise
// let myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("Promise !!");
//   }, 5000);
// });

// myPromise.then(function (value) {
//   console.log(value);
// });

// Waiting for a file
//Example using Callback
// function myDisplayer(some) {
//   console.log(some);
// }

// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.open('GET', "class.js");
//     req.send();
//   }

//   getFile(myDisplayer);

//Example using Promise
// let myPromise = new Promise(function(myResolve, myReject) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "string.js");
//   req.onload = function() {
//     if (req.status == 200) {
//       myResolve(req.response);
//     } else {
//       myReject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );

// **
//callback hell
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// SIMPLE EXAMPLE
// create Promise :
//      step1: new Promise
//      step2: Executor function has 2 tham so
//      step3: call resolve or reject

var promise = new Promise(
  //Executor
  function (resolve, reject) {
    //logic
    // call resolve
    // call reject
    // reject("error");
    resolve();
  }
);

promise
  .then(function () {
    console.log("Success!");
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done!");
  });

//more concise: default is always success or failure (Promise.resolve and Promise.reject)
var promise = Promise.resolve("Success!");
promise.then(function (result) {
  console.log(result);
});

//Promise.all
var promise1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});

var promise2 = new Promise((resolve) => {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});

Promise.all([promise1, promise2]).then(function ([result1, result2]) {
  // var result1 = result[0];
  // var result2 = result[1];
  console.log(result1.concat(result2));
});

//resolve callback hell
function prom(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
prom(1000)
  .then(function () {
    console.log(1);
    return prom(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise((reject) => {
      reject("err");
    });
  })
  .then(function () {
    console.log(3);
    return prom(1000);
  })
  .then(function () {
    console.log(4);
    return prom(1000);
  })
  .catch(function (error) {
    console.log(error);
  });

//PROMISE EXAMPLE
var users = [
  {
    id: 1,
    name: "Diep Phan",
  },
  {
    id: 2,
    name: "Phan Dinh",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "What day is it today?",
  },
  {
    id: 2,
    user_id: 2,
    content: "It's Thursday.",
  },
];

//Fake API
function getComments() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(comments);
    }, 2000);
  });
}

function getUsersByIds(userIds) {
  return new Promise((resolve) => {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);
  });
