import { getWishlist } from "./getWishlist.js";
import { addClick } from "./clickEvents.js";

export function renderProducts(product, target) {
  const element = document.querySelector(target);
  const wishlist = getWishlist();

  element.innerHTML = "";

  product.forEach(function (product) {
    let cssClass = "add-btn";

    const itemIsAdded = wishlist.find(function (item) {
      return parseInt(item.id) === product.id;
    });

    if (itemIsAdded) {
      cssClass = "added-btn";
    }

    element.innerHTML += `<div class="product">
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
}
