import { getWishlist } from "./getWishlist.js";

const wishlist = getWishlist();

export function renderProducts(product) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  product.forEach(function (product) {
    let cssClass = "add-btn";

    const itemIsAdded = wishlist.find(function (item) {
      return parseInt(item.id) === product.id;
    });

    if (itemIsAdded) {
      cssClass = "added-btn";
    }

    productsContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                        <div>
                                          <button class="default-btn ${cssClass}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">Wishlist</button>
                                          <p>£${product.price}</p>
                                        </div>
                                    </div>`;
  });

  const addButtons = document.querySelectorAll(".default-btn");

  addButtons.forEach((btn) => {
    btn.addEventListener("click", addClick);
  });

  function addClick() {
    this.classList.toggle("add-btn");
    this.classList.toggle("added-btn");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;

    const currentWishlist = getWishlist();

    const productExists = currentWishlist.find(function (item) {
      return item.id === id;
    });

    if (productExists === undefined) {
      const product = { id: id, title: title, price: price };
      currentWishlist.push(product);
      saveWishlist(currentWishlist);
    } else {
      const newWishlist = currentWishlist.filter((item) => item.id !== id);
      saveWishlist(newWishlist);
    }
  }

  function saveWishlist(items) {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }
}
