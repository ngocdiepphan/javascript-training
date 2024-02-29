function getOptions() {
  var selectElement = document.getElementById("mySelect");
  var options = selectElement.options;
  var optionCount = options.length;
  var optionList = "";

  for (var i = 0; i < optionCount; i++) {
    optionList += options[i].text + "\n";
  }

  alert("Number of items: " + optionCount + "\n\nItems:\n" + optionList);
}
