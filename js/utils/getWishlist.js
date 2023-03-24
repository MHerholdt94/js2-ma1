import { WISHLIST_KEY } from "../constants/settings.js";

export function getWishlist() {
  const list = localStorage.getItem(WISHLIST_KEY);

  if (list === null) {
    return [];
  } else {
    return JSON.parse(list);
  }
}
