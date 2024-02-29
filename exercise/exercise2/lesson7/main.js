createTable = () => {
   const numberOfRows = parseInt(prompt("Input the Row number", 1), 10);
   const numberOfColumns = parseInt(prompt("Input the Column number", 1), 10);

   const table = document.getElementById('myTable');

    for (let i= 0; i< numberOfRows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < numberOfColumns; j++) {
            const cell = row.insertCell(j);
            cell.innerHTML = "Row-" + i + " col-" + j;
        }
    }
}
