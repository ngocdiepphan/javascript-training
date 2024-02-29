/*
Clicking on the button the font, font size, 
and color of the paragraph text will be changed.
*/
function js_style() {
    var paragraph = document.getElementById('text');
    var button = document.getElementById('jsstyle');

    paragraph.style.fontFamily = "Arial";
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "24px";

    button.style.backgroundColor = "green";
    button.style.color = "white";
}