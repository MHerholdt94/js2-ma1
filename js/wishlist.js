import { getWishlist } from "./utils/getWishlist.js";

const wishlist = getWishlist();

const productsContainer = document.queryselector(".products");

if (wishlist.length === 0) {
  productsContainer.innerHTML = "You have nothing added to your wishlist yet";
}

wishlist.forEach((product) => {
  productsContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                        <div>
                                            <p>${product.price}</p>
                                            <button>Remove</button>
                                        </div>
                                    </div>`;
});
