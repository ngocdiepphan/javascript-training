var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
  },
];

//create a p element with the book title and author and append it to the page.
//solution 2
for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var paragraph = document.createElement("p");
  var bookInfo = book.title + " by " + book.author;
  paragraph.textContent = bookInfo;
  document.body.appendChild(paragraph);
}

// solution 2
for (var i = 0; i < books.length; i++) {
  var bookP = document.createElement("p");
  var bookDescription = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  bookP.appendChild(bookDescription);
  document.body.appendChild(bookP);
}

// Change the style
var bookList = document.createElement("ul");
for (var i = 0; i < books.length; i++) {
  var bookItem = document.createElement("li");
  var bookImg = document.createElement("img");
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);
  var bookDescription = document.createTextNode(
    books[i].title + " by " + books[i].author
  );
  bookItem.appendChild(bookDescription);
  if (books[i].alreadyRead) {
    bookItem.style.color = "grey";
  }
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);

//Change the style
bookItem.style.padding = "10px";
bookItem.style.borderBottom = "1px solid #ccc"; // change style line bottom

//Change the style
var ulElement = document.createElement("ul");
ulElement.id = "bookList";
document.body.appendChild(ulElement);
var ulElement = document.getElementById("bookList");
for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var liElement = document.createElement("li"); // create a new <li> for each book
  var bookInfo = book.title + " by " + book.author;
  liElement.textContent = bookInfo; // set text content of the <li>
  var imgElement = document.createElement("img");
  imgElement.src = book.img;
  imgElement.alt = book.title + " Cover";
  liElement.appendChild(imgElement); //append the <img> element to the <li> element
  ulElement.appendChild(liElement); //append the <li> element to the <ul> element
  if (book.alreadyRead) {
    liElement.style.color = "green"; // Change text color to green for read books
  } else {
    liElement.style.color = "red"; // Change text color to red for unread books
  }
}
