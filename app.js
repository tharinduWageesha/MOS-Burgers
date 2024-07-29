let subTotal = 0;
let totalDiscount = 0;
let deliveryCharge = 300;

function itemAdded(button, itemName, itemPrice, discount, qty) {
    console.log("Item added:", itemName, itemPrice, discount, qty); // Debugging line
    const discountForItem = itemPrice * (discount / 100) * qty;
    subTotal += itemPrice * qty;
    totalDiscount += discountForItem;

    button.innerHTML = "Item Added";
    button.style = "color: #000000; background-color: #e8e1c4; border: 0px solid #000000;";
    
    // Update local storage
    updateLocalStorage(subTotal, totalDiscount);

    // Update cart table (if present)
    updateCartTable(itemName, itemPrice, discount, qty);
}

function updateLocalStorage(subTotal, totalDiscount) {
    localStorage.setItem('subTotal', subTotal);
    localStorage.setItem('discount', totalDiscount);
}

function updateCartTable(itemName, itemPrice, discount, qty) {
    // Function to update cart table on MenuPage.html (if required)
    // This function can be enhanced to add items to a visual cart table
}

function updateCheckoutDiv() {
    // Function to update checkout summary on Cart.html
    const total = subTotal - totalDiscount + deliveryCharge;

    document.getElementById('SubTotal').value = subTotal.toFixed(2);
    document.getElementById('Discount').value = totalDiscount.toFixed(2);
    document.getElementById('Delivery').value = deliveryCharge.toFixed(2);
    document.getElementById('Total').value = total.toFixed(2);
}



// document.addEventListener('DOMContentLoaded', function () {
//     function itemAdded(button, itmName, itmPrice, dis, qty) {
//         button.innerHTML = "Item Added";
//         button.style = "color: #000000; background-color: #e8e1c4; border: 0px solid #000000;";
//         let name = itmName;
//         let price = itmPrice;
//         let discount = dis;
//         let quan = qty;
//         updateCartTable(name, price, discount, quan);
//     }

//     function updateCartTable(name, price, discount, quan) {
//         console.log("Updating cart table with:", name, price, discount, quan);
//         var table = document.getElementById("cartTable").getElementsByTagName('tbody')[0];
//         if (!table) {
//             console.error("Tbody element not found");
//             return;
//         }
//         var row = table.insertRow();

//         var cell1 = row.insertCell(0); // Item ID
//         var cell2 = row.insertCell(1); // Product Name
//         var cell3 = row.insertCell(2); // Unit Price
//         var cell4 = row.insertCell(3); // Quantity
//         var cell5 = row.insertCell(4); // Discount
//         var cell6 = row.insertCell(5); // Total

//         var discountedPrice = price - (price * discount / 100);
//         var total = discountedPrice * quan;

//         cell1.textContent = table.rows.length;
//         cell2.textContent = name;
//         cell3.textContent = 'LKR ' + price + '/-';
//         cell4.textContent = quan;
//         cell5.textContent = discount + '%';
//         cell6.textContent = 'LKR ' + total + '/-';
//     }

//     // Example of adding item via button click for testing
//     document.getElementById("addItemButton").addEventListener("click", function() {
//         itemAdded(this, "Burger", 500, 10, 2);
//     });
// });


