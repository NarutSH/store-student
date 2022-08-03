const productContainer = document.querySelector(".product-container");
const searchInput = document.querySelector(".search-input");
let products = [];

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const resJson = await response.json();

  products = await resJson;

  resJson.map((item) => {
    const data = `<div class="card">
    <img
      src="${item.image}"
      alt="${item.title}"
      class="product-image"
    />
    <div class="card-content">
      <div class="product-title">${item.title}</div>
      <span class="product-description">${item.description}</span>

      <div class="product-footer">
        <span>$ ${item.price}</span>
        <span>⭐${item.rating.rate} (${item.rating.count})</span>
      </div>
    </div>
  </div>`;

    productContainer.insertAdjacentHTML("beforeend", data);
  });
};

const onSearchInput = (ev) => {
  productContainer.innerHTML = "";

  const filterProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(ev.target.value.toLowerCase());
  });

  filterProduct.map((item) => {
    const data = `<div class="card">
    <img
      src="${item.image}"
      alt="${item.title}"
      class="product-image"
    />
    <div class="card-content">
      <div class="product-title">${item.title}</div>
      <span class="product-description">${item.description}</span>

      <div class="product-footer">
        <span>$ ${item.price}</span>
        <span>⭐${item.rating.rate} (${item.rating.count})</span>
      </div>
    </div>
  </div>`;

    productContainer.insertAdjacentHTML("beforeend", data);
  });
};

getProducts();
searchInput.addEventListener("input", onSearchInput);
