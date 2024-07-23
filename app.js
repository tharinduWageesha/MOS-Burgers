//Printing Tables-------------------------------------------------------
function printTable(){
   
    var divToPrint = document.getElementById("table-container");
    var newWin = window.open("");
    newWin.document.write('<html><head><title>Print Table</title>');
    newWin.document.write('<style>');
    newWin.document.write('table { width: 100%; border-collapse: collapse; }');
    newWin.document.write('th, td { border: 1px solid black; padding: 8px; text-align: left; }');
    newWin.document.write('th { background-color: #f2f2f2; }');
    newWin.document.write('</style>');
    newWin.document.write('</head><body>');
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write('</body></html>');
    newWin.document.close();
    newWin.print();
    newWin.close();
}