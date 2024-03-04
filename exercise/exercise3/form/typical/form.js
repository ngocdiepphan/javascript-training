// Access a node:
// 1. Find the first P tag:
var ptag1 = document.getElementById("ptag1");
var ptag1 = document.firstChild.firstChild;

// 2. Find the second P tag and then change the value:
var ptag2 = document.getElementById("ptag2");
var tx2 = ptag2.firstChild;
tx2.nodeValue = "We changed the text of the second P tag";

//3. Find the third P tag and Access an attribute of an HTML element:
var ptag3 = document.getElementById("ptag3");
ptag3.setAttribute('style', 'color:red');
ptag3.setAttribute('class','a_css_class_name');

//4. Create a node
var ptag4 = document.createElement('P');
var new_ptag4 = document.createTextNode("This is the fourth p tag");
ptag4.appendChild(new_ptag4);
var parentElement = document.body;
parentElement.appendChild(ptag4);
ptag4.style.color = "blue";
ptag4.style.fontSize ="20px";

//5. Remove a node from the parent node
var ptag5 = document.getElementById("ptag5");
var parentNode = ptag5.parentNode;
parentNode.removeChild(ptag5);