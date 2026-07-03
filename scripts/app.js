// =====================
// HOME PAGE (index.html)
// =====================

const productGrid = document.getElementById("product-grid");
let allProducts = [];

if (productGrid) {

    fetch("https://fakestoreapi.com/products?limit=8")
        .then(response => response.json())
        .then(products => {

            allProducts = products;

            products.forEach(product => {

                const card = document.createElement("div");
                card.classList.add("product-card");

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title.substring(0,40)}</h3>
                    <p>$${product.price}</p>
                    <button>Add To Cart</button>
                `;

                card.addEventListener("click", () => {
                    window.location.href = `product.html?id=${product.id}`;
                });

                productGrid.appendChild(card);

            });

        })
        .catch(error => console.log(error));

}


// =====================
// PRODUCT PAGE
// =====================

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if(productId){

    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {

        const productContainer =
            document.getElementById("product-details");

        if(productContainer){

            productContainer.innerHTML = `

<img
    src="${product.image}"
    srcset="
        ${product.image} 300w,
        ${product.image} 600w,
        ${product.image} 900w
    "
    sizes="
        (max-width:600px) 300px,
        (max-width:900px) 600px,
        900px
    "
    alt="${product.title}"
    loading="lazy"
>

<h1>${product.title}</h1>

<h2>$${product.price}</h2>

<p>${product.description}</p>

<div>

    <button id="minus">-</button>

    <span id="qty">1</span>

    <button id="plus">+</button>

</div>

<br>

<p>

    Total :
    $<span id="totalPrice">

        ${product.price.toFixed(2)}

    </span>

</p>

<button id="addToCart">

    Add To Cart

</button>

`;

            }

        });

}
