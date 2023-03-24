import { url } from "./constants/settings.js";
import { maxPriceFilter } from "./utils/maxPriceFilter.js";
import { renderProducts } from "./utils/renderProducts.js";
import { displayMessage } from "./constants/messages.js";

const container = ".products";

async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderProducts(products, container);
    maxPriceFilter(products, container);
  } catch (err) {
    console.log(err);
    displayMessage("error", err, container);
  }
}

getProducts();
