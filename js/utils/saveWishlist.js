import { WISHLIST_KEY } from "../constants/settings.js";

export function saveWishlist(wishlist) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
