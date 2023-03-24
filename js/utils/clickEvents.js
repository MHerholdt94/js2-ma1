import { getWishlist } from "./getWishlist.js";
import { saveWishlist } from "./saveWishlist.js";
import { displayMessage } from "../constants/messages.js";

export function addClick() {
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

export function removeClick() {
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

  if (getWishlist().length === 0) {
    displayMessage(
      "empty-wishlist",
      "<p>:(</p>You have nothing added to your wishlist yet",
      ".products"
    );
  }
}
