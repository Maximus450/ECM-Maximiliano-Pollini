const products = [
    { 
        id: "mouse-01", 
        name: "Logitech G502 Hero", 
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Mouse",
            id: "mouse"
        },
        price: 15739 
    },
    { 
        id: "mouse-02", 
        name: "Logitech G600 Gaming Black Rgb", 
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Mouse",
            id: "mouse"
        },
        price: 17156 
    },
    { 
        id: "mouse-03", 
        name: "Razer Deathadder v2 Lite", 
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Mouse",
            id: "mouse"
        },
        price: 11911 
    },
    { 
        id: "mouse-04", 
        name: "Redragon M988 Storm Elite", 
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Mouse",
            id: "mouse"
        },
        price: 10658 
    },
    { 
        id: "keyboard-01", 
        name: "Hyperx Alloy Core Rgb", 
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Keyboard",
            id: "keyboard"
        },
        price: 12471 
    },
    { 
        id: "keyboard-02", 
        name: "Logitech G213 Prodigy Rgb Gaming", 
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Keyboard",
            id: "keyboard"
        },
        price: 18285 
    },
    { 
        id: "keyboard-03", 
        name: "Genesis Thor 400 Rgb",  
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Keyboard",
            id: "keyboard"
        },
        price: 20174 
    },
    { 
        id: "keyboard-04", 
        name: "Redragon K580 Vata Pro Rgb",  
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Keyboard",
            id: "keyboard"
        },
        price: 19999 
    },
    { 
        id: "headphones-01", 
        name: "Redragon H350 Pandora 7.1 Black Rgb",  
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Headphones",
            id: "headphones"
        },
        price: 12157 
    },
    { 
        id: "headphones-02", 
        name: "Logitech G335 Gaming Black",  
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Headphones",
            id: "headphones"
        },
        price: 19721 
    },
    { 
        id: "headphones-03", 
        name: "Kingston Hyperx Cloud Stinger Core 7.1 Wireless Pc",  
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Headphones",
            id: "headphones"
        },
        price: 25108 
    },
    { 
        id: "headphones-04", 
        name: "Genesis Selen 400 Wireless",  
        img: "./img/placeholder_250x200.png",
        category: {
            name: "Headphones",
            id: "headphones"
        },
        price: 26301 
    }
];

const containerProducts = document.querySelector("#products-container");
let addButton = document.querySelectorAll(".add-product");
const number = document.querySelector("#number");

function addProducts(chosenproducts) {

    containerProducts.innerHTML = "";

    chosenproducts.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img class="product-img" src="${product.img}" alt="${product.name}">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="add-product" id="${product.id}">Add to cart</button>
            </div>
        `;

        containerProducts.append(div);
    })

    updateAddButton();
}

addProducts(products);

function updateAddButton() {
    addButton = document.querySelectorAll(".add-product");

    addButton.forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

let productsOnCart;

let productsOnCartLS = localStorage.getItem("products-on-cart");

if (productsOnCartLS) {
    productsOnCart = JSON.parse(productsOnCartLS);
    updateNumber();
} else {
    productsOnCart = [];
}

function addToCart(e) {
    const idButton = e.currentTarget.id;
    const addedProduct = products.find(product => product.id === idButton);

    if(productsOnCart.some(product => product.id === idButton)) {
        const index = productsOnCart.findIndex(product => product.id === idButton);
        productsOnCart[index].amount++;
    } else {
        addedProduct.amount = 1;
        productsOnCart.push(addedProduct);
    }

    updateNumber();

    localStorage.setItem("products-on-cart", JSON.stringify(productsOnCart));
}

function updateNumber() {
    let newNumber = productsOnCart.reduce((acc, product) => acc + product.amount, 0);
    number.innerText = newNumber;
}