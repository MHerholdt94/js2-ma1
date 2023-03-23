import { renderProducts } from "./renderProducts.js";
import { displayMessage } from "../constants/messages.js";

export function maxPriceFilter(products) {
  const filter = document.querySelector(".filter");
  const productsContainer = document.querySelector(".products");

  filter.onkeyup = function (event) {
    const filterValue = event.target.value;

    const filteredProducts = products.filter(function (product) {
      if (product.price <= filterValue || filterValue.length === 0) {
        return true;
      }
    });

    renderProducts(filteredProducts);

    if (productsContainer.children.length === 0) {
      displayMessage(
        "error",
        `No products with a maximum value of £${filterValue} found, please try a higher value`,
        ".products"
      );
    }
  };
}
