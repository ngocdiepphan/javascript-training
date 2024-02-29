insert_Row = () => {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = "Row Cell new";
  cell1.style.backgroundColor = "pink";
  cell2.innerHTML = "Row Cell2 new";
  cell2.style.backgroundColor = "rgba(0, 0, 255, 0.3)";
};
