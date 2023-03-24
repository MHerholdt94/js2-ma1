import { renderProducts } from "./renderProducts.js";
import { displayMessage } from "../constants/messages.js";

export function maxPriceFilter(products, target) {
  const element = document.querySelector(target);

  function filterProducts() {
    const filterValue = event.target.value;

    const filteredProducts = products.filter(function (item) {
      if (item.price <= filterValue || filterValue.length === 0) {
        return true;
      }
    });

    renderProducts(filteredProducts, target);

    if (filterValue.length === 0) {
      renderProducts(products, target);
    }

    if (element.children.length === 0) {
      displayMessage(
        "error",
        `No products with a maximum value of £${filterValue} found, please try a higher value`,
        target
      );
    }
  }
  const filter = document.querySelector(".filter");

  filter.addEventListener("keyup", filterProducts);
}
