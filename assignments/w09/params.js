// params.js
console.log(window.location);

const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" },
];

function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

function productTemplate(product) {
  return `<section class="product">
    <img src="${product.image}" alt="${product.name}">
    <div class="product-details">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
    </div>
    </section>`;
}

function getProductDetails() {
    const id = getParams("productId")
    if (!id) return;
    const product = products.find(prod => prod.id == id);
    if (!product) return;
    output("main", productTemplate(product))
}

function output(selector, markup) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("beforeEnd", markup);
  }
  
  
  getProductDetails();