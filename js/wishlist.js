import { getWishlist } from "./utils/getWishlist.js";
import { displayMessage } from "./constants/messages.js";

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

function removeClick() {
  this.parentElement.parentElement.style.display = "none";

  const id = this.dataset.id;
  const currentWishlist = getWishlist();
  const productExists = currentWishlist.find(function (item) {
    return item.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id };
    currentWishlist.pop(product);
    saveWishlist(currentWishlist);
  } else {
    const newWishlist = currentWishlist.filter((item) => item.id !== id);
    saveWishlist(newWishlist);
  }
}

function saveWishlist(items) {
  localStorage.setItem("wishlist", JSON.stringify(items));

  if (items.length === 0) {
    displayMessage(
      "empty-wishlist",
      "<p>:(</p>You have nothing added to your wishlist yet",
      ".products"
    );
  }
}
