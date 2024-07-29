let subTotal = 0;
let totalDiscount = 0;
let deliveryCharge = 300;
let itemCounter = 1001; // Initialize with a number

// Function to add an item to the cart and update the table
function itemAdded(button, itemName, itemPrice, discount, qty) {
    console.log('Item Added Function Called');
    console.log("Item added:", itemName, itemPrice, discount, qty); // Debugging line

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

    // Generate a unique item ID
    let itemID = itemCounter++;

    // Update the cart table
    updateCartTable(itemID, itemName, itemPrice, discount, qty);
    updateCheckoutDiv(); // Update checkout details
}

// Function to update local storage
function updateLocalStorage(subTotal, totalDiscount) {
    localStorage.setItem('subTotal', subTotal);
    localStorage.setItem('discount', totalDiscount);
}

// Function to update the cart table
function updateCartTable(itemID, itemName, itemPrice, discount, qty) {
    console.log('Updating Cart Table');

    const tableBody = document.getElementById('cartTable').getElementsByTagName('tbody')[0];
    if (!tableBody) {
        console.error('Table body not found');
        return;
    }

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells into the new row
    const cell1 = newRow.insertCell(0); // Item ID
    const cell2 = newRow.insertCell(1); // Item Name
    const cell3 = newRow.insertCell(2); // Unit Price
    const cell4 = newRow.insertCell(3); // Quantity
    const cell5 = newRow.insertCell(4); // Discount
    const cell6 = newRow.insertCell(5); // Total

    // Populate cells with data
    cell1.textContent = itemID;
    cell2.textContent = itemName;
    cell3.textContent = `LKR ${itemPrice}`;
    cell4.textContent = qty;
    cell5.textContent = `${discount}%`;

    // Calculate and display the total price
    const total = itemPrice * qty * (1 - discount / 100);
    cell6.textContent = `LKR ${total.toFixed(2)}`;
}

// Function to update the checkout details
function updateCheckoutDiv() {
    const total = subTotal - totalDiscount + deliveryCharge;

    document.getElementById('SubTotal').value = `LKR ${subTotal.toFixed(2)}`;
    document.getElementById('Discount').value = `LKR ${totalDiscount.toFixed(2)}`;
    document.getElementById('Delivery').value = `LKR ${deliveryCharge.toFixed(2)}`;
    document.getElementById('Total').value = `LKR ${total.toFixed(2)}`;
}
