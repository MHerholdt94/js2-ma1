import { getWishlist } from "./utils/getWishlist.js";
import { displayMessage } from "./constants/messages.js";
import { removeClick } from "./utils/clickEvents.js";

const wishlist = getWishlist();

const productsContainer = document.querySelector(".products");

productsContainer.innerHTML = "";

if (wishlist.length === 0) {
  displayMessage(
    "empty-wishlist",
    "<p>:(</p>You have nothing added to your wishlist yet",
    ".products"
  );
}

wishlist.forEach((product) => {
  productsContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                        <div>
                                          <button class="remove-btn" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">Remove</button>
                                          <p>£${product.price}</p>
                                        </div>
                                    </div>`;
});

const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach((btn) => {
  btn.addEventListener("click", removeClick);
});
