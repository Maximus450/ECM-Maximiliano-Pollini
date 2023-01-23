let products = [];

fetch("./js/products.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    addProducts(products);
  })

const containerProducts = document.querySelector("#products-container");
const buttonCategory = document.querySelectorAll(".button-category");
const mainTittle = document.querySelector("#main-tittle");
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


buttonCategory.forEach(button => {
  button.addEventListener("click", (e) => {

    buttonCategory.forEach(button => button.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "all") {
        const productCategory = products.find(product => product.category.id === e.currentTarget.id);
        mainTittle.innerText = productCategory.category.name;
        const productsButton = products.filter(product => product.category.id === e.currentTarget.id);
        addProducts(productsButton);
    } else {
        mainTittle.innerText = "Products";
        addProducts(products);
    }

  })
});

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
    productsOnCart[index].ammount++;
  } else {
    addedProduct.ammount = 1;
    productsOnCart.push(addedProduct);
  }

  updateNumber();

  localStorage.setItem("products-on-cart", JSON.stringify(productsOnCart));
}

function updateNumber() {
  let newNumber = productsOnCart.reduce((acc, product) => acc + product.ammount, 0);
  number.innerText = newNumber;
}