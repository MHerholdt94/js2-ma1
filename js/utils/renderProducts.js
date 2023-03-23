import { getWishlist } from "./getWishlist.js";

const wishlist = getWishlist();

export function renderProducts(product) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  product.forEach(function (product) {
    productsContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                        <div>
                                            <p>£${product.price}</p>
                                            <button>Wishlist</button>
                                        </div>
                                    </div>`;
  });
}
