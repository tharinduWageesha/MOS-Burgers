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


function addToCart(itemName, itemPrice, discount, qty) {
    console.log('Caddddddddd updated:', subTotal, totalDiscount, itemCounter);
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



