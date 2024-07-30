let subTotal = 0;
let totalDiscount = 0;
let deliveryCharge = 300;
let itemCounter = 1001; // Initialize with a number

// Function to add an item to the cart and update the table
function itemAdded(button, itemName, itemPrice, discount, qty) {
     // Validate input values
    if (itemName === undefined || itemPrice === undefined || discount === undefined || qty === undefined) {
        console.error('Invalid input values');
        return;
    }

    // Calculate totals
    const discountForItem = itemPrice * (discount / 100) * qty;
    subTotal += itemPrice * qty;
    totalDiscount += discountForItem;

    // Update button state
    button.innerHTML = "Item Added";
    button.style = "color: #000000; background-color: #e8e1c4; border: 0px solid #000000;";

    // Update local storage
    updateLocalStorage(subTotal, totalDiscount);
    addToCart(itemName, itemPrice, discount, qty);
}

function clearOrder() {

    const userConfirmed = confirm('Do you want to permanently delete this order?');
    
   
    if (userConfirmed) {

        const tableBody = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
        if (tableBody) {
            tableBody.innerHTML = '';
        }

        // Reset order details
        document.getElementById('SubTotal').value = "+ Rs 0.00/=";
        document.getElementById('Discount').value = " - Rs 0.00/=";
        document.getElementById('Delivery').value = "+ Rs 0.00/=";
        document.getElementById('Total').value = "Rs 0.00/=";

        // Clear local storage
        localStorage.removeItem('cartItems');
        localStorage.removeItem('subTotal');
        localStorage.removeItem('discount');

        // Optionally, reset customer details
        document.getElementById('CusNIC').value = '';
        document.getElementById('CusName').value = '';
        document.getElementById('CusContact').value = '';
        document.getElementById('CusAddress').value = '';
    }
}

// printTable in adminreports------------------
function printTable() {
    var divToPrint = document.getElementById("table-container");
    var newWin = window.open("");
    newWin.document.write('<html><head><title>Print Table</title>');
    newWin.document.write('<style>');
    newWin.document.write('body * { visibility: hidden; }');
    newWin.document.write('.table-container, .table-container * { visibility: visible; }');
    newWin.document.write('.table-container { position: absolute; top: 0; left: 0; width: 100%; }');
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




function addToCart(itemName, itemPrice, discount, qty) {
        // Create an item object
        const item = {
            id: Date.now(), // Unique ID for the item
            name: itemName,
            price: itemPrice,
            discount: discount,
            quantity: qty
        };

        // Retrieve existing cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add the new item to the cart
        cartItems.push(item);

        // Save the updated cart items back to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }



// Function to update local storage
function updateLocalStorage(subTotal, totalDiscount) {
    localStorage.setItem('subTotal', subTotal);
    localStorage.setItem('discount', totalDiscount);
}



