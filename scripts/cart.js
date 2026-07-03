// ======================================
// NOVASTORE CART
// ======================================

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const grandTotal = document.getElementById("grand-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <h2>🛒 Your Shopping Cart is Empty</h2>

                <p>You haven't added any products yet.</p>

                <br>

                <a href="index.html" class="checkout-btn">
                    Continue Shopping
                </a>

            </div>
        `;

        totalElement.textContent = "0.00";

        if (grandTotal) {
            grandTotal.textContent = "0.00";
        }

        updateCartCount();
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `

        <div class="cart-card">

            <div class="cart-image">

                <img src="${item.image}" alt="${item.title}">

            </div>

            <div class="cart-details">

                <h3>${item.title}</h3>

                <p class="cart-price">$${item.price.toFixed(2)}</p>

                <div class="quantity-box">

                    <button onclick="decreaseQty(${index})">-</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQty(${index})">+</button>

                </div>

            </div>

            <div class="cart-actions">

                <h3>$${itemTotal.toFixed(2)}</h3>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                    Remove

                </button>

            </div>

        </div>

        `;

    });

    totalElement.textContent = total.toFixed(2);

    if (grandTotal) {
        grandTotal.textContent = total.toFixed(2);
    }

    updateCartCount();

}

function increaseQty(index) {

    cart[index].quantity++;

    saveCart();

}

function decreaseQty(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

        saveCart();

    }

}

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

}

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function updateCartCount() {

    const count = cart.reduce((sum, item) => {

        return sum + item.quantity;

    }, 0);

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {

        cartCount.textContent = count;

    }

}

displayCart();