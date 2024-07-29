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

function itemAdded(button, itmName, itmPrice, dis, qty) {
    console.log("Item added:", itmName, itmPrice, dis, qty); // Debugging line
    button.innerHTML = "Item Added";
    button.style = "color: #000000; background-color: #e8e1c4; border: 0px solid #000000;";
    updateCartTable(itmName, itmPrice, dis, qty);
}

document.addEventListener('DOMContentLoaded', function () {
    function itemAdded(button, itmName, itmPrice, dis, qty) {
        button.innerHTML = "Item Added";
        button.style = "color: #000000; background-color: #e8e1c4; border: 0px solid #000000;";
        let name = itmName;
        let price = itmPrice;
        let discount = dis;
        let quan = qty;
        updateCartTable(name, price, discount, quan);
    }

    function updateCartTable(name, price, discount, quan) {
        console.log("Updating cart table with:", name, price, discount, quan);
        var table = document.getElementById("cartTable").getElementsByTagName('tbody')[0];
        if (!table) {
            console.error("Tbody element not found");
            return;
        }
        var row = table.insertRow();

        var cell1 = row.insertCell(0); // Item ID
        var cell2 = row.insertCell(1); // Product Name
        var cell3 = row.insertCell(2); // Unit Price
        var cell4 = row.insertCell(3); // Quantity
        var cell5 = row.insertCell(4); // Discount
        var cell6 = row.insertCell(5); // Total

        var discountedPrice = price - (price * discount / 100);
        var total = discountedPrice * quan;

        cell1.textContent = table.rows.length;
        cell2.textContent = name;
        cell3.textContent = 'LKR ' + price + '/-';
        cell4.textContent = quan;
        cell5.textContent = discount + '%';
        cell6.textContent = 'LKR ' + total + '/-';
    }

    // Example of adding item via button click for testing
    document.getElementById("addItemButton").addEventListener("click", function() {
        itemAdded(this, "Burger", 500, 10, 2);
    });
});


