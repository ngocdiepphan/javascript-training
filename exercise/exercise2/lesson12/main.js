function highlightBoldWords() {
  var paragraph = document.getElementById("paragraph");
  var boldWords = paragraph.getElementsByTagName("b");

  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.add("highlight");
  }
}

function removeHighlight() {
  var paragraph = document.getElementById("paragraph");
  var boldWords = paragraph.getElementsByTagName("b");

  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.remove("highlight");
  }
}
