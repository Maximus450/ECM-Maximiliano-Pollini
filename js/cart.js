let productsOnCart = localStorage.getItem("products-on-cart");
productsOnCart = JSON.parse(productsOnCart);

const contentEmptyCart = document.querySelector("#empty-cart");
const contentProductCart = document.querySelector("#product-cart");
const contentActionCart = document.querySelector("#action-cart");
const contentBuyedCart = document.querySelector("#buyed-cart");
let buttonRemove = document.querySelectorAll(".cart-product-remove");
const buttonEmpty = document.querySelector("#action-cart-empty");
const contentTotal = document.querySelector("#total");
const buttonBuy = document.querySelector("#action-cart-buy");


function loadProductCart() {
    if (productsOnCart && productsOnCart.length > 0) {

        contentEmptyCart.classList.add("disabled");
        contentProductCart.classList.remove("disabled");
        contentActionCart.classList.remove("disabled");
        contentBuyedCart.classList.add("disabled");
    
        contentProductCart.innerHTML = "";
    
        productsOnCart.forEach(product => {
    
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = `
                <img class="cart-product-img" src="${product.img}" alt="${product.name}">
                <div class="cart-product-name">
                    <small>Name</small>
                    <h3>${product.name}</h3>
                </div>
                <div class="cart-product-ammount">
                    <small>Ammount</small>
                    <p>${product.ammount}</p>
                </div>
                <div class="cart-product-price">
                    <small>Price</small>
                    <p>$${product.price}</p>
                </div>
                <div class="cart-product-subtotal">
                    <small>Subtotal</small>
                    <p>$${product.price * product.ammount}</p>
                </div>
                <button class="cart-product-remove" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contentProductCart.append(div);
        })
    
    updateButtonRemove();
    updateTotal();
	
    } else {
        contentEmptyCart.classList.remove("disabled");
        contentProductCart.classList.add("disabled");
        contentActionCart.classList.add("disabled");
        contentBuyedCart.classList.add("disabled");
    }

}

loadProductCart();

function updateButtonRemove() {
    buttonRemove = document.querySelectorAll(".cart-product-remove");

    buttonRemove.forEach(button => {
      button.addEventListener("click", removeFromCart);
    });
}

function removeFromCart(e) {
    const idButton = e.currentTarget.id;
    const index = productsOnCart.findIndex(product => product.id === idButton);
    
    productsOnCart.splice(index, 1);
    loadProductCart();

    localStorage.setItem("products-on-cart", JSON.stringify(productsOnCart));

}

buttonEmpty.addEventListener("click", emptyCart);
function emptyCart() {
  productsOnCart.length = 0;
    localStorage.setItem("products-on-cart", JSON.stringify(productsOnCart));
    loadProductCart();
}


function updateTotal() {
    const totalCalculated = productsOnCart.reduce((acc, product) => acc + (product.price * product.ammount), 0);
    total.innerText = `$${totalCalculated}`;
}

buttonBuy.addEventListener("click", buyCart);
function buyCart() {

  productsOnCart.length = 0;
    localStorage.setItem("products-on-cart", JSON.stringify(productsOnCart));
    
    contentEmptyCart.classList.add("disabled");
    contentProductCart.classList.add("disabled");
    contentActionCart.classList.add("disabled");
    contentBuyedCart.classList.remove("disabled");

}