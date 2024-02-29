//Change the body style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans (nickname, favorites, hometown) 
document.getElementById('nickname').innerHTML = 'Diep Phan';
document.getElementById('favorites').innerHTML = 'I fovorite sky';
document.getElementById('hometown').innerHTML = 'Binh Thuan';

//Iterate through each li and change the class to "listitem". 
//Add a style tag that sets a rule for "listitem" to make the color red.
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem';
    items[i].style.color = 'red';
}

// Create a new img element a. Append that element to the page
var myImage = document.createElement('img');
myImage.src = 'https://www.shutterstock.com/image-vector/cute-dinosaur-cartoon-600w-316694663.jpg';
document.body.appendChild(myImage);
