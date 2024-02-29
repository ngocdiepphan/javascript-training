changeContent = () => {
  const row = parseInt(prompt("Input the Row number(0,1,2)", "0")); //parseInt() is used to convert a string to an integer
  const col = parseInt(prompt("Input the Column number(0,1)", "0")); // prompt will default to displaying the string "0", if the user does not enter anything.
  const newContent = prompt("Input the new content:");

  const table = document.getElementById("myTable");
  const cell = table.rows[row].cells[col];

  if (cell) {
    cell.textContent = newContent;
  } else {
    alert("This cell does not exist");
  }
};

/*
function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}
*/
