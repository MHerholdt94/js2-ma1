import { url } from "./constants/settings.js";
import { maxPriceFilter } from "./utils/maxPriceFilter.js";
import { renderProducts } from "./utils/renderProducts.js";

async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderProducts(products);
    maxPriceFilter(products);
  } catch (err) {
    console.log(err);
  }
}

getProducts();
